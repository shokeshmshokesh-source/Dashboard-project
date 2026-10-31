import "./App.css";
import { useState } from "react";
function Login({onLogin}){

   const[username,setUsername] =useState("")
   const[password,setPassword] =useState("")
   const[error,setError] =useState("")
   
   function handlelogin(){
      if(username==="neelu" &&password=== "2828"){
setError ("")
onLogin("")

      }else{
         setError("woring username or password !")
      }
   }
   
   
   return(
      <div className="login-card">
         <div className="container">
            <h1> Admin login</h1>
            <p>login to acess your dashboard</p>
             
             <label>username</label>
             <input type="text"
             placeholder="enter username"
             value={username}
             onChange={(e)=> setUsername(e.target.value)}/>

             <label>password</label>
             <input type="text"
             placeholder="enter password"
             value={password}
             onChange={(e)=> setPassword(e.target.value)}/>

             <button onClick={handlelogin}>login</button>
             <p>{error}</p>
             

         </div>

      </div>
   )
}
export default Login;
;