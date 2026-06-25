import { useEffect, useState } from "react";
import Count from "./Count";



function App() {
const[counter, setCounter]=useState(0)
const[data, setData]=useState(0)

  return (
<>
<Count count={counter} data={data}/>
<button onClick={()=>setCounter(counter+1)}>Counter</button>
<button onClick={()=>setData(data+1)}>Data</button>

</>

  );
}

export default App;