import Login, { Color, Data, Sayyam } from "./Usercomponents"

function App(){
  return(
<div>
    <h1>Sayyam</h1>
    <Login/>
    <Color />
    <Data />
    {/* <Sayyam /> */}
    <h1>{Sayyam}</h1>
    </div>
  )
}

export default App
