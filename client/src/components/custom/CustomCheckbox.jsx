import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "../ui/label"


const CustomCheckbox = () => {
    return <>
        <div className="flex gap-2">
            <Checkbox id="html" />
            <Label htmlFor="html" >HTML</Label>
        </div>

    </>
}

export default CustomCheckbox