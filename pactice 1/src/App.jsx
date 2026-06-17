import { useState } from "react"
import Props from "./props"
import User from "./User";


function App(){
// const objectsub={
//   name:"Sayyam",age:"29"
// }
// const arr=["data", "dsd","sjdgjsa"]
const[data, setdata]=useState();
  return(
<div>
 <input type="text" value={data} onChange={(event)=>setdata(event.target.value)} />
 <h1>{data}</h1>
 <button onClick={()=>setdata("")}>Click me</button>
    </div>
  )
}

export default App
