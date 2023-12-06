import React from 'react'
import Section2 from './Section2'

function Section1() {
  return (
    <>
      <div className='' style={{
        backgroundImage: `url("https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`, height: '48rem', width: '100%', backgroundRepeat: 'repeat',
      }}>
        <div className='bg-[#463492] opacity-90 h-[48rem]'>
          {/* header */}
          <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </a>
              <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center text-gray-50">
                <a class="mr-5 hover:text-gray-50">First Link</a>
                <a class="mr-5 hover:text-gray-50">Second Link</a>
                <a class="mr-5 hover:text-gray-50">Third Link</a>
                <a class="mr-5 hover:text-gray-50">Fourth Link</a>
              </nav>
              <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </header>
          {/* section contact */}
          <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
                <img class=" object-center rounded-full w-64 float-right" alt="hero" src="https://cdn.hero.page/pfp/5faf490c-f67d-4f2a-8098-a116a018637a-close-up-of-kawaii-shoujo-girl-cute-anime-profile-pictures-for-girls-2.png" />
              </div>
              <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 class="title-font sm:text-4xl text-6xl mb-4 font-medium text-gray-50">Hello I'm Christy Smith!
                  <br class="hidden lg:inline-block" />
                </h1>
                <p class="mb-8 leading-relaxed text-gray-100 ">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                <div class="flex justify-center space-x-2">
                  <h1 className='font-bold text-gray-50 uppercase text-lg'>LET'S CONNECT</h1>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-1 text-amber-400 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                  <img src='https://e7.pngegg.com/pngimages/21/181/png-clipart-linkedin-round-logo-tech-companies.png' className='w-10' />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Section2 />
    </>
  )
}

export default Section1