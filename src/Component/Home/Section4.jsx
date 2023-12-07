import React from 'react'

function Section4() {
    return (
        <>
            <div className='bg-gray-100 p-12'>
                <div class=" md:pr-16 lg:pr-0 pr-0 text-center ">
                    <h1 class="title-font font-medium text-6xl text-[#463492]">MY WORK EXPERIENCE</h1>
                    <p class="leading-relaxed mt-4 text-2xl font-semibold text-gray-800">Here's what I did before</p>
                </div>
                <section class="text-gray-600 body-font">
                    <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
                        <div class="md:w-1/2 md:pr-12 md:py-8  md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-6 text-gray-900">Software which i have used</h1>
                            <div class="flex flex-row mb-2">
                                <div class="basis-1/2"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png' className='w-12' /></div>
                                <div class="basis-1/2"><img src='https://cdn-icons-png.flaticon.com/256/5968/5968364.png' className='w-12' /></div>
                                <div class="basis-1/2"><img src='https://upload.wikimedia.org/wikipedia/commons/b/be/Adobe_Photoshop_CS6_icon.png' className='w-12' /></div>
                            </div>
                            <div class="flex flex-row">
                                <div class="basis-1/2"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png' className='w-12' /></div>
                                <div class="basis-1/2"><img src='https://store-images.s-microsoft.com/image/apps.61369.14342226520959543.1cbebe39-d589-4ccf-8ed5-dbdd212b1080.0a1c113c-c09b-4b2e-900d-c5a12bae0cc2' className='w-12' /></div>
                                <div class="basis-1/2"><img src='https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png' className='w-12' /></div>
                            </div>
                            <div class="flex flex-row">
                                <div class="basis-1/2"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/1200px-Android_Studio_icon_%282023%29.svg.png' className='w-12' /></div>
                              
                            </div>
                        </div>

                        {/* timeline */}
                        <div class="flex flex-col md:w-1/2 md:pl-12">
                            <ol class="relative border-s border-gray-200 dark:border-gray-700">
                                <li class="mb-10 ms-6">
                                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                        <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </span>
                                    <h3 class="flex items-center mb-1 text-2xl font-semibold text-gray-900 dark:text-white">Aadrika Enterprises<span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3"> Present</span></h3>
                                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Joined on 15 May 2022</time>
                                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>

                                </li>
                                <li class="mb-10 ms-6">
                                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                        <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </span>
                                    <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Raising Infotech Pvt. Ltd.</h3>
                                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">7 Dec 2020 - 12 Apr 2022</time>
                                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                                </li>

                            </ol>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Section4