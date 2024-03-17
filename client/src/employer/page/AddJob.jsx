import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAddEmployerJobMutation } from '@/redux/apis/employerApi'
import React, { useState } from 'react'

const AddJob = () => {
    const [addJob] = useAddEmployerJobMutation()
    const [jobData, setJobData] = useState({ skills: [] })
    const handleCahnge = e => {
        const { name, value, type, checked } = e.target

        if (type === "checkbox") {
            checked
                ? setJobData({ ...jobData, skills: [...jobData.skills, value] })
                : setJobData({ ...jobData, skills: jobData.skills.filter(item => item !== value) })
        } else {

            setJobData({ ...jobData, [name]: value })
        }

    }

    const SKILLS = ["html", "css", "js", "react", "node", "mongodb"]

    return <>

        <Input onChange={handleCahnge} name="title" placeholder="Enter title" />
        <Input onChange={handleCahnge} name="role" placeholder="Enter role" />
        <Input onChange={handleCahnge} name="desc" placeholder="Enter desc" />
        <Input onChange={handleCahnge} name="closingDate" type="date" placeholder="Enter closingDate" />
        <Input onChange={handleCahnge} name="hiringLocation" placeholder="Enter hiringLocation" />
        <Input onChange={handleCahnge} name="salary" type="number" placeholder="Enter salary" />
        <Input onChange={handleCahnge} name="level" placeholder="Enter level" />
        <Input onChange={handleCahnge} name="qualification" placeholder="Enter qualification" />
        <Input onChange={handleCahnge} name="experience" placeholder="Enter experience" />
        <Input onChange={handleCahnge} name="quantity" placeholder="Enter quantity" />
        <Input onChange={handleCahnge} name="type" type="string" placeholder="Enter type" />
        {/* <Input onChange={handleCahnge} name="skills" type="string" placeholder="Enter skills" /> */}

        <div className='flex gap-2 my-4'>
            {
                SKILLS.map(item => <div className='flex items-center gap-2'>
                    <input type='checkbox' onChange={handleCahnge} name="skills" value={item} id={item} />
                    <Label htmlFor={item}>{item}</Label>
                </div>)
            }
        </div>
        <Button onClick={e => addJob(jobData)}>Add Job</Button>
    </>
}

export default AddJob