import { useRef } from "react";


function App() {
const inputref=useRef(null)
function placeholder(){
  inputref.current.placeholder="Password"
}
function toggle(){
  if( inputref.current.style.display!="none"){
  inputref.current.style.display="none"}
  else{
    inputref.current.style.display="inline"
  }
}
  return (
<>
<button onClick={toggle}>toggle</button>

<input ref={inputref} type="text" placeholder="enter your name" />
<button onClick={placeholder}>Change</button>
</>

  );
}

export default App;