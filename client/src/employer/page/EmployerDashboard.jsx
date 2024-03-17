import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useLogoutMutation } from '@/redux/apis/authApi'
import React from 'react'
import EmployerForm from './EmployerForm'
import { Link } from "react-router-dom"

const EmployerDashboard = () => {
    const [logout] = useLogoutMutation()
    return <>
        <div className='mt-20'>
            <StatCard />
            <EmployerForm />

        </div>
        {/* <div>
            <Link to="/employer/add-job" >Add Job Post</Link>
            <Link to="/employer/view-applications" >View Post</Link>
        </div>
        <Button onClick={logout}>Logout</Button>
        <h1>Employer Dashboard</h1>

        <EmployerForm /> */}
    </>
}

const StatCard = () => {
    return <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <div className='bg-blue-200 p-4 rounded-lg '>
            <h1 className='text-3xl font-bold'>23+ </h1>
            <motion.p className='text-sm text-gray-500'>New Applications</motion.p>
        </div>
        <div className='bg-blue-200 p-4 rounded-lg'>
            <h1 className='text-3xl font-bold'>23+ </h1>
            <motion.p className='text-sm text-gray-500'>New Applications</motion.p>
        </div>
        <div className='bg-blue-200 p-4 rounded-lg'>
            <h1 className='text-3xl font-bold'>23+ </h1>
            <motion.p className='text-sm text-gray-500'>New Applications</motion.p>
        </div>
        <div className='bg-blue-200 p-4 rounded-lg'>
            <h1 className='text-3xl font-bold'>23+ </h1>
            <motion.p className='text-sm text-gray-500'>New Applications</motion.p>
        </div>
    </div>

}

export default EmployerDashboard