import { useNavigate } from "react-router-dom"
import route from "../routes/route.json"
const Error=()=>{
const navigate=useNavigate()
    return(
        <>
        
        <h1 style={{textAlign:"center"}}>PAGE NOT FOUND</h1>
<button  style={{display: "block", margin: "0 auto"}}onClick={()=>{navigate(route.HOME)}}>GO TO HOME PAGE</button>
        </>



    )
    
}
export default Error