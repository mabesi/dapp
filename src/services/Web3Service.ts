import axios from "axios";
import { EventLog, ethers } from "ethers";
import NFTCollectionABI from "./NFTCollection.abi.json";
import NFTMarketABI from "./NFTMarket.abi.json";
import Web3Modal from 'web3modal';

const MARKETPLACE_ADDRESS = `${process.env.MARKETPLACE_ADDRESS}`;
const COLLECTION_ADDRESS = `${process.env.COLLECTION_ADDRESS}`;

export type NewNFT = {
    name?: string;
    description?: string;
    price?: string;
    image?: File;
}

type Metadata = {
    name?: string;
    description?: string;
    image?: string;
}

async function uploadFile(file: File) : Promise<string> {

    const formData = new FormData();
    formData.append("file", file);

    const response = await axios({
        method: "POST",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: formData,
        headers: {
            "pinata_api_key": `${process.env.API_KEY}`,
            "pinata_secret_api_key": `${process.env.API_SECRET}`,
            "Content-Type": "multipart/form-data"
        }
    });

    return `ipfs://${response.data.IpfsHash}`;
}

async function uploadMetadata(metadata: Metadata) {

    const response = await axios({
        method: "POST",
        url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
        data: {"pinataContent": metadata, "pinataMetadata": {name: metadata.name + ".json"}},
        headers: {
            "pinata_api_key": `${process.env.API_KEY}`,
            "pinata_secret_api_key": `${process.env.API_SECRET}`,
            "Content-Type": "application/json"
        }
    });

    return `ipfs://${response.data.IpfsHash}`;    
}

async function getProvider() {

    const web3modal = new Web3Modal({providerOptions: {}});
    const instance = await web3modal.connect();

    if (!instance) throw new Error("No wallet found or allowed");

    return new ethers.BrowserProvider(instance);
}

async function createItem(url: string, price: string) : Promise<number> {

    const provider = await getProvider();
    const signer = await provider.getSigner();

    // Mint NFT
    const collectionContract = new ethers.Contract(COLLECTION_ADDRESS, NFTCollectionABI, signer);
    const mintTx = await collectionContract.mint(url);
    const mintTxReceipt : ethers.ContractTransactionReceipt = await mintTx.wait();
    let eventLog = mintTxReceipt.logs[0] as EventLog;
    const tokenId = Number(eventLog.args[2]);

    // Create Market Item
    const weiPrice = ethers.parseUnits(price, "ether");
    const marketContract = new ethers.Contract(MARKETPLACE_ADDRESS, NFTMarketABI, signer);
    const listingPrice = (await marketContract.listingPrice()).toString();
    const createTx = await marketContract.createMarketItem(COLLECTION_ADDRESS, tokenId, weiPrice, {value: listingPrice});
    const createTxReceipt : ethers.ContractTransactionReceipt = await createTx.wait();

    console.log(createTxReceipt);

    eventLog = createTxReceipt.logs.find(l => (l as EventLog).eventName === "MarketItemCreated") as EventLog;
    const itemId = Number(eventLog.args[0]);

    return itemId;
}

export async function uploadAndCreate(nft: NewNFT) : Promise<number> {

    if (!nft.name || !nft.description || !nft.image || !nft.price)
        throw new Error("All fields are required.");

    const uri = await uploadFile(nft.image);
    const metadataUri = await uploadMetadata({name: nft.name, description: nft.description, image: uri})

    console.log(metadataUri);
    
    const itemId = await createItem(metadataUri, nft.price);

    return itemId;
}