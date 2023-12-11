import React, { useState } from 'react'

function Section5() {
    const [firstNameVal, setfirstNameVal] = useState('')
    const [lastNameVal, setlastNameVal] = useState('')
    const [emailVal, setemailVal] = useState('')
    const [remarkVal, setremarkVal] = useState('')

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        { name == 'firstName' && setfirstNameVal(value) }
        { name == 'lastName' && setlastNameVal(value) }
        { name == 'email' && setemailVal(value) }
        { name == 'message' && setremarkVal(value) }
        console.log("firstName", firstNameVal)
        console.log("lastName", lastNameVal)
        console.log("email", emailVal)
        console.log("message", remarkVal)
    }
    return (
        <>
            <div className='bg-[#463492] '>
                <form class="w-full max-w-lg mx-auto">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2" for="grid-first-name">
                                First Name
                            </label>
                            <input name='firstName' class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" onChange={handleChange} />

                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2" for="grid-last-name">
                                Last Name
                            </label>
                            <input name='lastName' class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" onChange={handleChange} />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2" for="grid-password">
                                E-mail
                            </label>
                            <input name='email' class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" onChange={handleChange} />

                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2" for="grid-password">
                                Message
                            </label>
                            <textarea name='message' class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" onChange={handleChange}></textarea>

                        </div>
                    </div>
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3">
                            <button class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                Send
                            </button>
                        </div>
                        <div class="md:w-2/3"></div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Section5