const Student=({student})=>{
    return(
        <>
         {
  student.map((student,index)=>(
    <div key={index} style={{backgroundColor:"#ccc",  padding:"20px", marginBottom:"10px"}}>
    <h2>{student.name}</h2>
    <h2>{student.age}</h2>
    <h2>{student.email}</h2>

    
    </div>
  ))
}
        </>
    )
   
}
export default Student