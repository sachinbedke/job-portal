import { CheckCircledIcon, DownloadIcon, EnvelopeClosedIcon, PieChartIcon, SunIcon } from '@radix-ui/react-icons'
import React from 'react'
import { motion } from 'framer-motion'

const Help = () => {
    return <>
        <div className=' py-14'>
            <div className='text-center'>
                <h1 className='font-semibold text-3xl'>How we can help</h1>
                <p className='font-normal text-xl mt-3'>Making your job search easy</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 p-11 md:p-16'>
                <div>
                    <PieChartIcon className='size-16 mx-auto md:mx-0' />
                    <h2 className='font-medium text-xl pt-10 text-center md:text-left'>Free Job Posting</h2>
                    <p className='font-thin mt-6 text-lg text-center md:text-left'>Post an unlimited number of your open vacancies absolutely for free.</p>
                </div>
                <div>
                    <DownloadIcon className='size-14 mx-auto md:mx-0' />
                    <h1 className='font-medium text-xl pt-10 text-center md:text-left'>All Types of Jobs</h1>
                    <p className='font-thin mt-6 text-lg text-center md:text-left'>Post an unlimited number of your open vacancies absolutely for free.</p>
                </div>
                <div>
                    <EnvelopeClosedIcon className='size-14 mx-auto md:mx-0' />
                    <h1 className='font-medium text-xl pt-10 text-center md:text-left'>Power of Networking</h1>
                    <p className='font-thin mt-6 text-lg text-center md:text-left'>Post an unlimited number of your open vacancies absolutely for free.</p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center md:items-start gap-8 bg-emerald-700 p-8 md:p-14'>
                <div className='w-full md:w-1/2'>
                    <motion.img
                        initial={{ x: -200 }}
                        animate={{}}
                        transition={{ duration: 1 }}
                        whileInView={{ x: 0 }}
                        src="https://civi.uxper.co/wp-content/uploads/2022/12/responsive-2.png"
                        alt=""
                        className='mx-auto md:mx-0'
                    />
                </div>
                <div className='w-full md:w-1/2 text-zinc-50'>
                    <h1 className='text-3xl font-semibold text-center md:text-left'>Download our mobile app</h1>
                    <p className='pt-3 text-xl text-center md:text-left'>Search through millions of jobs and find the right fit. Simply swipe right to apply.</p>
                    <div className='flex flex-col md:flex-row mt-9 md:mt-0'>
                        <CheckCircledIcon className='size-8 mx-auto md:mx-0' />
                        <p className='font-semibold text-xl text-center md:text-left'>Save jobs and searches</p>
                    </div>
                    <div className='flex flex-col md:flex-row mt-7 md:mt-3'>
                        <CheckCircledIcon className='size-8 mx-auto md:mx-0' />
                        <p className='font-semibold text-xl text-center md:text-left'>Apply direct from the job app</p>
                    </div>
                    <div className='flex flex-col md:flex-row mt-7 md:mt-3'>
                        <CheckCircledIcon className='size-8 mx-auto md:mx-0' />
                        <p className='font-semibold text-xl text-center md:text-left'>Get instant job notifications</p>
                    </div>
                    <motion.div
                        initial={{ x: -200 }}
                        animate={{}}
                        transition={{ duration: 1 }}
                        whileInView={{ x: -1 }}
                        className='flex mt-7 justify-center md:justify-start'
                    >
                        <img className='m-9' src="https://civi.uxper.co/wp-content/uploads/2022/12/ios.svg" alt="" />
                        <img src="https://civi.uxper.co/wp-content/uploads/2022/12/play.svg" alt="" />
                    </motion.div>
                </div>
            </div>
        </div>


    </>
}

export default Help