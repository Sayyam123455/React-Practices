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
  <User color="red">
    <h1>Data Entered</h1>
  </User>
   <User>
    <h1>Data Entered</h1>
  </User>
   <User>
    <h1>Data Entered</h1>
  </User>
    </div>
  )
}

export default App
