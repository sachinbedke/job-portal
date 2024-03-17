import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './compenents/Sidebar'

const EmployerLayout = () => {
    return <div className='flex'>
        <Sidebar />
        <div className='px-4 flex-1'>
            <Outlet />
        </div>
    </div>
}

export default EmployerLayout