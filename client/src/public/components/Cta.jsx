import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const Cta = () => {
    return (
        <><div className="container mx-auto">
            <div class='flex flex-col md:flex-row gap-10 px-10 mt-10'>
                <div class='bg-orange-100 rounded-xl flex flex-col md:flex-row justify-center items-center md:w-1/2'>
                    <div class='flex flex-col justify-center items-center md:items-start md:text-left'>
                        <h1 class='my-3 text-lg font-semibold'>For Employers</h1>
                        <p class='my-3'>Find professionals from around <br />the world and across all skills.</p>
                        <Button class='my-3 bg-green-700 text-white rounded-3xl p-2 px-3'>Post jobs for Free</Button>
                    </div>
                    <div class='flex justify-center items-center h-56' >
                        <motion.img

                            initial={{ marginTop: "-10px" }}
                            animate={{ marginTop: "0px" }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatType: 'reverse',
                                ease: "linear"
                            }}
                            src="https://civi.uxper.co/wp-content/uploads/2022/12/banner-home-01.svg"

                        />
                    </div>
                </div>
                <div class='bg-orange-100 rounded-xl flex flex-col md:flex-row justify-center items-center md:w-1/2'>
                    <div class='flex flex-col justify-center items-center md:items-start md:text-left'>
                        <h1 class='my-3 text-lg font-semibold'>For Candidates</h1>
                        <p class='my-3'>Build your professional profile, <br />find new job opportunities.</p>
                        <Button class='my-3 bg-green-700 text-white rounded-3xl p-2 px-3'>Upload Your CV</Button>
                    </div>
                    <div class='flex justify-center items-center h-56 ' >
                        <motion.img

                            initial={{ marginTop: "-10px" }}
                            animate={{ marginTop: "0px" }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatType: 'reverse',
                                ease: "linear"
                            }}


                            src="https://civi.uxper.co/wp-content/uploads/2022/12/banner-home-02.svg"
                        />
                        {/* <img src="" alt="" /> */}
                    </div>
                </div>
            </div>
        </div></>
    )
}
export default Cta