import Image from 'next/image';
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>Mabesi NFT Marketplace</title>
      </Head>
      <main>
          <section className="bg-secondary-500 poster pt-4 relative text-opacity-60 text-white sm:px-4">
              <div className="absolute bg-secondary-500 h-full inset-0 w-6/12 z-0 md:w-5/12 lg:w-4/12"></div>
              <div className="container mx-auto relative"> 
                  <nav className="flex flex-wrap items-center px-4 py-2">
                    <a href="#" className="font-bold gap-2 hover:text-gray-300 inline-flex items-center leading-none mr-4 text-3xl text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.142 40" width="1.5em" height="1.5em" fill="currentColor">
                        <path data-name="Path 7167" d="M20 40a20.005 20.005 0 0 1-7.785-38.428 19.983 19.983 0 0 1 21.927 4.286L29.895 10.1a14 14 0 1 0 0 19.79l4.247 4.247A19.937 19.937 0 0 1 20 40Z"/>
                        <path data-name="Path 7168" d="M20 14a6 6 0 1 1-6 6 6 6 0 0 1 6-6Z"/>
                      </svg><span className="uppercase">Mabesi NFT Market</span>
                    </a> 
                      <button className="hover:bg-primary-500 hover:text-white ml-auto px-3 py-2 rounded text-white lg:hidden" data-name="nav-toggler" data-pg-ia='{"l":[{"name":"NabMenuToggler","trg":"click","a":{"l":[{"t":"^nav|[data-name=nav-menu]","l":[{"t":"set","p":0,"d":0,"l":{"class.remove":"hidden"}}]},{"t":"#gt# span:nth-of-type(1)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":45,"yPercent":300}}]},{"t":"#gt# span:nth-of-type(2)","l":[{"t":"tween","p":0,"d":0.2,"l":{"autoAlpha":0}}]},{"t":"#gt# span:nth-of-type(3)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":-45,"yPercent":-300}}]}]},"pdef":"true","trev":"true"}]}' data-pg-ia-apply="$nav [data-name=nav-toggler]"> <span className="block border-b-2 border-current my-1 w-6"></span> <span className="block border-b-2 border-current my-1 w-6"></span> <span className="block border-b-2 border-current my-1 w-6"></span> 
                      </button>                         
                      <div className="flex-1 hidden space-y-2 w-full lg:flex lg:items-center lg:space-x-4 lg:space-y-0 lg:w-auto" data-name="nav-menu"> 
                          <div className="flex flex-col ml-auto lg:flex-row">
                            <a href="/" className="font-medium hover:text-gray-300 py-2 text-opacity-60 text-white lg:p-4 xl:px-6">Home</a>
                            <a href="/create" className="font-medium hover:text-gray-300 py-2 text-opacity-60 text-white lg:p-4 xl:px-6">Create</a>
                          </div>
                          <a href="#" className="bg-gradient-to-t bg-primary-500 font-bold from-primary-500 hover:bg-primary-600 hover:from-primary-600 hover:to-primary-500 inline-block px-6 py-2 rounded text-white to-primary-400">My NFTs</a> 
                      </div>                         
                  </nav>                     
              </div>
              <div className="container mx-auto pb-36 pt-16 px-4 relative">
                  <div className="-mx-4 flex flex-wrap items-center space-y-6 lg:space-y-0">
                      <div className="px-4 w-full lg:w-6/12 xl:w-5/12"> 
                          <div className="-ml-4 bg-secondary-500 p-4 rounded-2xl w-10/12 sm:-ml-6 sm:p-6 md:w-7/12 lg:w-full"> <a href="#" className="block group overflow-hidden relative rounded-xl"><img src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDQxfHxhcnQlMjBnYWxsZXJ5fGVufDB8fHx8MTYzNjUwNTg4OA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop" className="w-full" alt="..." width="600" height="600"/><div className="absolute bg-opacity-10 bg-white bottom-0 flex group-hover:bg-opacity-20 inset-x-0 items-center justify-between p-4 text-white sm:px-6"> 
                                      <h2 className="font-bold">Digitalized Zeus</h2>
                                      <span className="italic opacity-50">by Kingsah82</span> 
                                  </div></a> 
                          </div>                             
                      </div>
                      <div className="mx-auto px-4 w-full lg:w-6/12"> 
                          <h1 className="font-bold leading-tight mb-2 text-4xl text-white md:leading-tight md:text-5xl lg:leading-tight lg:text-6xl 2xl:leading-tight 2xl:text-7xl">Discover rare digital arts and collect NFTs</h1>
                          <p className="font-light mb-12 text-xl">World largest marketplace for rarest NFTs.</p>
                          <div className="flex flex-wrap gap-4 items-center">
                            <a href="/create" className="bg-gradient-to-t bg-primary-500 font-bold from-primary-500 hover:bg-primary-600 hover:from-primary-600 hover:to-primary-500 inline-block px-12 py-2 rounded text-white to-primary-400">Create</a> 
                          </div>                             
                      </div>
                  </div>
              </div>
          </section>
          <section className="bg-opacity-10 bg-primary-500 py-24 sm:px-4"> 
              <div className="container mx-auto px-4"> 
                  <div className="-mx-4 flex flex-wrap gap-2 items-center mb-6"> 
                      <div className="px-4 w-full md:flex-1"> 
                          <h2 className="capitalize font-bold text-3xl text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.25em" height="1.25em" className="inline-block mb-2 mr-2 text-primary-500">
                                  <path d="M12 23a7.5 7.5 0 0 1-5.138-12.963C8.204 8.774 11.5 6.5 11 1.5c6 4 9 8 3 14 1 0 2.5 0 5-2.47.27.773.5 1.604.5 2.47A7.5 7.5 0 0 1 12 23z"></path>
                              </svg><span>Hot Collectibles</span></h2> 
                      </div>
                      <div className="px-4 w-full md:w-auto"> 
                          <form> 
                              <div className="bg-white border border-gray-300 flex overflow-hidden p-1 rounded-full"> 
                                  <input className="appearance-none flex-1 outline-none px-4 py-1 text-gray-600 w-full" placeholder="Find your next NFTs" type="text" /> 
                                  <button type="submit" className="bg-gradient-to-t bg-primary-500 from-primary-500 hover:bg-primary-600 hover:from-primary-600 hover:to-primary-500 inline-block p-2 rounded-full text-white to-primary-400" aria-label="search">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.25em" height="1.25em">
                                          <g>
                                              <path fill="none" d="M0 0h24v24H0z"></path>
                                              <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path>
                                          </g>
                                      </svg>
                                  </button>                                     
                              </div>                                 
                          </form>                             
                      </div>                         
                  </div>
                  <div className="-mx-3 flex flex-wrap gap-y-6 justify-center mb-12"> 
                      <div className="px-3 w-full md:w-6/12 lg:w-4/12"> 
                          <div className="bg-white overflow-hidden rounded-xl text-gray-500"> <a href="#" className="block group relative"><img src="https://images.unsplash.com/photo-1635323979696-a0279890cf25?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDQ1fHxkaWdpdGFsJTIwYXJ0JTIwcmVuZGVyfGVufDB8fHx8MTYzODkxODA2Nw&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop" className="group-hover:opacity-90 w-full" alt="..." width="600" height="600"/><div className="absolute bg-gray-900 bottom-4 gap-2 inline-flex items-center opacity-75 px-2 py-1 right-6 rounded-full text-white"><span>1879</span>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.35em" height="1.25em">
                                          <path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                                      </svg>
                                  </div></a>
                              <div className="px-4 py-6 sm:px-6">
                                  <div className="flex items-center justify-between">
                                      <h3 className="font-bold text-xl"><a href="#" className="hover:text-primary-500 text-gray-900">Octo Police Car</a></h3><a className="hover:text-primary-500 inline-block rounded-full text-gray-900" href="#" aria-label="add to favorite"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="2em" height="2em">
                                              <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"/>
                                          </svg></a>
                                  </div>
                                  <hr className="border-gray-200 my-4"/>
                                  <div className="flex items-center justify-between">
                                      <div><a href="#" className="hover:text-gray-400 inline-flex italic items-center space-x-2 text-sm"> <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDE5fHxkb2d8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=400&h=400&fit=crop" className="border-4 border-secondary-500 rounded-full" alt="..." width="36" height="36"/><span>Owned by OneNaybor</span></a>
                                      </div>
                                      <div><a href="#" className="group inline-block text-secondary-500"> <p className="group-hover:text-primary-500 mb-1 text-gray-500 text-sm">Buy Now</p> <span className="font-bold font-serif text-xl">$245</span> </a>
                                      </div>
                                  </div>
                              </div>                                 
                          </div>                             
                      </div>
                      <div className="px-3 w-full md:w-6/12 lg:w-4/12"> 
                          <div className="bg-white overflow-hidden rounded-xl text-gray-500"> <a href="#" className="block group relative"><img src="https://images.unsplash.com/photo-1635373670332-43ea883bb081?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDI5M3x8M2QlMjByZW5kZXJ8ZW58MHx8fHwxNjM4OTE4NDE3&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop" className="group-hover:opacity-90 w-full" alt="..." width="600" height="600"/><div className="absolute bg-gray-900 bottom-4 gap-2 inline-flex items-center opacity-75 px-2 py-1 right-6 rounded-full text-white"><span>1879</span>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.35em" height="1.25em">
                                          <path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                                      </svg>
                                  </div></a>
                              <div className="px-4 py-6 sm:px-6">
                                  <div className="flex items-center justify-between">
                                      <h3 className="font-bold text-xl"><a href="#" className="hover:text-primary-500 text-gray-900">Space and Gone</a></h3><a className="hover:text-primary-500 inline-block rounded-full text-gray-900" href="#" aria-label="add to favorite"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="2em" height="2em">
                                              <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"/>
                                          </svg></a>
                                  </div>
                                  <hr className="border-gray-200 my-4"/>
                                  <div className="flex items-center justify-between">
                                      <div><a href="#" className="hover:text-gray-400 inline-flex italic items-center space-x-2 text-sm"> <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDE5fHxkb2d8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=400&h=400&fit=crop" className="border-4 border-secondary-500 rounded-full" alt="..." width="36" height="36"/><span>Created by Automex</span></a>
                                      </div>
                                      <div><a href="#" className="group inline-block text-secondary-500"> <p className="group-hover:text-primary-500 mb-1 text-gray-500 text-sm">Buy Now</p> <span className="font-bold font-serif text-xl">$3425</span> </a>
                                      </div>
                                  </div>
                              </div>                                 
                          </div>                             
                      </div>
                      <div className="px-3 w-full md:w-6/12 lg:w-4/12"> 
                          <div className="bg-white overflow-hidden rounded-xl text-gray-500"> <a href="#" className="block group relative"><img src="https://images.unsplash.com/photo-1630313877297-8773445184b9?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDV8fGRpZ2l0YWwlMjBhcnR8ZW58MHx8fHwxNjM4ODI2MzM4&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop" className="group-hover:opacity-90 w-full" alt="..." width="600" height="600"/><div className="absolute bg-gray-900 bottom-4 gap-2 inline-flex items-center opacity-75 px-2 py-1 right-6 rounded-full text-white"><span>1879</span>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.35em" height="1.25em">
                                          <path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                                      </svg>
                                  </div></a>
                              <div className="px-4 py-6 sm:px-6">
                                  <div className="flex items-center justify-between">
                                      <h3 className="font-bold text-xl"><a href="#" className="hover:text-primary-500 text-gray-900">An Apple You Can&apos;t Eat</a></h3><a className="hover:text-primary-500 inline-block rounded-full text-gray-900" href="#" aria-label="add to favorite"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="2em" height="2em">
                                              <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"/>
                                          </svg></a>
                                  </div>
                                  <hr className="border-gray-200 my-4"/>
                                  <div className="flex items-center justify-between">
                                      <div><a href="#" className="hover:text-gray-400 inline-flex italic items-center space-x-2 text-sm"> <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDE5fHxkb2d8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=400&h=400&fit=crop" className="border-4 border-secondary-500 rounded-full" alt="..." width="36" height="36"/><span>Owned by Kingsah82</span></a>
                                      </div>
                                      <div><a href="#" className="group inline-block text-secondary-500"> <p className="group-hover:text-primary-500 mb-1 text-gray-500 text-sm">Buy Now</p> <span className="font-bold font-serif text-xl">$5320</span> </a>
                                      </div>
                                  </div>
                              </div>                                 
                          </div>                             
                      </div>
                      <div className="px-3 w-full md:w-6/12 lg:w-4/12"> 
                          <div className="bg-white overflow-hidden rounded-xl text-gray-500"> <a href="#" className="block group relative"><img src="https://images.unsplash.com/photo-1635322966219-b75ed372eb01?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDkwfHxkaWdpdGFsJTIwcGFpbnRpbmd8ZW58MHx8fHwxNjM4OTE4NTUx&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop" className="group-hover:opacity-90 w-full" alt="..." width="600" height="600"/><div className="absolute bg-gray-900 bottom-4 gap-2 inline-flex items-center opacity-75 px-2 py-1 right-6 rounded-full text-white"><span>1879</span>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.35em" height="1.25em">
                                          <path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                                      </svg>
                                  </div></a>
                              <div className="px-4 py-6 sm:px-6">
                                  <div className="flex items-center justify-between">
                                      <h3 className="font-bold text-xl"><a href="#" className="hover:text-primary-500 text-gray-900">Octo Police Car</a></h3><a className="hover:text-primary-500 inline-block rounded-full text-gray-900" href="#" aria-label="add to favorite"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="2em" height="2em">
                                              <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"/>
                                          </svg></a>
                                  </div>
                                  <hr className="border-gray-200 my-4"/>
                                  <div className="flex items-center justify-between">
                                      <div><a href="#" className="hover:text-gray-400 inline-flex italic items-center space-x-2 text-sm"> <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDE5fHxkb2d8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=400&h=400&fit=crop" className="border-4 border-secondary-500 rounded-full" alt="..." width="36" height="36"/><span>Created by CrownMitzi</span></a>
                                      </div>
                                      <div><a href="#" className="group inline-block text-secondary-500"> <p className="group-hover:text-primary-500 mb-1 text-gray-500 text-sm">Buy Now</p> <span className="font-bold font-serif text-xl">$1.2K</span> </a>
                                      </div>
                                  </div>
                              </div>                                 
                          </div>                             
                      </div>
                      <div className="px-3 w-full md:w-6/12 lg:w-4/12"> 
                          <div className="bg-white overflow-hidden rounded-xl text-gray-500"> <a href="#" className="block group relative"><img src="https://images.unsplash.com/photo-1634832413517-7f48f67e3da4?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDU2fHxkaWdpdGFsJTIwYXJ0JTIwcmVuZGVyfGVufDB8fHx8MTYzODkxODA2Nw&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop" className="group-hover:opacity-90 w-full" alt="..." width="600" height="600"/><div className="absolute bg-gray-900 bottom-4 gap-2 inline-flex items-center opacity-75 px-2 py-1 right-6 rounded-full text-white"><span>1879</span>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.35em" height="1.25em">
                                          <path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                                      </svg>
                                  </div></a>
                              <div className="px-4 py-6 sm:px-6">
                                  <div className="flex items-center justify-between">
                                      <h3 className="font-bold text-xl"><a href="#" className="hover:text-primary-500 text-gray-900">Octo Police Car</a></h3><a className="hover:text-primary-500 inline-block rounded-full text-gray-900" href="#" aria-label="add to favorite"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="2em" height="2em">
                                              <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"/>
                                          </svg></a>
                                  </div>
                                  <hr className="border-gray-200 my-4"/>
                                  <div className="flex items-center justify-between">
                                      <div><a href="#" className="hover:text-gray-400 inline-flex italic items-center space-x-2 text-sm"> <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDE5fHxkb2d8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=400&h=400&fit=crop" className="border-4 border-secondary-500 rounded-full" alt="..." width="36" height="36"/><span>Owned by Bloomanki</span></a>
                                      </div>
                                      <div><a href="#" className="group inline-block text-secondary-500"> <p className="group-hover:text-primary-500 mb-1 text-gray-500 text-sm">Buy Now</p> <span className="font-bold font-serif text-xl">$90</span> </a>
                                      </div>
                                  </div>
                              </div>                                 
                          </div>                             
                      </div>
                      <div className="px-3 w-full md:w-6/12 lg:w-4/12"> 
                          <div className="bg-white overflow-hidden rounded-xl text-gray-500"> <a href="#" className="block group relative"><img src="https://images.unsplash.com/photo-1636975262325-a0c611796b4a?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDV8fGRpZ2l0YWwlMjBhcnR8ZW58MHx8fHwxNjM4ODI2MzM4&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=600&fit=crop" className="group-hover:opacity-90 w-full" alt="..." width="600" height="600"/><div className="absolute bg-gray-900 bottom-4 gap-2 inline-flex items-center opacity-75 px-2 py-1 right-6 rounded-full text-white"><span>1879</span>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.35em" height="1.25em">
                                          <path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                                      </svg>
                                  </div></a>
                              <div className="px-4 py-6 sm:px-6">
                                  <div className="flex items-center justify-between">
                                      <h3 className="font-bold text-xl"><a href="#" className="hover:text-primary-500 text-gray-900">Octo Police Car</a></h3><a className="hover:text-primary-500 inline-block rounded-full text-gray-900" href="#" aria-label="add to favorite"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="2em" height="2em">
                                              <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"/>
                                          </svg></a>
                                  </div>
                                  <hr className="border-gray-200 my-4"/>
                                  <div className="flex items-center justify-between">
                                      <div><a href="#" className="hover:text-gray-400 inline-flex italic items-center space-x-2 text-sm"> <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDE5fHxkb2d8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=400&h=400&fit=crop" className="border-4 border-secondary-500 rounded-full" alt="..." width="36" height="36"/><span>Created by StoneWs</span></a>
                                      </div>
                                      <div><a href="#" className="group inline-block text-secondary-500"> <p className="group-hover:text-primary-500 mb-1 text-gray-500 text-sm">Buy Now</p> <span className="font-bold font-serif text-xl">$540</span> </a>
                                      </div>
                                  </div>
                              </div>                                 
                          </div>                             
                      </div>                         
                  </div>
                  <div className="text-center"><a href="#" className="bg-gradient-to-t bg-primary-500 from-primary-500 hover:bg-primary-600 hover:from-primary-600 hover:to-primary-500 inline-block px-6 py-2 rounded text-white to-primary-400">View More</a>
                  </div>
              </div>                 
          </section>
        </main>

        <footer className="bg-secondary-500 text-gray-400 sm:px-4"> 
            <div className="container mx-auto pt-12 px-4 relative"> 
                <div className="-mx-4 flex flex-wrap gap-6 items-end mb-12"> 
                    <div className="px-4 w-full lg:w-6/12 xl:w-5/12"> 
                        <h2 className="font-bold mb-4 text-2xl text-white">Join the movement, stay updated</h2>
                    </div>
                    <div className="px-4 w-full lg:w-auto ml-auto"> 
                        <div className="flex-wrap gap-2 inline-flex sm:gap-4"> <a href="#" className="bg-gradient-to-t bg-primary-500 from-primary-500 hover:bg-primary-600 hover:from-primary-600 hover:to-primary-500 inline-block p-3 rounded-full text-white to-primary-400" aria-label="facebook"> <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"> 
                                    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"></path>                                     
                                </svg></a> <a href="#" className="bg-gradient-to-t bg-primary-500 from-primary-500 hover:bg-primary-600 hover:from-primary-600 hover:to-primary-500 inline-block p-3 rounded-full text-white to-primary-400" aria-label="twitter"> <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"> 
                                    <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>                                     
                                </svg></a> <a href="#" className="bg-gradient-to-t bg-primary-500 from-primary-500 hover:bg-primary-600 hover:from-primary-600 hover:to-primary-500 inline-block p-3 rounded-full text-white to-primary-400" aria-label="instagram"> <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"> 
                                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path>                                     
                                </svg></a> <a href="#" className="bg-gradient-to-t bg-primary-500 from-primary-500 hover:bg-primary-600 hover:from-primary-600 hover:to-primary-500 inline-block p-3 rounded-full text-white to-primary-400" aria-label="linkedin"> <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"> 
                                    <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"></path>                                     
                                </svg></a> <a href="#" className="bg-gradient-to-t bg-primary-500 from-primary-500 hover:bg-primary-600 hover:from-primary-600 hover:to-primary-500 inline-block p-3 rounded-full text-white to-primary-400" aria-label="youtube"> <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"> 
                                    <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"></path>                                     
                                </svg></a> 
                        </div>                         
                    </div>                     
                </div>
                <hr className="my-6 opacity-20"/>
                <div className="flex flex-wrap -mx-4"> 
                    <div className="w-full p-4 xl:w-4/12"> <a href="#" className="font-bold gap-2 hover:text-gray-300 inline-flex items-center leading-none mb-6 text-3xl text-white uppercase"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.142 40" width="1.5em" height="1.5em" fill="currentColor">
                                <path data-name="Path 7167" d="M20 40a20.005 20.005 0 0 1-7.785-38.428 19.983 19.983 0 0 1 21.927 4.286L29.895 10.1a14 14 0 1 0 0 19.79l4.247 4.247A19.937 19.937 0 0 1 20 40Z"/>
                                <path data-name="Path 7168" d="M20 14a6 6 0 1 1-6 6 6 6 0 0 1 6-6Z"/>
                            </svg><span>NFT Origin</span></a> 
                        <p className="font-light mb-4">Duis pharetra venenatis felis, ut tincidunt ipsum consequat nec. Fusce et porttitor libero, eu aliquam nisi. Nam finibus ullamcorper semper. Fusce et porttitor libero, eu aliquam nisi. Nam finibus ullamcorper semper.</p>                          
                    </div>                     
                    <div className="p-4 w-full sm:w-6/12 lg:w-4/12 xl:w-2/12"> 
                        <h2 className="font-bold mb-6 text-primary-500 text-xl">                             About </h2> 
                        <ul> 
                            <li className="mb-4"> <a href="#" className="hover:text-primary-300 text-white">Our Story</a> 
                            </li>
                            <li className="mb-4"> <a href="#" className="hover:text-primary-300 text-white">Our Team</a> 
                            </li>                             
                        </ul>                         
                    </div>                     
                    <div className="p-4 w-full sm:w-6/12 lg:w-4/12 xl:w-2/12"> 
                        <h2 className="font-bold mb-6 text-primary-500 text-xl">                             Services </h2> 
                        <ul> 
                            <li className="mb-4"> <a href="#" className="hover:text-primary-300 text-white">What's New</a> 
                            </li>                             
                            <li className="mb-4"> <a href="#" className="hover:text-primary-300 text-white">Visitor's Info</a> 
                            </li>                                                         
                        </ul>                         
                    </div>                                     
                </div>                 
                <div className="py-4"> 
                    <hr className="mb-4 opacity-20"/> 
                    <div className="flex flex-wrap -mx-4  items-center"> 
                        <div className="px-4 py-2 w-full md:flex-1"> 
                            <p>&copy; 2002 - 2021. All Rights Reserved - Company Name</p> 
                        </div>                         
                        <div className="px-4 py-2 w-full sm:w-auto"> <a href="#" className="hover:text-primary-600 text-primary-500">Privacy Policy</a> |                      <a href="#" className="hover:text-primary-600 text-primary-500">Terms of Use</a> 
                        </div>                         
                    </div>                     
                </div>                 
            </div>             
        </footer>
    </>
  )
}
