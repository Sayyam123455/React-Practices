import { useState } from "react"
import Props from "./props"


function App(){
// const objectsub={
//   name:"Sayyam",age:"29"
// }
// const arr=["data", "dsd","sjdgjsa"]
const[data, setdata]=useState();
  return(
<div>
  {/* <h1>{data}</h1> */}
 {data && <Props dataset={data}/>}
 <button onClick={()=>setdata("bhaskar")}>Click me</button>
    </div>
  )
}

export default App
