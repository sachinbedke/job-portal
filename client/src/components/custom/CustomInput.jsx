import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "../ui/button"

const CustomInput = () => {
    return <>
        <h1 className="text-3xl my-4">With Label</h1>

        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
        </div>
        <h1 className="text-3xl my-4">With Button</h1>

        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Email" />
            <Button type="submit">Subscribe</Button>
        </div>
    </>
}

export default CustomInput