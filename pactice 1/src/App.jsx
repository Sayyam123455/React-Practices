import { useEffect, useState } from "react";
import Count from "./Count";
import Card from "./Card";



function App() {
const[bgcolors, setBgcolor]=useState({  border:"1px solid #000", boxShadow: "0px 0px 15px -8px", width: "200px", margin:"20px"})
const[grid, setGrid]=useState(true)

function changebg(color){
    setBgcolor({...bgcolors, backgroundColor:color})
}


  return (
<>
<Card />
</>

  );
}

export default App;