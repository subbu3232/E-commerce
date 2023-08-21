import React, { useContext } from "react"
import { LoginContext } from "../Conntexts/LoginContext"
const Account=()=>{
    const{userName,number}=useContext(LoginContext)
return (
    <>
    <h1>Account Page</h1>
<h3>{userName}</h3>
<h4>{number}</h4>
    </>

)

}
export default Account