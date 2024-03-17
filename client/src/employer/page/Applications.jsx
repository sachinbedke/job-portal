import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useGetEmployerJobsQuery, useLazyGetJobApplicantsQuery, useLazyGetJobApplicantsResumeQuery, useUpdateStatusMutation } from '@/redux/apis/employerApi'
import { toggaleSidebar } from '@/redux/slices/authSlice';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

const Applications = () => {
    const { data } = useGetEmployerJobsQuery()
    const [getApplicant, { data: applicants }] = useLazyGetJobApplicantsQuery()
    const [getResume, { data: resume }] = useLazyGetJobApplicantsResumeQuery()

    const dispatch = useDispatch()
    const [selectedApplicant, setSelectedApplicant] = useState()
    const [updateStatus, { isSuccess }] = useUpdateStatusMutation()
    useEffect(() => {
        if (isSuccess) {
            toast.success("Applicatoin Upadte Success")
        }
    }, [isSuccess])

    return <>
        <div className="grid grid-cols-[1fr,1fr,4fr]">
            <div>
                {
                    data && data.map(item => <div onClick={e => getApplicant(item._id)} className='p-4 bg-gray-200 rounded-md'>

                        {item.title}
                    </div>)
                }
            </div>
            <div>
                {
                    applicants && applicants.map(item => <div>
                        <strong className={`p-4 *
                        ${item.status === "pending" && "bg-gray-100"}
                        ${item.status === "rejected" && "bg-red-200"}
                        ${item.status === "shortlist" && "bg-green-200"}
                        `} onClick={e => {
                                setSelectedApplicant(item._id)
                                getResume(item.userId._id)
                                dispatch(toggaleSidebar(true))
                            }}>{item.userId.name}</strong>

                    </div>)
                }
            </div>
            <div>
                {
                    resume && <div className='relative'>
                        <div className='absolute top-4 right-4 flex gap-3'>
                            <Button onClick={e => updateStatus({ _id: selectedApplicant, status: "rejected" })} className="button bg-red-400">Reject</Button>
                            <Button onClick={e => updateStatus({ _id: selectedApplicant, status: "shortlist" })} className="button bg-green-500">Shorlist</Button>
                        </div>

                        <div className='bg-blue-300 px-20 overflow-y-scroll h-[100vh]'>
                            <h1 className='text-5xl text-center mt-4'>{resume.name || "Your Name"}</h1>
                            <p className='text-center text-xl'>{resume.email || "youremail@gmail.com"}
                                |
                                {resume.mobile || "+91 9434645347"}
                            </p>
                            <br />
                            <p>
                                {resume.about || "About You Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis corrupti sequi cupiditate neque ad ipsum laudantium sed soluta aliquam animi, possimus repellendus molestiae vel nihil? Iste recusandae nisi magnam eaque!"}
                            </p>
                            <br />
                            <h1>SKILLS &nbsp;&nbsp;&nbsp;
                                {resume.skills?.map(item => <span>{item} | </span>)}
                                {!resume.skills && "HTML | CSS | Javascript "}
                            </h1>
                            <br />
                            <h1>Education</h1>
                            <table className='border border-black w-full'>
                                <thead>
                                    <tr>
                                        <th className='border border-black p-4'>Degree</th>
                                        <th className='border border-black p-4'>Year</th>
                                        <th className='border border-black p-4'>Percentage</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        resume.education?.map(item => <tr>
                                            <td className='border border-black p-4 text-center font-bold'>{item.degree}</td>
                                            <td className='border border-black p-4 text-center'>{item.year}</td>
                                            <td className='border border-black p-4 text-center'>{item.percent}</td>
                                        </tr>)
                                    }
                                </tbody>


                            </table>
                            <br />
                            <h1>Experience</h1>
                            <table className='border border-black w-full'>
                                <thead>
                                    <tr>
                                        <th className='border border-black p-4'>role</th>
                                        <th className='border border-black p-4'> Start Date</th>
                                        <th className='border border-black p-4'> End Date</th>
                                        <th className='border border-black p-4'>Company</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        resume.experience && <>
                                            <tr>
                                                <td className='border border-black p-4'>Full Stack Developer</td>
                                                <td className='border border-black p-4'>24-3-2024</td>
                                                <td className='border border-black p-4'>4-3-2024</td>
                                                <td className='border border-black p-4'>90</td>
                                            </tr>
                                            <tr>
                                                <td className='border border-black p-4'>Full Stack Developer</td>
                                                <td className='border border-black p-4'>24-3-2024</td>
                                                <td className='border border-black p-4'>4-3-2024</td>
                                                <td className='border border-black p-4'>90</td>
                                            </tr>
                                            <tr>
                                                <td className='border border-black p-4'>Full Stack Developer</td>
                                                <td className='border border-black p-4'>24-3-2024</td>
                                                <td className='border border-black p-4'>4-3-2024</td>
                                                <td className='border border-black p-4'>90</td>
                                            </tr>
                                        </>
                                    }
                                    {
                                        resume.experience?.map(item => <tr>
                                            <td className='border border-black p-4 text-center font-bold'>{item.role}</td>
                                            <td className='border border-black p-4 text-center'>{item.start}</td>
                                            <td className='border border-black p-4 text-center'>{item.end}</td>
                                            <td className='border border-black p-4 text-center'>{item.company}</td>
                                        </tr>)
                                    }
                                </tbody>


                            </table>
                            <br />
                            <h1>Certification</h1>
                            <table className='border border-black w-full'>
                                <thead>
                                    <tr>
                                        <th className='border border-black p-4'>Certificate Name</th>
                                        <th className='border border-black p-4'>  Date</th>
                                        <th className='border border-black p-4'> PlatForm</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        resume.certifications?.map(item => <tr>
                                            <td className='border border-black p-4 text-center font-bold'>{item.cname}</td>
                                            <td className='border border-black p-4 text-center'>{item.date}</td>
                                            <td className='border border-black p-4 text-center'>{item.plateform}</td>
                                        </tr>)
                                    }
                                </tbody>


                            </table>
                            <br />
                            <h1>Projects</h1>
                            <table className='border border-black w-full'>
                                <thead>
                                    <tr>
                                        <th className='border border-black p-4'>Name</th>
                                        <th className='border border-black p-4'>Url</th>
                                        <th className='border border-black p-4'>  Description</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        resume.projects?.map(item => <tr>
                                            <td className='border border-black p-4 text-center font-bold'>{item.pname}</td>
                                            <td className='border border-black p-4 text-center'><a href="">{item.url}</a></td>
                                            <td className='border border-black p-4 text-center'>{item.desc}</td>
                                        </tr>)
                                    }
                                </tbody>


                            </table>
                            <br />
                            <h1>Social Links</h1>
                            <table className='border border-black w-full'>
                                <thead>
                                    <tr>
                                        <th className='border border-black p-4'>Name</th>
                                        <th className='border border-black p-4'>URl</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        resume.social?.map(item => <tr>
                                            <td className='border border-black p-4 text-center font-bold'>{item.sname}</td>
                                            <td className='border border-black p-4 text-center'><a href="">{item.url}</a></td>
                                        </tr>)
                                    }
                                </tbody>


                            </table>

                        </div>
                    </div>

                }
            </div>
        </div >
    </>
}

export default Applications