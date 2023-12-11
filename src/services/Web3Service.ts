import axios from "axios";
import { ethers } from "ethers";
import NFTCollectionABI from "./NFTCollection.abi.json";
import NFTMarketABI from "./NFTMarket.abi.json";

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

export async function uploadAndCreate(nft: NewNFT) : Promise<number> {

    if (!nft.name || !nft.description || !nft.image || !nft.price)
        throw new Error("All fields are required.");

    const uri = await uploadFile(nft.image);
    const metadataUri = await uploadMetadata({name: nft.name, description: nft.description, image: uri})
    
    console.log(metadataUri);
    //Upload da imagem

    //Criação dos metadados

    //Mint do NFT

    //Criação do market item

    return 1;

}