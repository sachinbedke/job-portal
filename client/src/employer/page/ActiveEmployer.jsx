import { useGetEmployerDetailsQuery } from '@/redux/apis/employerApi'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import EmployerForm from './EmployerForm'
import { Navigate } from 'react-router-dom'
import EmployerDashboard from './EmployerDashboard'

const ActiveEmployer = ({ compo }) => {
    const [show, setShow] = useState()
    const { user } = useSelector(state => state.auth)
    const { data, isError, isSuccess } = useGetEmployerDetailsQuery(user._id)
    useEffect(() => {
        if (isSuccess) {
            setShow(true)
        }
    }, [isSuccess])
    if (show) {
        return compo
    }
    return <EmployerDashboard />
}

export default ActiveEmployer