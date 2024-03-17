import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { toast } from 'sonner'
import { useAddUserResumeMutation, useGetUserResumeQuery, useLazyDownloadResumeQuery } from '@/redux/apis/userApi'
import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [profileData, setProfileData] = useState({})
    const { data } = useGetUserResumeQuery()
    const [downloadResume] = useLazyDownloadResumeQuery()
    const [PROFILE_FORM, set_PROFILE_FORM] = useState([
        { name: "name", type: "text" },
        { name: "mobile", type: "number" },
        { name: "email", type: "email" },
        { name: "location", type: "text" },
        { name: "about", type: "text" },
        { name: "skills", type: "checkbox", options: ["html", "css", "js", "react", "angular", "vue"] },
        { name: "gender", type: "radio", options: ["male", "female"] },
        {
            name: "education",
            type: "multi",
            pushData: [
                { name: "degree", type: "text" },
                { name: "year", type: "date" },
                { name: "percent", type: "text" },
            ],
            record: [
                [
                    { name: "degree", type: "text" },
                    { name: "year", type: "date" },
                    { name: "percent", type: "text" },
                ],
                [
                    { name: "degree", type: "text" },
                    { name: "year", type: "date" },
                    { name: "percent", type: "text" },
                ]
            ]
        },
        {
            name: "experience",
            type: "multi",
            pushData: [
                { name: "role", type: "text" },
                { name: "start", type: "date" },
                { name: "end", type: "date" },
                { name: "company", type: "text" },
            ],
            record: [
                [
                    { name: "role", type: "text" },
                    { name: "start", type: "date" },
                    { name: "end", type: "date" },
                    { name: "company", type: "text" },
                ]
            ]
        },
        {
            name: "certifications",
            type: "multi",
            pushData: [
                { name: "name", type: "text" },
                { name: "date", type: "date" },
                { name: "plateform", type: "text" },
            ],
            record: [
                [
                    { name: "name", type: "text" },
                    { name: "date", type: "date" },
                    { name: "plateform", type: "text" },
                ]
            ]
        },
        {
            name: "projects",
            type: "multi",
            pushData: [
                { name: "name", type: "text" },
                { name: "url", type: "tetx" },
                { name: "desc", type: "text" },
            ],
            record: [
                [
                    { name: "name", type: "text" },
                    { name: "url", type: "text" },
                    { name: "desc", type: "text" },
                ]
            ]
        },
        {
            name: "social",
            type: "multi",
            pushData: [
                { name: "name", type: "text" },
                { name: "url", type: "text" },
            ],
            record: [
                [
                    { name: "name", type: "text" },
                    { name: "url", type: "text" },
                ]
            ]
        },
    ])
    const handleChange = (e, outerIndex, innerIndex, isMulti) => {
        const { value, name, type, checked, files } = e.target
        if (isMulti) {
            console.log(outerIndex, name)
            const copy = { ...profileData }
            if (copy[PROFILE_FORM[outerIndex].name]) {
                const innerCopy = [...copy[PROFILE_FORM[outerIndex].name]]
                innerCopy[innerIndex] = { ...innerCopy[innerIndex], [name]: value }
                copy[PROFILE_FORM[outerIndex].name] = innerCopy
            } else {
                copy[PROFILE_FORM[outerIndex].name] = [{ [name]: value }]
            }
            setProfileData(copy)

        }

        else {
            setProfileData({ ...profileData, [name]: value })
        }
    }

    const handlePush = (index, pushData, name) => {
        // const copy = [...PROFILE_FORM]
        // copy[index].record.push(pushData)
        // set_PROFILE_FORM(copy)
        const inc = ["year", "start", "end", "date"]
        const x = Object.keys(profileData[name][0]).filter(item => item !== "_id").reduce((pre, item) => {
            pre[item] = inc.includes(item) ? "--" : ""
            return pre
        }, {})

        setProfileData({ ...profileData, [name]: [...profileData[name], x] })
    }

    const handleRemove = (index, i, name) => {

        const copy = [...PROFILE_FORM]
        copy[index].record = copy[index].record.filter((x, f) => f !== i)
        set_PROFILE_FORM(copy)

        setProfileData({ ...profileData, [name]: profileData[name].filter((item, idx) => idx !== i) })
    }

    const handleUI = (item, index) => {
        switch (item.type) {
            case "date":
            case "password":
            case "color":
            case "email":
            case "number":
            case "text": return <Input
                value={profileData[item.name]}
                onChange={handleChange}
                type={item.type}
                name={item.name}
                placeholder={`Enter ${item.name}`}
                className="my-4" />
            case "radio": return <RadioGroup value={profileData[item.name]} onValueChange={val => setProfileData({
                ...profileData,
                [item.name]: val
            })}>
                {
                    item.options.map(o => <div className="flex items-center space-x-2" key={o}>
                        <RadioGroupItem value={o} id={o} />
                        <Label htmlFor={o}>{o}</Label>
                    </div>)
                }
            </RadioGroup>
            case "checkbox": return <div>
                {
                    item.options.map(o => <div className="flex items-center space-x-2">
                        <Checkbox id={o}
                            checked={profileData[item.name]?.includes(o)}
                            onCheckedChange={x => setProfileData({
                                ...profileData,
                                [item.name]: x
                                    ? profileData[item.name] ? [...profileData[item.name], o] : [o]
                                    : profileData[item.name].filter(z => z !== o)
                            })} />
                        <label
                            htmlFor={o}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" >
                            {o}
                        </label>
                    </div>)
                }
            </div>
            case "multi": return <div >
                <h1 className='text-2xl uppercase my-4'>{item.name}</h1>
                {
                    profileData[item.name]?.map(item => [...Object.keys(item).filter(item => item !== "_id").map(k => { return { [k]: item[k], name: k, type: item[k].split("-").length === 3 ? "date" : "text" } })]).map((f, i) => {

                        return <div className='flex items-center'>
                            {f.map(item => {

                                return <Input
                                    value={item[item.name]}
                                    onChange={e => handleChange(e, index, i, true)}
                                    type={item.type}
                                    name={item.name}
                                    placeholder={`Enter ${item.name}  `}
                                    className="my-4 rounded-none border-black" />
                            })
                            }
                            {
                                i === 0
                                    ? <Button className="rounded-none" onClick={e => handlePush(index, item.pushData, item.name)} >+</Button>
                                    : <Button className="rounded-none" variant="destructive" onClick={e => handleRemove(index, i, item.name)}>X</Button>
                            }
                        </div>
                    })
                }

            </div>
            default:
        }
    }

    const [addResume, { isSuccess, isError, error }] = useAddUserResumeMutation()
    useEffect(() => {
        if (isSuccess) {
            if (isSuccess) toast.success("Resume Update Success")


        }
    }, [isSuccess])
    useEffect(() => {
        if (isError) {
            alert("error");
        }
    }, [isError])
    useEffect(() => {
        if (data) {
            console.log(data);
            console.log(Object.keys(data));

            setProfileData(data)
        }
    }, [data])

    return <>
        {/* <pre>{JSON.stringify(profileData, null, 2)}</pre> */}
        <div className="grid grid-cols-2 ">
            <div className='overflow-y-scroll h-[100vh]'>
                {
                    PROFILE_FORM.map((item, index) => handleUI(item, index))
                }
                <div className='flex justify-between mt-8'>
                    <Button onClick={e => downloadResume()} variant="outline">Download Resume</Button>
                    <Button onClick={e => addResume(profileData)}>Update Resume</Button>
                </div>
            </div>
            <div className='bg-blue-300 px-20 overflow-y-scroll h-[100vh]'>
                <h1 className='text-5xl text-center mt-4'>{profileData.name || "Your Name"}</h1>
                <p className='text-center text-xl'>{profileData.email || "youremail@gmail.com"}
                    |
                    {profileData.mobile || "+91 9434645347"}
                </p>
                <br />
                <p>
                    {profileData.about || "About You Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis corrupti sequi cupiditate neque ad ipsum laudantium sed soluta aliquam animi, possimus repellendus molestiae vel nihil? Iste recusandae nisi magnam eaque!"}
                </p>
                <br />
                <h1>SKILLS &nbsp;&nbsp;&nbsp;
                    {profileData.skills?.map(item => <span>{item} | </span>)}
                    {!profileData.skills && "HTML | CSS | Javascript "}
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
                            !profileData.education && <>
                                <tr>
                                    <td className='border border-black p-4'>Bsc Computer Science</td>
                                    <td className='border border-black p-4'>2024</td>
                                    <td className='border border-black p-4'>90</td>
                                </tr>
                                <tr>
                                    <td className='border border-black p-4'>12th</td>
                                    <td className='border border-black p-4'>2021</td>
                                    <td className='border border-black p-4'>85</td>
                                </tr>
                                <tr>
                                    <td className='border border-black p-4'>10th</td>
                                    <td className='border border-black p-4'>2019</td>
                                    <td className='border border-black p-4'>82</td>
                                </tr>
                            </>
                        }
                        {
                            profileData.education?.map(item => <tr>
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
                            !profileData.experience && <>
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
                            profileData.experience?.map(item => <tr>
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
                            !profileData.certifications && <>
                                <tr>
                                    <td className='border border-black p-4'>Javascript Data Structe</td>
                                    <td className='border border-black p-4'>24-3-2024</td>
                                    <td className='border border-black p-4'>Freecodecamp</td>
                                </tr>
                                <tr>
                                    <td className='border border-black p-4'>Javascript Data Structe</td>
                                    <td className='border border-black p-4'>24-3-2024</td>
                                    <td className='border border-black p-4'>Freecodecamp</td>
                                </tr>
                                <tr>
                                    <td className='border border-black p-4'>Javascript Data Structe</td>
                                    <td className='border border-black p-4'>24-3-2024</td>
                                    <td className='border border-black p-4'>Freecodecamp</td>
                                </tr>
                            </>
                        }
                        {
                            profileData.certifications?.map(item => <tr>
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
                            !profileData.projects && <>
                                <tr>
                                    <td className='border border-black p-4'>E-commerce</td>
                                    <td className='border border-black p-4'><a href="">http://github.com</a></td>
                                    <td className='border border-black p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore </td>
                                </tr>
                                <tr>
                                    <td className='border border-black p-4'>E-commerce</td>
                                    <td className='border border-black p-4'><a href="">http://github.com</a></td>
                                    <td className='border border-black p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore </td>
                                </tr>
                                <tr>
                                    <td className='border border-black p-4'>E-commerce</td>
                                    <td className='border border-black p-4'><a href="">http://github.com</a></td>
                                    <td className='border border-black p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore </td>
                                </tr>
                            </>
                        }
                        {
                            profileData.projects?.map(item => <tr>
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
                            !profileData.social && <>
                                <tr>
                                    <td className='border border-black p-4'>E-commerce</td>
                                    <td className='border border-black p-4'><a href="">http://github.com</a></td>
                                </tr>
                                <tr>
                                    <td className='border border-black p-4'>E-commerce</td>
                                    <td className='border border-black p-4'><a href="">http://github.com</a></td>
                                </tr>
                                <tr>
                                    <td className='border border-black p-4'>E-commerce</td>
                                    <td className='border border-black p-4'><a href="">http://github.com</a></td>
                                </tr>
                            </>
                        }
                        {
                            profileData.social?.map(item => <tr>
                                <td className='border border-black p-4 text-center font-bold'>{item.sname}</td>
                                <td className='border border-black p-4 text-center'><a href="">{item.url}</a></td>
                            </tr>)
                        }
                    </tbody>


                </table>

            </div>


        </div>


    </>
}

export default Profile
{/* 
    name
    mobile
    email
    location
    about

    education
        degree year percent
    
    experince 
        role    start    end  company
    
    skills []

    certifications
        name    date    plateform
    
    projects
        name    url     desc
    
    social media

 
*/}