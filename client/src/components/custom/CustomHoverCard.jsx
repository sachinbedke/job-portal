import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

const CustomHoverCard = () => {
    return <HoverCard>
        <HoverCardTrigger>Hover</HoverCardTrigger>
        <HoverCardContent>
            The React Framework – created and maintained by @vercel.
        </HoverCardContent>
    </HoverCard>

}

export default CustomHoverCard 
