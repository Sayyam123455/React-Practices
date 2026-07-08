import { useRef } from "react";


function App() {
  const userRef=useRef(null);


const handleform=(event)=>{
event.preventDefault();
const user = document.querySelector("#user").value;
const password = document.querySelector("#password").value;
console.log(user, password);

}
const handleformRef=(event)=>{
event.preventDefault();
const usref=userRef.current.value;
console.log(usref);


}
  return (
<>
<form action="" method="post" onSubmit={handleform}>
  <input type="text" name="" id="user" />
  <input type="text" name="" id="password" />
  <button>Submit</button>
</form>

<hr>
</hr>

<form action="" method="post" onSubmit={handleformRef}>
  <input type="text" ref={userRef} name="" id="userref" />
  <input type="text" name="" id="passwordref" />
  <button>Submit with ref</button>
</form>
</>

  );
}

export default App;