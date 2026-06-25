import { useEffect, useState } from "react";



function App() {
const[counter, setCounter]=useState()
const[data, setData]=useState()
useEffect(()=>{

},[])
 function Counter(){
  console.log("counter publish");
  
 }
 Counter()
 function Data(){
  console.log("Data publish");
  
 }
  return (
<>

<button onClick={()=>setCounter(Counter)}>Counter</button>
<button onClick={()=>setData(Data)}>Data</button>

</>

  );
}

export default App;