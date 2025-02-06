import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8 '>
                <h2 className='text-5xl text-pink-800 px-0 flex justify-start' data-aos="zoom-in-up">Leave a message</h2>
                <p className='text-gray-300 text=[18px] pt-2 pl-0' data-aos="zoom-in-up">Share something you&apos;d like to share using the form</p>
                <div className='flex gap-3 items-center'>
                <AiOutlineMail size={30} className='text-pink-600' />
                <span className='text-pink-800'>adeelkhawar57@gmail.com</span>
                </div>
                <div className='flex gap-3 items-center'>
                <BsTelephone size={30} className='text-pink-600' />
                <span className='text-pink-600'>+92-1234567890</span>
                </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor='name' className='text-pink-600'>Name</label>
                    <input type='text'
                    className='h-[40px] bg-transparent border border-pink-600 border-t rounded-md'
                    id='name'/>
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor='email' className='text-pink-600'>E-mail</label>
                    <input type='text'
                    className='h-[40px] bg-transparent border border-pink-600 border-t rounded-md'/>
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor='message' className='text-pink-800'>Type a message</label>
                    <textarea
                    className='bg-transparent border border-pink-600 border-t rounded-md'
                    id='message'
                    rows={8}></textarea>
                </div>
                <button className="bg-pink-800 p-2 px-6 text-white text-xl font-bold block" data-aos="zoom-in-up">Send</button>

            </div>
        </div>
    </div>
  )
}

export default Contact;
