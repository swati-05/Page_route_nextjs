import React from 'react'

function Section2() {
    return (
        <div className='bg-gray-100  mb-4'>
            <section class="text-gray-600 body-font">
                <div class="container px-5   mx-auto flex flex-wrap items-center">
                    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 py-28">
                        <h1 class="title-font font-medium text-6xl text-[#463492]">WHO AM I?</h1>
                        <p class="leading-relaxed mt-4 text-2xl font-semibold text-gray-800">I'm Christy Smith, a Web Designer & Photographer</p>
                        <p class="leading-relaxed mt-4  ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div class="lg:w-2/6 md:w-1/2  rounded-lg p-8 flex flex-col md:ml-auto w-full -mt-12 md:mt-0">
                        <h2 class="text-gray-800 text-center text-4xl uppercase title-font -mt-12 mb-5 tracking-[0.5rem]">TECH SKILLS</h2>
                        <div className='flex gap-12 mb-4'>
                            <div class="flex ">
                                <img src='https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png' className='w-10' />
                                <h1 className='font-semibold text-gray-700 uppercase text-xl'>React js</h1>
                            </div>
                            <div class="flex">
                                <img src='https://e7.pngegg.com/pngimages/21/181/png-clipart-linkedin-round-logo-tech-companies.png' className='w-10' />
                                <h1 className='font-semibold text-gray-700 uppercase text-lg'>tailwind css</h1>
                            </div>
                        </div>
                        <div className='flex gap-12'>
                            <div class="flex ">
                                <img src='https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png' className='w-10' />
                                <h1 className='font-semibold text-gray-700 uppercase text-xl'>redux </h1>
                            </div>
                            <div class="flex">
                                <img src='https://e7.pngegg.com/pngimages/21/181/png-clipart-linkedin-round-logo-tech-companies.png' className='w-10' />
                                <h1 className='font-semibold text-gray-700 uppercase text-lg'>javascript</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section2