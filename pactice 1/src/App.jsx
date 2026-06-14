 const fruit = (name)=>{
  alert(name);
 }


function App(){
 function name(){
alert("name Submitted")
 }

//  const fruit = (name)=>{
//   alert(name);
//  }
  return(
<div>
   <button onClick={()=>fruit("apple")}>Apple</button>
   <button onClick={()=>fruit("banana")}>Banana</button>
    </div>
  )
}

export default App
