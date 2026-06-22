import Student from "./Student"

const Collage=({collage})=>{
    return(
        <>
         {
  collage.map((collage,index)=>(
    <div key={index} style={{backgroundColor:"#ccc",  padding:"20px", marginBottom:"10px"}}>
    <h2>{collage.name}</h2>
    <h2>{collage.website}</h2>
    <h2>{collage.city}</h2>

    <Student student={collage.student}/>
    </div>
  ))
}
        </>
    )
   
}
export default Collage