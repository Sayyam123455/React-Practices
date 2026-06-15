import { useState } from "react"


function App(){
  const [count, setCount]=useState(0);
  return(
<div>
  <h1>{count}</h1>
  <button onClick={()=>setCount(count+1)}>Click me</button>
  {
    count==0?<h1>Coundition 0</h1>
    :count==1?<h1>Coundition 1</h1>
    :count==2?<h1>Coundition 2</h1>
    :count==3?<h1>Coundition 3</h1>
    :<h1>Other Condition</h1>

  }
    </div>
  )
}

export default App
