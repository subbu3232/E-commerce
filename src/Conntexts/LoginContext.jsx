import { createContext, useEffect, useState } from "react";

export const LoginContext=createContext()

const LoginProvider=({children})=>{

    const[isLogin,setIslogin]=useState(false);
    const[UserName,setUserName]=useState("");
    const [number,setNumber]=useState("")
    useEffect(()=>{
const storedlogin=JSON.parse(localStorage.getItem("isLogin"));
if(storedlogin){
    setIslogin(true);
    // setUserName(localStorage.getItem(""));
    setNumber(JSON.parse(localStorage.getItem("number")))
setUserName(JSON.parse(localStorage.getItem("username")));



}
    },[])
    const LoginHandler=(name,number)=>{setIslogin(true);
        localStorage.setItem("isLogin", JSON.stringify(true));
        localStorage.setItem("username", JSON.stringify(name));
localStorage.setItem("usernumber",JSON.stringify(number))
    setUserName(name);
    setNumber(number)
    
    }
    const LogoutHandler=()=>{setIslogin(false)
    setUserName("");
    localStorage.removeItem("isLogin");
localStorage.removeItem("username");
localStorage.removeItem("usernumber")

    };
    
    return(
<LoginContext.Provider value={{isLogin,LoginHandler,LogoutHandler,UserName,number}}>{children}</LoginContext.Provider>

    )
}
export default LoginProvider