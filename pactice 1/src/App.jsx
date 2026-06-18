import { useState } from "react"
import Props from "./props"
import User from "./User";


function App(){
// const objectsub={
//   name:"Sayyam",age:"29"
// }
// const arr=["data", "dsd","sjdgjsa"]
const[data, setdata]=useState();
const[password, setpassword]=useState();
const[email, setemail]=useState();
  return(
<div>
 <input type="text" value={data} onChange={(event)=>setdata(event.target.value)} /><br/><br/>
 <input type="text" value={password} onChange={(event)=>setpassword(event.target.value)} /><br/><br/>
 <input type="text" value={email} onChange={(event)=>setemail(event.target.value)} /><br/><br/>
 
 <button onClick={()=>{setdata("");setpassword("");setemail("")}}>Click me</button>
 <h1>{data}</h1>
 <h1>{password}</h1>
 <h1>{email}</h1>
    </div>
  )
}

export default App
