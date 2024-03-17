import { Button } from '@/components/ui/button'
import { useLogoutMutation } from '@/redux/apis/authApi'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const CandidateNavbar = () => {
    const { user } = useSelector(state => state.auth)
    const [logoutuser, { isSuccess }] = useLogoutMutation()
    const navigate = useNavigate()
    useEffect(() => {
        if (isSuccess) {
            navigate("/login")
        }
    }, [isSuccess])
    return <>

        <div className='p-4 flex justify-between px-28'>
            <div className='flex gap-6'>
                <strong>{user.name}'s Account</strong>
                <Link to="/user">Profile</Link>
                <Link to="/user/history">Hisotry</Link>
            </div>
            <Button onClick={logoutuser}>Logout</Button>
        </div>
        <Outlet />
    </>
}

export default CandidateNavbar