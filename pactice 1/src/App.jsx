import { useEffect, useState } from "react";
import Count from "./Count";



function App() {
const[counter, setCounter]=useState(0)
const[data, setData]=useState(0)
const[display, setdisplay]=useState(true)

  return (
<>
{
display ? <Count count={counter} data={data}/>:null
  
}
<button onClick={()=>setCounter(counter+1)}>Counter</button>
<button onClick={()=>setData(data+1)}>Data</button>
<button onClick={()=>setdisplay(!display)}>Toggle</button>

</>

  );
}

export default App;