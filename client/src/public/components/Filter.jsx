import React from 'react'

const Filter = () => {
    return <>

        <div className="container mx-auto">
            <div class="flex flex-col md:flex-row mt-2">
                <div class="md:w-1/3 p-10 ml-0 md:ml-20">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg md:block hidden">

                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-1">Filter</div>
                            <hr></hr>
                            <div class="text-xl mt-2 text-gray-500 ">JOBS TYPE</div>

                        </div>

                        <div>
                            <div class="px-2 py-2 flex items-center gap-2">
                                <input type="checkbox" class="h-5 w-5" disabled />
                                <div class="">Full Time (36)</div>
                            </div>
                            <div class="px-2 py-2 flex items-center gap-2">
                                <input type="checkbox" class="h-5 w-5" disabled />
                                <div class="">Intership (0)</div>
                            </div>
                            <div class="px-2 py-2 flex items-center gap-2">
                                <input type="checkbox" class="h-5 w-5" disabled />
                                <div class="">Part Time (12)</div>
                            </div>
                            <div class="px-2  py-2 flex items-center gap-2">
                                <input type="checkbox" class="h-5 w-5" disabled />
                                <div class="">Remote (24)</div>
                            </div>


                        </div>
                        <div class="px-6 py-4">
                            {/* /salary */}
                            <hr></hr>
                            <div class="text-xl mt-2 text-gray-500 ">SALARY</div>

                            <div className='flex mt-2 '>
                                <input type="text" className="mr-3 w-20 h-12 border border-green-500 rounded-md px-4" placeholder='Min' />
                                <input type="text" className="mr-3 w-20 h-12 border border-green-500 rounded-md px-4" placeholder='Max' />
                                <div className="relative mr-3">
                                    <svg className="absolute right-0 top-0 mt-4 mr-2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" w-20 height="21">
                                        <path fillRule="evenodd" d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z" clipRule="evenodd" />
                                    </svg>
                                    <select className="w-20 h-12 border border-green-500 rounded-md px-4 appearance-none">
                                        <option disabled selected hidden>Rate</option>
                                        <option style={{ color: 'green' }}>Rate</option>

                                        <option>Hours</option>
                                        <option>Days</option>
                                        <option>Weeks</option>
                                        <option>Month</option>
                                    </select>
                                </div>
                            </div>


                        </div>
                        {/* job career*/}
                        <div>
                            <div class="px-2 py-2 flex items-center gap-2">
                                <input type="checkbox" class="h-5 w-5" disabled />
                                <div class="">Fresher (2)</div>
                            </div>
                            <div class="px-2 py-2 flex items-center gap-2">
                                <input type="checkbox" class="h-5 w-5" disabled />
                                <div class="">Junior(12)</div>
                            </div>
                            <div class="px-2 py-2 flex items-center gap-2">
                                <input type="checkbox" class="h-5 w-5" disabled />
                                <div class="">Middle(27)</div>
                            </div>
                            <div class="px-2  py-2 flex items-center gap-2">
                                <input type="checkbox" class="h-5 w-5" disabled />
                                <div class="">Senior(33)</div>
                            </div>


                        </div>
                        <div class="px-6 py-4">

                            <hr></hr>
                            <div class="text-xl mt-2 text-gray-500 ">JOBS EXPERIENCE</div>

                        </div>
                        {/* job experi. */}
                        <div>
                            <div class="px-2 py-2 flex items-center gap-2">
                                <input type="checkbox" class="h-5 w-5" disabled />
                                <div class="">1 - 2 Years (23)</div>
                            </div>
                            <div class="px-2 py-2 flex items-center gap-2">
                                <input type="checkbox" class="h-5 w-5" disabled />
                                <div class="">3 - 5 Years (30)</div>
                            </div>
                            <div class="px-2 py-2 flex items-center gap-2">
                                <input type="checkbox" class="h-5 w-5" disabled />
                                <div class="">6 - 9 Years (9)</div>
                            </div>
                            <div class="px-2  py-2 flex items-center gap-2">
                                <input type="checkbox" class="h-5 w-5" disabled />
                                <div class="">10+ Years (12)</div>
                            </div>


                        </div>
                    </div>

                </div>




                {/* 2nd  card*/}
                <div class="w-full lg:w-2/3 xl:mr-32 p-10">
                    <div className='flex justify-between  mx-4'>
                        <div class='text-xl '>16 jobs  for "Development & IT" </div>
                        <div className='flex  gap-2 '>
                            <div><svg width="19" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H2.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div>
                            <div><svg width="19" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.87935 1H3.9H11.1H11.1207C11.5231 0.999994 11.8553 0.999989 12.1259 1.0221C12.407 1.04506 12.6653 1.09434 12.908 1.21799C13.2843 1.40973 13.5903 1.7157 13.782 2.09202C13.9057 2.33469 13.9549 2.59304 13.9779 2.87409C14 3.14468 14 3.47686 14 3.87934V3.9V11.1V11.1207C14 11.5231 14 11.8553 13.9779 12.1259C13.9549 12.407 13.9057 12.6653 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.6653 13.9057 12.407 13.9549 12.1259 13.9779C11.8553 14 11.5231 14 11.1207 14H11.1H3.9H3.87934C3.47686 14 3.14468 14 2.87409 13.9779C2.59304 13.9549 2.33469 13.9057 2.09202 13.782C1.7157 13.5903 1.40973 13.2843 1.21799 12.908C1.09434 12.6653 1.04506 12.407 1.0221 12.1259C0.999989 11.8553 0.999994 11.5231 1 11.1207V11.1207V11.1V3.9V3.87935V3.87934C0.999994 3.47686 0.999989 3.14468 1.0221 2.87409C1.04506 2.59304 1.09434 2.33469 1.21799 2.09202C1.40973 1.7157 1.7157 1.40973 2.09202 1.21799C2.33469 1.09434 2.59304 1.04506 2.87409 1.0221C3.14469 0.999989 3.47687 0.999994 3.87935 1ZM2.95552 2.01878C2.73631 2.03669 2.62421 2.06915 2.54601 2.10899C2.35785 2.20487 2.20487 2.35785 2.10899 2.54601C2.06915 2.62421 2.03669 2.73631 2.01878 2.95552C2.00039 3.18056 2 3.47171 2 3.9V7H7V2H3.9C3.47171 2 3.18056 2.00039 2.95552 2.01878ZM7 8H2V11.1C2 11.5283 2.00039 11.8194 2.01878 12.0445C2.03669 12.2637 2.06915 12.3758 2.10899 12.454C2.20487 12.6422 2.35785 12.7951 2.54601 12.891C2.62421 12.9309 2.73631 12.9633 2.95552 12.9812C3.18056 12.9996 3.47171 13 3.9 13H7V8ZM8 8H13V11.1C13 11.5283 12.9996 11.8194 12.9812 12.0445C12.9633 12.2637 12.9309 12.3758 12.891 12.454C12.7951 12.6422 12.6422 12.7951 12.454 12.891C12.3758 12.9309 12.2637 12.9633 12.0445 12.9812C11.8194 12.9996 11.5283 13 11.1 13H8V8ZM13 7H8V2H11.1C11.5283 2 11.8194 2.00039 12.0445 2.01878C12.2637 2.03669 12.3758 2.06915 12.454 2.10899C12.6422 2.20487 12.7951 2.35785 12.891 2.54601C12.9309 2.62421 12.9633 2.73631 12.9812 2.95552C12.9996 3.18056 13 3.47171 13 3.9V7Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div>
                            <div className='0.875rem text-gray-500' >Sort By</div>

                            {/* select */}
                            <div class="inline-block relative w-15">
                                <select class="block appearance-none w-full px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none" className="background-color: transparent;">
                                    <option>Newleast</option>
                                    <option>Newleast</option>
                                    <option>Oldest</option>
                                    <option>Feastured</option>
                                </select>

                            </div>
                        </div>
                        {/* end */}

                    </div>
                    {/* card */}
                    <div class="card flex justify-between mx-4 mt-6 border-2 min-h-40 p-5 border-yellow-500 rounded-lg mx-25 flex-wrap">

                        <div>
                            <div className='flex gap-3 mb-10' >
                                <div >
                                    <img src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" width="50" height="90" />

                                </div>

                                <div>
                                    <div className="font-weight: bold color: black">Sr. Backend Go Developer</div>


                                    <div>by Uxper in Development & IT</div>
                                </div>

                            </div>

                            <div class="flex justify-center  gap-2 mt-3">
                                <span class="inline-block bg-violet-200 rounded-full px-3 py-1 text-sm font-semibold text-violet-700 h-8 w-20 text-center">Remote</span>
                                <span class="inline-block bg-green-100 rounded-full px-3 py-1 text-sm font-semibold text-green-700 h-8 w- text-center">
                                    <img src="" alt="" />Ashkasham
                                </span>
                                <span class="inline-block bg-green-100 rounded-full px-3 py-1 text-sm font-semibold text-green-700 min-h-8 w- text-center">
                                    $100 - $200/month
                                </span>
                            </div>
                        </div>


                        <div >
                            {/* icon  */}
                            <div className='flex gap-2 lg:justify-end mt-2    '>
                                <div className=''><img src="https://civi.uxper.co/wp-content/plugins/civi-framework/assets/images/icon-featured.svg" alt="" /></div>
                                <div className=''><svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.89346 2.35248C3.49195 2.35248 2.35248 3.49359 2.35248 4.90532C2.35248 6.38164 3.20954 7.9168 4.37255 9.33522C5.39396 10.581 6.59464 11.6702 7.50002 12.4778C8.4054 11.6702 9.60608 10.581 10.6275 9.33522C11.7905 7.9168 12.6476 6.38164 12.6476 4.90532C12.6476 3.49359 11.5081 2.35248 10.1066 2.35248C9.27059 2.35248 8.81894 2.64323 8.5397 2.95843C8.27877 3.25295 8.14623 3.58566 8.02501 3.88993C8.00391 3.9429 7.98315 3.99501 7.96211 4.04591C7.88482 4.23294 7.7024 4.35494 7.50002 4.35494C7.29765 4.35494 7.11523 4.23295 7.03793 4.04592C7.01689 3.99501 6.99612 3.94289 6.97502 3.8899C6.8538 3.58564 6.72126 3.25294 6.46034 2.95843C6.18109 2.64323 5.72945 2.35248 4.89346 2.35248ZM1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.0084 1.35248 6.73504 1.76049 7.20884 2.2953C7.32062 2.42147 7.41686 2.55382 7.50002 2.68545C7.58318 2.55382 7.67941 2.42147 7.79119 2.2953C8.265 1.76049 8.99164 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div>
                            </div>

                            <div className=' lg:mt-16 mb-2 text-center lg:text-right'>
                                554 days left to apply
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </div>
    </>
}

export default Filter