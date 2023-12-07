import React from 'react'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import { saveAs } from 'file-saver';
import { Element, Link } from 'react-scroll'
function Section1() {



  const handleDownload = () => {
    // Replace 'your-pdf-url.pdf' with the actual URL of your PDF file
    const pdfUrl = 'Get_Started_With_Smallpdf.pdf';

    // Use the FileSaver library to initiate the download
    saveAs(pdfUrl, 'downloaded-file.pdf');
  };



  return (
    <>
      <div className='' style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww")`, height: '48rem', width: '100%', backgroundRepeat: 'repeat',
      }}>
        <div className='bg-[#463492] opacity-90 md:p-32  lg:p-32'>
          {/* header */}
          <header class="text-gray-600 body-font ">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
              <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </a>
              <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-gray-50">
                <Link to="home" spy={true} smooth={true} duration={500} offset={-50}>
                  <button className="mr-5 hover:text-gray-50">Home</button>
                </Link>
                <Link to="section2" spy={true} smooth={true} duration={500} offset={-50}>
                  <button className="mr-5 hover:text-gray-50">About</button>
                </Link>
                <Link to="section3" spy={true} smooth={true} duration={500} offset={-50}>
                  <button className="mr-5 hover:text-gray-50">Skills</button>
                </Link>
                <Link to="section4" spy={true} smooth={true} duration={500} offset={-50}>
                  <button className="mr-5 hover:text-gray-50">Experience</button>
                </Link>
                <Link to="section5" spy={true} smooth={true} duration={500} offset={-50}>
                  <button className="mr-5 hover:text-gray-50">Contact</button>
                </Link>
              </nav>

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
                  {/* <h1 className='font-bold text-gray-50 uppercase text-lg'>LET'S CONNECT</h1>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-1 text-amber-400 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg> */}
                  <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={handleDownload}>Download Resume
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>

                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Element name="section2">
        <Section2 />
      </Element>

      <Element name="section3">
        <Section3 />
      </Element>

      <Element name="section4">
        <Section4 />
      </Element>

      <Element name="section5">
        <Section5 />
      </Element>
    </>
  )
}

export default Section1