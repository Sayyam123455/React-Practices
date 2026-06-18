import { useState } from "react"

function Skills(){
    const [data, setdata]=useState("");
    const print=(event)=>{
console.log(event.target.value, event.target.checked);
if(event.target.checked){
    setdata([...data, event.target.value])
}else{

    setdata([...data.filter((item)=>item!=event.target.value) ])
}

    }
    return(
        <>
        <input onChange={print} type="checkbox" id="php" value="php" />
        <label htmlFor="php">PHP</label>
        <br/><br/>
        <input onChange={print}  type="checkbox" id="js" value="js" />
        <label htmlFor="js">JS</label>
        <br/><br/>
        <input onChange={print}  type="checkbox" id="node" value="node" />
        <label htmlFor="node">NODE</label>
        <br/><br/>
        <input onChange={print}  type="checkbox" id="java" value="java" />
        <label htmlFor="java">java</label>
        <br/><br/>
        <h1>{data}</h1>
        </>
    )

}
export default Skills