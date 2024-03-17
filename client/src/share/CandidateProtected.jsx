import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"



const CandidateProtected = ({ compo }) => {
    const { user } = useSelector(state => state.auth)
    return (user && user.role === "user") ? compo : <Navigate to="/login" />
}
export default CandidateProtected