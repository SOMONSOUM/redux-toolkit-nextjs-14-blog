import React from 'react'
import footerLogo from '@/app/assets/blue_logo.svg';
import Image from 'next/image';

function Footer() {
    return (
        <>
            <div className='bg-white'>
                <footer className='bg-white grid grid-cols-1 lg:grid-cols-5 gap-5 p-4 lg:w-[95%] lg:mx-auto'>
                    <div className="one lg:col-span-2">
                        <Image src={footerLogo} alt='footer logo' />
                        <p className='text-lightText text-[16px] leading-[20px] mt-10 font-lightThin'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod.
                        </p>
                    </div>
                    <div className="two flex flex-col lg:items-center">
                        <h2 className='text-lightText font-soThick text-[16px] leading-[19.2px]'>Categories</h2>
                        <ul className='text-lighterText text-[16px] leading-[20px] mt-10 font-lightThin'>
                            <li className='my-2'>International</li>
                            <li className='my-2'>Regional</li>
                            <li className='my-2'>Politics</li>
                            <li className='my-2'>Business</li>
                            <li className='my-2'>Sports</li>
                            <li className='my-2'>Health</li>
                        </ul>
                    </div>
                    <div className="three">
                        <h2 className='text-lightText font-soThick text-[16px] leading-[19.2px]'>Company</h2>
                        <ul className='text-lighterText text-[16px] leading-[20px] mt-10 font-lightThin'>
                            <li className='my-2'>About Us</li>
                            <li className='my-2'>Careers</li>
                            <li className='my-2'>Privacy Policy</li>
                            <li className='my-2'>Terms of Services</li>
                            <li className='my-2'>Contact Us</li>
                        </ul>
                    </div>
                    <div className="four">
                        <h2 className='text-lightText font-soThick text-[16px] leading-[19.2px]'>Social Media</h2>
                        <ul className='text-lighterText text-[16px] leading-[20px] mt-10 font-lightThin'>
                            <li className='my-2'>Youtube</li>
                            <li className='my-2'>Instagram</li>
                            <li className='my-2'>Politics</li>
                            <li className='my-2'>Facebook</li>
                            <li className='my-2'>Twitter</li>
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer