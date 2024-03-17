// Footer: (from 'Latest from our blog' till the end)

import { Button } from '@/components/ui/button';
import { DiscordLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, MixIcon, MoonIcon, NotionLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import React from 'react';
import { Link } from 'react-router-dom';

const FooterBar = () => {
    return <>
        <div className='bg-slate-50'>
            <div className='flex flex-col items-center justify-center mb-20'>
                <h1 className='text-[30px] font-semibold'>Latest from our blog</h1>
                <p className='text-[20px]'>Get interesting insights, articles, and news</p>
            </div>
            {/* cards */}
            <div className='flex gap-6 mr-32 ml-32'>

                <div className='flex flex-col items-center ms-10'>
                    <img
                        className='animate-fade-in bg-black transform object-cover object-center
                    opacity-100 transition duration-300 hover:scale-110 rounded-lg h-72'

                        src='https://civi.uxper.co/wp-content/uploads/2022/10/thumnail-1-scaled.webp'
                        alt=''
                    /> <br />
                    <p className='self-start'>October 29, 2022 <a className='text-emerald-600 font-medium ' href='#'>Learn</a></p>
                    <h1 className=' text-[20px] font-medium self-start'>Remote Collaboration: Best Practices, Challenges, and Tools</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <img
                        className='animate-fade-in bg-black scale-100 transform object-cover object-center
                 opacity-100 transition duration-300 hover:scale-110 rounded-lg h-72'
                        src='https://civi.uxper.co/wp-content/uploads/2022/10/Home-worker-taking-notes-video-call.jpeg'
                        alt=''
                    /> <br />
                    <p className='self-start'>October 29, 2022 <a className='text-emerald-600 font-medium' href='#'>Skill</a></p>
                    <h1 className=' text-[20px] font-medium self-start'>Remote Collaboration: Best Practices, Challenges, and Tools</h1>
                </div>

                <div className='flex flex-col items-center'>
                    <img
                        className='animate-fade-in bg-black scale-100 transform object-cover object-center
                 opacity-100 transition duration-300 hover:scale-110 rounded-lg h-72'
                        src='https://civi.uxper.co/wp-content/uploads/2022/10/horizontal.jpeg'
                        alt=''
                    /> <br />
                    <p className='self-start'>October 29, 2022 <a className='text-emerald-600 font-medium' href='#'>Speaking</a></p>
                    <h1 className=' text-[20px] font-medium self-start'>Remote Collaboration: Best Practices, Challenges, and Tools</h1>
                </div>
            </div>
            <div className='flex justify-center mt-8'>
                <Button className='outline-emerald-700 hover:bg-emerald-600 hover:text-white text-emerald-600 mb-14 mt-8 rounded-full bg-transparent border p-6 ps-8 border-emerald-600'>View More Articles</Button>
            </div>
            <hr />
            {/* subs */}
        </div>
        <div className='flex m-6 px-20'>
            <div className="flex items-center flex-1">
                <MixIcon style={{ color: "white" }} className=' m-6 size-16 p-2 bg-emerald-600 rounded-full' />
                <div>
                    <h1 className='font-medium text-[25px]'>Subscribe to our newsletter</h1>
                    <p className=''>We'll keep you updated with the best new jobs.</p>
                </div>
            </div>
            {/* newletter subs */}
            <div className='flex flex-1 items-center'>
                <input className='rounded-full p-6 h-14 w-full border m-2' placeholder='Enter your email' type="text" name="" id="" />
                <Button className="rounded-full bg-emerald-600 p-6 text-white hover:bg-emerald-700">Subscribe</Button>
            </div>
        </div> <hr />
        {/* end-footer */}
        <div className="footer m-16 flex justify-center">
            <div className='w-1/4'>
                <p className="font-semibold mb-6 text-[18px]">About Us</p>
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris risus, lobortis a commodo at, varius sit amet ipsum.</p>
                <br />
                <Link className='font-semibold block text-slate-600 mb-4 hover:text-emerald-600'>T. (00) 658 54332</Link>
                <Link className='font-semibold text-slate-600 hover:text-emerald-600'>E. hello@uxper.co</Link>
            </div>
            <div className='grid grid-cols-4 gap-16 max-w-screen-lg '>

                <div>
                    <p className="font-semibold mb-6 text-[18px] ">Company</p>
                    <ul className='text-slate-700'>
                        <li className='mb-4 hover:text-emerald-600'>About Us</li>
                        <li className='mb-4 hover:text-emerald-600'>Career</li>
                        <li className='mb-4 hover:text-emerald-600'>Blogs</li>
                        <li className='mb-4 hover:text-emerald-600'>FQA's</li>
                        <li className='mb-4 hover:text-emerald-600'>Contact</li>
                    </ul>
                </div>
                <div>
                    <p className="font-semibold mb-6 text-[18px]">Services</p>
                    <ul className='text-slate-700'>
                        <li className='mb-4 hover:text-emerald-600'>Jobs</li>
                        <li className='mb-4 hover:text-emerald-600'>Companies</li>
                        <li className='mb-4 hover:text-emerald-600'>Candidates</li>
                        <li className='mb-4 hover:text-emerald-600'>Pricing</li>
                        <li className='mb-4 hover:text-emerald-600'>Partner</li>
                    </ul>
                </div>
                <div>
                    <p className="font-semibold mb-6 text-[18px]">Support</p>
                    <ul className='text-slate-700'>
                        <li className='mb-4 hover:text-emerald-600'>Privacy Policy</li>
                        <li className='mb-4 hover:text-emerald-600'>Terms of Use</li>
                        <li className='mb-4 hover:text-emerald-600'>Help Center</li>
                        <li className='mb-4 hover:text-emerald-600'>Updates</li>
                        <li className='mb-4 hover:text-emerald-600'>Documentation</li>
                    </ul>
                </div>
                <div>
                    <p className="font-semibold mb-6 text-[18px]">Connect</p>
                    <ul className='flex flex-col text-slate-700' >
                        <li className='mb-4 flex hover:text-emerald-600 items-center group '><LinkedInLogoIcon className='group-hover:text-emerald-600 mr-3 size-5 ' />LinkedIn</li>
                        <li className='mb-4 flex hover:text-emerald-600 items-center group '><TwitterLogoIcon className='group-hover:text-emerald-600 mr-3 size-5 ' />Twitter</li>
                        <li className='mb-4 flex hover:text-emerald-600 items-center group '><DiscordLogoIcon className='group-hover:text-emerald-600 mr-3 size-5 ' /> Facebook</li>
                        <li className='mb-4 flex hover:text-emerald-600 items-center group '> <InstagramLogoIcon className='group-hover:text-emerald-600 mr-3 size-5 ' />Instagram</li>
                        <li className='mb-4 flex hover:text-emerald-600 items-center group '> <NotionLogoIcon className='group-hover:text-emerald-600 mr-3 size-5 ' />YouTube</li>
                    </ul>
                </div>
            </div>
        </div> <hr />

        <div className='p-16 ml-48'>© 2023 Uxper. All Right Reserved.</div>
    </>
};

export default FooterBar;