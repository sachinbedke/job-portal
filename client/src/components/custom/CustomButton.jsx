import { Button } from "../ui/button"

const CustomButton = () => {
    return <div className="flex gap-4">
        <Button variant="default">default</Button>
        <Button variant="destructive">destructive</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="outline">outline</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="link">link</Button>
    </div>
}

export default CustomButton