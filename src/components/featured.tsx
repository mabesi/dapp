import Link from 'next/link';

function Featured() {
    return (
        <>
            <div className="px-4 w-full lg:w-6/12 xl:w-5/12"> 
                <div className="-ml-4 bg-secondary-500 p-4 rounded-2xl w-10/12 sm:-ml-6 sm:p-6 md:w-7/12 lg:w-full">
                <Link href="#" className="block group overflow-hidden relative rounded-xl">
                    <img src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDQxfHxhcnQlMjBnYWxsZXJ5fGVufDB8fHx8MTYzNjUwNTg4OA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop" className="w-full" alt="..." width="600" height="600"/>
                    <div className="absolute bg-opacity-10 bg-white bottom-0 flex group-hover:bg-opacity-20 inset-x-0 items-center justify-between p-4 text-white sm:px-6"> 
                        <h2 className="font-bold">Digitalized Zeus</h2>
                        <span className="italic opacity-50">by Kingsah82</span> 
                    </div>
                </Link> 
                </div>                             
            </div>
        </>
    )
}

export default Featured;