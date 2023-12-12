import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NFT, loadDetails } from '@/services/Web3Service';

function Details() {

    const router = useRouter();
    const itemId = router.query.itemId;
    const [nft, setNft] = useState<NFT>();
    const [msg, setMsg] = useState<string>("");

    useEffect(() => {
        loadDetails(Number(itemId))
            .then(nft => setNft(nft))
            .catch(err => setMsg(err.message));
        }, [itemId]);

    return (
        <>
            {itemId}
        </>
    )
}

export default Details;