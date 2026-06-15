import { useState } from "react"
import Counter from "./counter"

function App(){
const[display, setDisplay]=useState(true)
  return(
<div>
  <button onClick={()=>setDisplay(!display)}>Click Me</button>
{
  display?<Counter/>:null
}
    </div>
  )
}

export default App
