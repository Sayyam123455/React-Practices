import { useEffect } from "react";

function Count({count, data}){
    function counter(){
        console.log("counter called");
        
    }
    
    useEffect(()=>{
       counter(); 
    },[count])
    return(
        <div>
            <h1>{count}</h1>
            <h1>{data}</h1>

        </div>
    )
}
export default Count