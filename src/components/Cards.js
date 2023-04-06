import React from 'react'
import { Link } from 'react-router-dom'

const Cards = () =>
{
    return (
        <div className='flex flex-col h-full my-10 md:my-[81px]  justify-center'>
            <div className='text-4xl text-center mb-16 cursor-pointer hover:underline'>
                <h1>These are our latest <span className='text-[#c92e2e]        '>tools</span></h1>
            </div>
            <div className='grid grid-cols-1 h-1/2 md:grid-cols-2 gap-4 place-items-center '>
                <div className="relative h-[90%]  w-[70%] overflow-hidden rounded-[50px]">
                    <img className="w-full cursor-pointer  h-[450px] object-fit" src="https://iforum-de.c.hihonor.com/uk_data/images/2018/6/23/0aa4c66b6bf54602689a3bdb4abeb17a.jpg" alt="Your Image" />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300">
                        <Link to='www.lofi-env.com' >
                            <div className="absolute cursor-pointer  inset-0 flex flex-col items-center justify-center" >
                                <h3 className="text-white text-xl font-semibold mb-2">Mood Maker</h3>
                                <p className="text-white text-sm">Create virtual environments with ease using our tool</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="relative h-[90%]  w-[70%] overflow-hidden rounded-[50px]">
                    <img className="w-full cursor-pointer h-[450px] object-fit" src="https://www.wikihow.com/images/thumb/e/ea/Start-an-Assignment-Step-5-Version-2.jpg/v4-460px-Start-an-Assignment-Step-5-Version-2.jpg" alt="Your Image" />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300">
                        <Link to='https://txt-handwriting.onrender.com/'>
                            <div className="absolute cursor-pointer  inset-0 flex flex-col items-center justify-center" >
                                <h3 className="text-white text-xl font-semibold mb-2">Hand Recognition</h3>
                                <p className="text-white text-sm">Convert typed text to handwritten notes with ease using our tool</p>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cards