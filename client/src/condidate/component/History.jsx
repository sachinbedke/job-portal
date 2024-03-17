import { Button } from '@/components/ui/button'
import { useHistoryQuery } from '@/redux/apis/userApi'
import React from 'react'

const History = () => {
    const { data } = useHistoryQuery()
    console.log(data)
    return <>
        {
            data && <table className='border w-full'>
                <thead>
                    <tr>
                        <th className='border p-3'>Company Name</th>
                        <th className='border p-3'>Title</th>
                        <th className='border p-3'>Role</th>
                        <th className='border p-3'>Closing Date</th>
                        <th className='border p-3'>Location</th>
                        <th className='border p-3'>Salary</th>
                        <th className='border p-3'>Skills</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => <tr>
                            <td className='border text-center p-3'>{item.jobId.company}</td>
                            <td className='border text-center p-3'>{item.jobId.title}</td>
                            <td className='border text-center p-3'>{item.jobId.role}</td>
                            <td className='border text-center p-3'>{item.jobId.closingDate}</td>
                            <td className='border text-center p-3'>{item.jobId.location}</td>
                            <td className='border text-center p-3'>{item.jobId.salary}</td>
                            <td className='border text-center p-3'>{item.jobId.skills.map(item => <span className='p-3' key={item}> {item} </span>)}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        }




    </>
}

export default History