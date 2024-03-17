import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

/**
*  @param {{ 
    *          onClick: ()=>{};
    *          className: 
    * 
    *  }} props 
    */
const CustomAvatar = (props) => {
    return <Avatar {...props}>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
    </Avatar>

}

export default CustomAvatar