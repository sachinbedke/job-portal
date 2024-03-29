import { Button } from '@/components/ui/button'
import { useLazyPublicjobQuery, usePublicjobQuery } from '@/redux/apis/publicApi'
import React, { useEffect, useState } from 'react'
import { differenceInDays } from "date-fns";
import { Link } from 'react-router-dom';


const Jobs = () => {
    // const { data } = usePublicjobQuery()
    const [getJobs, { data }] = useLazyPublicjobQuery()

    const [page, setPage] = useState(0)
    const [limit, setLimit] = useState(5)
    useEffect(() => {
        getJobs({ page, limit })
    }, [page, limit])
    console.log(data)
    return <div className='bg-yellow-50'>
        <div className="min-h-[630px] p-7 w-3/4 mx-auto">
            <h1 className='font-bold text-3xl'>Latest jobs</h1>
            <span>2020 jobs live – 293 added today.</span>
            <select onChange={e => {
                setLimit(+e.target.value)
                setPage(0)

            }}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
            {
                data && [...Array(Math.ceil(data.total / limit)).keys()].map((item, i) => <Button onClick={e => setPage(i)} >{i + 1}</Button>)
            }
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {
                    data && data.result.map(item => <Link to={`/details/${item._id}`} className='p-4 w-full'>
                        <a href="#" class="block  p-6 bg-white border border-yellow-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className='flex justify-between gap-3 my-2'>
                                <div className='flex gap-3'>
                                    <div>
                                        <img src={`${import.meta.env.VITE_BACKEND_URL}/${item.company.logo}`} className='size-16' alt="" />
                                    </div>
                                    <div>
                                        <h4 class="my-2  leading-3 font-semibold tracking-tight hover:text-green-700 text-gray-900 dark:text-white">{item.level}  {item.role}</h4>
                                        <p class="font-normal text-gray-700 dark:text-gray-400">by <strong>{item.company.companyName}</strong>  in <span className='text-green-700'>{item.title}</span></p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <img src="https://civi.uxper.co/wp-content/plugins/civi-framework/assets/images/icon-featured.svg" className='size-6 m-1' alt="" />
                                    <svg className='size-6 m-1' viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.89346 2.35248C3.49195 2.35248 2.35248 3.49359 2.35248 4.90532C2.35248 6.38164 3.20954 7.9168 4.37255 9.33522C5.39396 10.581 6.59464 11.6702 7.50002 12.4778C8.4054 11.6702 9.60608 10.581 10.6275 9.33522C11.7905 7.9168 12.6476 6.38164 12.6476 4.90532C12.6476 3.49359 11.5081 2.35248 10.1066 2.35248C9.27059 2.35248 8.81894 2.64323 8.5397 2.95843C8.27877 3.25295 8.14623 3.58566 8.02501 3.88993C8.00391 3.9429 7.98315 3.99501 7.96211 4.04591C7.88482 4.23294 7.7024 4.35494 7.50002 4.35494C7.29765 4.35494 7.11523 4.23295 7.03793 4.04592C7.01689 3.99501 6.99612 3.94289 6.97502 3.8899C6.8538 3.58564 6.72126 3.25294 6.46034 2.95843C6.18109 2.64323 5.72945 2.35248 4.89346 2.35248ZM1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.0084 1.35248 6.73504 1.76049 7.20884 2.2953C7.32062 2.42147 7.41686 2.55382 7.50002 2.68545C7.58318 2.55382 7.67941 2.42147 7.79119 2.2953C8.265 1.76049 8.99164 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                </div>
                            </div>
                            <div className='my-3 '>
                                <span class="bg-purple-100 text-blue-800 text-xs font-bold  me-2 p-1.5  dark:bg-blue-900 dark:text-blue-300 m-2 rounded-lg  hover:bg-purple-200">{item.type}</span>
                                <span class="bg-green-100 rounded-lg text-gray-800 text-xs font-bold me-2 p-1.5  dark:bg-gray-700 dark:text-gray-300 hover:bg-green-200">{item.hiringLocation}</span>
                                <span class="bg-green-100 rounded-lg text-gray-800 text-xs font-bold me-2 p-1.5  dark:bg-gray-700 dark:text-gray-300">${item.salary}/-month</span>
                            </div>
                            <span className='mt-5'><span className='text-green-700 font-bold'></span> {differenceInDays(item.closingDate, new Date())} </span>
                            days left to apply
                        </a>
                    </Link>)
                }
                {/* lodash |date fns */}

            </div>
            {/* <div className='grid grid-cols-1 md:grid-cols-2'>
            </div> */}
        </div >
    </div>
}

export default Jobs