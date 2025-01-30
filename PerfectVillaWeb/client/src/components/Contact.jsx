/* eslint-disable @next/next/no-img-element */

import React from 'react'

const Contact = () => {
    return (
        <div className="bg-center bg-[url('/bg-image2.jpg')] bg-gray-500 bg-blend-multiply px-8 py-32 lg:px-20 lg:py-40 lg:h-screen mx-auto text-white">
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='mb-5 lg:mb-0'>
                <h3 className='text-3xl font-semibold'>Need Consultation..?</h3>
                <h3 className='text-3xl font-semibold'>Feel free to contact us</h3>
                <h3 className='text-3xl font-semibold mb-10'>We are ready to help</h3>
                <h4 className='text-2xl font-semibold mb-5'>Contact</h4>
                <p className='text-md font-light mb-2'>Address: 456 Elm Street, Springfield, IL, 62704, USA</p>
                <p className='text-md font-light mb-2'>Phone: +1 (217) 555-6789</p>
                <p className='text-md font-light mb-2'>Email: support@companyname.com</p>

                </div>
                <div>
                    <div className='bg-white p-4 text-black border rounded-xl'>
                        <p className='text-center text-green-600 font-bold font-mono text-3xl mb-5'>Any Question..?</p>
                        <form>
                            <input className='w-full border rounded-lg bg-gray-300 p-5 mb-3' type='email' id='email' name='email' placeholder='your email here..' />
                            <textarea className='w-full border rounded-lg bg-gray-300 p-5' name='message' placeholder='your messages or question here..' rows={3} cols={50}></textarea>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact