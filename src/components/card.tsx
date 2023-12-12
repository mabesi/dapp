import { NFT } from "@/services/Web3Service";
import Link from "next/link";
import Image from "next/image";

type Props = {
    nft: NFT;
    sold?: boolean;
}

function Card(props: Props) {
    return (
        <div className="px-3 w-full md:w-6/12 lg:w-4/12">
            <div className="bg-white overflow-hidden rounded-xl text-gray-500">
                <Link href={`/details/${props.nft.itemId}`} className="block group relative">
                    <Image src={props.nft.image} className="group-hover:opacity-90 w-full" alt="..." width="600" height="600" />
                </Link>
                <div className="px-4 py-6 sm:px-6">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-xl">
                            <Link href={`/details/${props.nft.itemId}`} className="hover:text-primary-500 text-gray-900">{props.nft.name}</Link>
                        </h3>
                    </div>
                    <hr className="border-gray-200 my-4" />
                    <div className="flex items-center justify-between">
                        <div>
                            <Link href={`/details/${props.nft.itemId}`} className="hover:text-gray-400 inline-flex italic items-center space-x-2 text-sm">
                                <span>by {props.nft.description}</span>
                            </Link>
                        </div>
                        {
                            !props.sold
                                ? (
                                    <div>
                                        <Link href={`/details/${props.nft.itemId}`} className="group inline-block text-secondary-500">
                                            <p className="group-hover:text-primary-500 mb-1 text-gray-500 text-sm">Buy Now</p> <span className="font-bold font-serif text-xl">MATIC {props.nft.price.toString().substring(0, 4)}</span>
                                        </Link>
                                    </div>
                                )
                                : <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
