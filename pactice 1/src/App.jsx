import { useRef } from "react";
import UserRef from "./userref";


function App() {
  const inputRef=useRef(null);
function DataTransferItem(){
inputRef.current.value=1000
inputRef.current.focus()
}
  return (
<>
<h1>forward ref</h1>
<UserRef ref={inputRef}/>
<button onClick={DataTransferItem}>Update Ref</button>
</>

  );
}

export default App;