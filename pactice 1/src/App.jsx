import { useEffect, useState } from "react";
import Count from "./Count";



function App() {
const[bgcolors, setBgcolor]=useState({  border:"1px solid #000", boxShadow: "0px 0px 15px -8px", width: "200px", margin:"20px"})
const[grid, setGrid]=useState(true)

function changebg(color){
    setBgcolor({...bgcolors, backgroundColor:color})
}


  return (
<>
<button onClick={()=>setGrid(!grid)}>Toggle</button>
<button onClick={()=>changebg("#ccc")}>Grey Button</button>
<button onClick={()=>changebg("#fff")}>Default Button</button>
<div style={{display:grid?"flex":"block"}}>
<div style={bgcolors}>
  <img style={{width:"200px"}} src="https://st3.depositphotos.com/1350793/14897/i/450/depositphotos_148976937-stock-photo-demo-concept-with-hand.jpg" alt="" />
  <h2>Sayam</h2>
  <p>react developer</p>
</div>
<div style={bgcolors}>
  <img style={{width:"200px"}} src="https://st3.depositphotos.com/1350793/14897/i/450/depositphotos_148976937-stock-photo-demo-concept-with-hand.jpg" alt="" />
  <h2>Sayam</h2>
  <p>react developer</p>
</div>
<div style={bgcolors}>
  <img style={{width:"200px"}} src="https://st3.depositphotos.com/1350793/14897/i/450/depositphotos_148976937-stock-photo-demo-concept-with-hand.jpg" alt="" />
  <h2>Sayam</h2>
  <p>react developer</p>
</div>
<div style={bgcolors}>
  <img style={{width:"200px"}} src="https://st3.depositphotos.com/1350793/14897/i/450/depositphotos_148976937-stock-photo-demo-concept-with-hand.jpg" alt="" />
  <h2>Sayam</h2>
  <p>react developer</p>
</div>
<div style={bgcolors}>
  <img style={{width:"200px"}} src="https://st3.depositphotos.com/1350793/14897/i/450/depositphotos_148976937-stock-photo-demo-concept-with-hand.jpg" alt="" />
  <h2>Sayam</h2>
  <p>react developer</p>
</div>
<div style={bgcolors}>
  <img style={{width:"200px"}} src="https://st3.depositphotos.com/1350793/14897/i/450/depositphotos_148976937-stock-photo-demo-concept-with-hand.jpg" alt="" />
  <h2>Sayam</h2>
  <p>react developer</p>
</div>
</div>
</>

  );
}

export default App;