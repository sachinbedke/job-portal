import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'

const Hero = () => {
    return <div className='bg-teal-50'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                <h1>Got Talent? Meet Opportunity</h1>
                <p>Company reviews. Salaries. Interviews. Jobs.</p>

                <div className='flex bg-white p-4 rounded-full'>
                    <Input className="rounded-s-full focus-visible:ring-0 border-none  " placeholder="Enter Job Title" />
                    <Input className="rounded-e-full focus-visible:ring-0 border-none  " placeholder="Select City " />
                    <Button className="rounded-full">Search</Button>
                </div>

            </div>
            <div>
                <img src="https://civi.uxper.co/wp-content/uploads/2022/12/girl-hero-2-2.png" alt="" />

                <motion.img
                    initial={{ top: "40vh" }}
                    animate={{ top: "50vh" }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear"
                    }}

                    className='absolute top-[50vh] h-16'
                    src="https://civi.uxper.co/wp-content/uploads/2022/12/tip-2.png"
                    alt="" />
                <motion.img
                    initial={{ top: "70vh" }}
                    animate={{ top: "80vh" }}
                    transition={{
                        duration: 3,
                        delay: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear"
                    }}
                    className='absolute top-[80vh] right-16  h-28' src="https://civi.uxper.co/wp-content/uploads/2022/12/tip-1-1.png" alt="" />
            </div>
        </div>
    </div>
}

export default Hero