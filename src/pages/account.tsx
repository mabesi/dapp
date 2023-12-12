import { loadMyNFTs, NFT } from "@/services/Web3Service";
import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "@/components/header";
import Card from "@/components/card";

function Account() {

    const [nfts, setNfts] = useState<NFT[]>([]);

    useEffect(() => {
        loadMyNFTs()
            .then(nfts => setNfts(nfts))
            .catch(err => alert(err.message));
    }, [])

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>OpenC | My NFTs</title>
            </Head>
            <section className="bg-secondary-500 poster pt-4 relative text-opacity-60 text-white sm:px-4">
                <Header />
            </section>
            <section className="bg-opacity-10 bg-primary-500 py-24 sm:px-4">
                <div className="container mx-auto px-4">
                    <div className="-mx-4 flex flex-wrap gap-2 items-center mb-6">
                        <div className="px-4 w-full md:flex-1">
                            <h2 className="capitalize font-bold text-3xl text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.25em" height="1.25em" className="inline-block mb-2 mr-2 text-primary-500">
                                <path d="M12 23a7.5 7.5 0 0 1-5.138-12.963C8.204 8.774 11.5 6.5 11 1.5c6 4 9 8 3 14 1 0 2.5 0 5-2.47.27.773.5 1.604.5 2.47A7.5 7.5 0 0 1 12 23z"></path>
                            </svg><span>My NFTs</span></h2>
                        </div>
                    </div>
                    <div className="-mx-3 flex flex-wrap gap-y-6 justify-center mb-12">
                        {
                            nfts && nfts.length 
                            ? nfts.map(nft => <Card nft={nft} sold={true} />)
                            : <>No NFTs found for this user.</>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Account;