import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAddEmployerMutation } from '@/redux/apis/employerApi'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const EmployerForm = () => {
    const { user } = useSelector(state => state.auth)
    const [employerData, setEmployerData] = useState({})
    const [addEmployer, { isSuccess, isError }] = useAddEmployerMutation()
    const handleCahnge = e => {
        const { name, value, type, files } = e.target
        if (type === "file") {
            setEmployerData({ ...employerData, [name]: files[0] })
        } else {
            setEmployerData({ ...employerData, [name]: value })
        }

    }
    const handleSubmit = e => {
        const fd = new FormData()
        fd.append("name", employerData.name)
        fd.append("email", employerData.email)
        fd.append("companyName", employerData.companyName)
        fd.append("location", employerData.location)
        fd.append("logo", employerData.logo)
        fd.append("desc", employerData.desc)
        fd.append("size", employerData.size)
        fd.append("estYear", employerData.estYear)
        fd.append("phone", employerData.phone)
        addEmployer({ id: user._id, fd })

    }
    return <>
        <Input onChange={handleCahnge} name="name" placeholder="Enter name" />
        <Input onChange={handleCahnge} name="email" placeholder="Enter email" />
        <Input onChange={handleCahnge} name="companyName" placeholder="Enter companyName" />
        <Input onChange={handleCahnge} name="location" placeholder="Enter location" />
        <Input onChange={handleCahnge} type="file" name="logo" placeholder="Enter logo" />
        <Input onChange={handleCahnge} name="desc" placeholder="Enter desc" />
        <Input onChange={handleCahnge} name="size" placeholder="Enter size" />
        <Input onChange={handleCahnge} type="date" name="estYear" placeholder="Enter estYear" />
        <Input onChange={handleCahnge} type="number" name="phone" placeholder="Enter phone" />
        <Button onClick={handleSubmit}>Update Profile</Button>
    </>
}

export default EmployerForm