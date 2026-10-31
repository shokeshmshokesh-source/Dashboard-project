
import  Dashboard from "./Dashboard";
import { useState } from "react";
import Login from "./login";

function App(){
   const[login,setLogin] =useState(false)

   return(
      <>
      {login ?(
         <Dashboard/>
      ) :(
         <Login onLogin={()=> setLogin(true)}/>
      )}
      
      
      
      
      </>
   )
}
   
export default App;