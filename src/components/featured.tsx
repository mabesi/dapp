import { NFT } from "@/services/Web3Service";

type Props = {
    nft?: NFT
}

function Featured(props: Props) {

    const defaultImage = "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDQxfHxhcnQlMjBnYWxsZXJ5fGVufDB8fHx8MTYzNjUwNTg4OA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop";

    return (
        <div className="px-4 w-full lg:w-6/12 xl:w-5/12">
            <div className="-ml-4 bg-secondary-500 p-4 rounded-2xl w-10/12 sm:-ml-6 sm:p-6 md:w-7/12 lg:w-full">
                <a href={props.nft ? "/details/" + props.nft.itemId : "#"} className="block group overflow-hidden relative rounded-xl">
                    <img src={props.nft ? props.nft.image : defaultImage} className="w-full" alt="..." width="600" height="600" />
                    <div className="absolute bg-opacity-10 bg-white bottom-0 flex group-hover:bg-opacity-20 inset-x-0 items-center justify-between p-4 text-white sm:px-6">
                        <h2 className="font-bold">{props.nft ? props.nft.name : "Loading..."}</h2>
                        <span className="italic opacity-50">by {props.nft ? props.nft.description : "Loading..."}</span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Featured;