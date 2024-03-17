import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
 const EmployerProtected = ({ compo }) => {
    const { user } = useSelector(state => state.auth)
    return (user && user.role === "emp") ? compo : <Navigate to="/login" />
}
export default EmployerProtected