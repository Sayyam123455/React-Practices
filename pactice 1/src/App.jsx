import { useState } from "react"
import Skills from "./Skills"



function App(){
 const dataStore=[
    {
        Name:"Sayyam",
        Age:29,
        Email:"sayyam@test.com",
        id:1
    },
    {
        Name:"ram",
        Age:20,
        Email:"ram@test.com",
        id:2
    },
    {
        Name:"sham",
        Age:25,
        Email:"sham@test.com",
        id:3
    }
 ]
  return(
<div>{
  dataStore.map((user)=>(
  <Skills user={user}/>
  ))
}
    </div>
  )
}

export default App
