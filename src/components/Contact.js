import React from 'react'

export default function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-[#064e3b] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/25cb3b80-759d-4b59-8ebe-40ba24dc7d29" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-3'>
                <p className='text-6xl font-bold inline border-b-4 border-red-600 text-white'>Contact</p>
                <p className='text-white py-4'>Contact me either by submitting the form below or emailing justinsigno@yahoo.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-red-600 hover:border-red-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}
