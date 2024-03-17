import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
/**
* * @param {{ 
*          type: "facebook" | "youtube" | "twitter";
*          onClick: ()=>{};
*  }} props 
*/
const CustomAlert = (props) => {
    return <>
        <Alert>
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
                You can add components and dependencies to your app using the cli.
            </AlertDescription>
        </Alert>

    </>
}

export default CustomAlert