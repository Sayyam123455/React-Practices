import { useEffect } from "react";

function Count({count, data}){
   
    
    useEffect(()=>{
      console.log("birth");
      
    },[])
     useEffect(()=>{
      console.log("groeth");
      
    },[count])
    useEffect(()=>{
        return()=>{
      console.log("delete");

        }
      
    },[])
    return(
        <div>
            <h1>{count}</h1>
            <h1>{data}</h1>

        </div>
    )
}
export default Count