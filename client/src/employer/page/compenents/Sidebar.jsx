import { Button } from '@/components/ui/button';
import { useLogoutMutation } from '@/redux/apis/authApi';
import { AnimatePresence, motion, stagger } from 'framer-motion';
import React, { useState } from 'react'
import { MdOutlineSpaceDashboard, MdOutlineAccountBalance, MdOutlineAccountCircle, MdOutlineShoppingCart, MdMenu } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggaleSidebar } from '@/redux/slices/authSlice';
const Sidebar = () => {
    // const [show, setShow] = useState(false)
    const { show } = useSelector(state => state.auth)
    const [logout] = useLogoutMutation()
    const dispatch = useDispatch()
    const links = [
        { icon: <MdOutlineSpaceDashboard />, name: "Dashboard", to: "/employer" },
        { icon: <MdOutlineAccountBalance />, name: "Add Job", to: "/employer/add-job" },
        { icon: <MdOutlineAccountCircle />, name: "Applications", to: "/employer/view-applications" },
        // { icon: <MdOutlineShoppingCart />, name: "Orders", to: "/admin/orders" },
    ]
    const loggedInUser = {
        name: "John Doe",
        email: "johndoe@gmail.com"
    }
    const { pathname } = useLocation()

    return <>
        <div className={` bg-gray-100  ${show ? "w-16" : "w-72"} min-h-screen  duration-300 overflow-hidden`}>
            <div className={` py-2 px-4 bg-blue-500  flex items-center  text-white ${show ? "justify-center" : "justify-between"}`}>
                {
                    !show && <>
                        <img
                            className='size-12 rounded-md object-cover object-right-top border-slate-100 border-2 shadow-sm'
                            src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="User Profile Pic" />
                        <div className='flex flex-col -mt-2'>
                            <h1 className='font-sans font-semibold'>{loggedInUser.name}</h1>
                            <p className='text-[12px] -mt-1 text-slate-300'>{loggedInUser.email}</p>
                        </div>
                    </>
                }
                <span className='text-3xl  cursor-pointer' onClick={e => dispatch(toggaleSidebar(!show))}><MdMenu /></span>
            </div>
            <div className='p-2'>
                {
                    <AnimatePresence>
                        {
                            links.map((item, i) => <motion.div
                                key={item.name}
                                initial={{ x: "-110%" }}
                                animate={{ x: 0, }}
                                transition={{ duration: 0.3, delay: 0.2 * i }}
                                whileInView={{}}>
                                <Link to={item.to} className={`p-4 ${pathname === item.to ? "bg-blue-500 text-white" : "bg-white"} rounded-lg flex items-center ${show && "justify-center"} gap-2 my-2 cursor-pointer hover:bg-blue-500 hover:text-white duration-300`}> <span className='text-2xl '>{item.icon}</span>{!show && <span>{item.name}</span>}</Link>
                            </motion.div>)
                        }
                    </AnimatePresence>}
                <Button onClick={logout} className="w-full">Logout</Button>
            </div>
        </div >
    </>
}

export default Sidebar