import { useState } from "react"

function Skills(){
   const[gender, setGender]=useState("female");
   const[city, setCity]=useState("noida");

    return(
        <>
        <input type="radio" onChange={(event)=>setGender(event.target.value)} value={"male"} name="gender" checked={gender == "male"} id="male"/>
        <label htmlFor="male">Male</label>
        <input type="radio"  onChange={(event)=>setGender(event.target.value)} value={"female"} name="gender" checked={gender == "female"} id="female"/>
        <label htmlFor="female">Female</label>
        <h5>Gender Name: {gender}</h5>
        <br />
        <br />
        <br />
        <select name="city" onChange={(event)=>setCity(event.target.value)} id="city" defaultValue="gurgram">
            <option value="delhi">delhi</option>
            <option value="noida">noida</option>
            <option value="gurgram">gurgram</option>
        </select>
        <h5>Selected City: {city}</h5>
                </>
    )

}
export default Skills