"use client"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
const CustomCalendar = () => {
    const [date, setDate] = useState(new Date())
    return <>

        <Popover>
            <PopoverTrigger>
                <Input value={date} />
            </PopoverTrigger>
            <PopoverContent >
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                />
            </PopoverContent>
        </Popover>
    </>
}

export default CustomCalendar