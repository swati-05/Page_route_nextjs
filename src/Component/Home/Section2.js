import React from 'react'

function Section2() {
    return (
        <div className='bg-gray-100  mb-4'>
            <section className="text-gray-600 body-font">
                <div className="container px-5   mx-auto flex flex-wrap items-center">
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 py-28">
                        <h1 className="title-font font-medium text-6xl text-[#463492]">WHO AM I?</h1>
                        <p className="leading-relaxed mt-4 text-2xl font-semibold text-gray-800">I'm Christy Smith, a Web Designer & Photographer</p>
                        <p className="leading-relaxed mt-4  ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-20">
                        <h2 className="text-gray-800 text-center text-4xl uppercase title-font -mt-12 mb-5 tracking-[0.5rem]">TECH SKILLS</h2>
                        <div className="flex flex-row gap-4 mb-4 mt-4">
                            <div className="basis-1/2">
                                <div className="flex space-x-2 ">
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png' className='w-7' />
                                    <h1 className='font-semibold text-gray-700 uppercase text-md'>React js</h1>
                                </div>
                            </div>
                            <div className="basis-1/2"> <div className="flex space-x-2 ">
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png' className='w-7' />
                                <h1 className='font-semibold text-gray-700 uppercase text-md'>tailwind css</h1>
                            </div></div>
                        </div>
                        <div className="flex flex-row gap-4 mb-4">
                            <div className="basis-1/2">
                                <div className="flex space-x-2 ">
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png' className='w-7' />
                                    <h1 className='font-semibold text-gray-700 uppercase text-md'>html</h1>
                                </div>
                            </div>
                            <div className="basis-1/2"> <div className="flex space-x-2 ">
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png' className='w-7' />
                                <h1 className='font-semibold text-gray-700 uppercase text-md'>css</h1>
                            </div></div>
                        </div>
                        <div className="flex flex-row gap-4 mb-4">
                            <div className="basis-1/2">
                                <div className="flex space-x-2 ">
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1200px-Javascript_badge.svg.png' className='w-7' />
                                    <h1 className='font-semibold text-gray-700 uppercase text-md'>javascript</h1>
                                </div>
                            </div>
                            <div className="basis-1/2"> <div className="flex space-x-2 ">
                                <img src='https://repository-images.githubusercontent.com/347723622/92065800-865a-11eb-9626-dff3cb7fef55' className='w-7' />
                                <h1 className='font-semibold text-gray-700 uppercase text-md'>redux</h1>
                            </div></div>
                        </div>
                        <div className="flex flex-row gap-4 mb-4">
                            <div className="basis-1/2">
                                <div className="flex space-x-2 ">
                                    <img src='https://upload.wikimedia.org/wikipedia/de/thumb/8/8c/Microsoft_SQL_Server_Logo.svg/1200px-Microsoft_SQL_Server_Logo.svg.png' className='w-7' />
                                    <h1 className='font-semibold text-gray-700 uppercase text-md'>ms sql</h1>
                                </div>
                            </div>
                            <div className="basis-1/2"> <div className="flex space-x-2 ">
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Asp.net.svg/2560px-Asp.net.svg.png' className='w-7' />
                                <h1 className='font-semibold text-gray-700 uppercase text-md'>Asp.net</h1>
                            </div></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section2