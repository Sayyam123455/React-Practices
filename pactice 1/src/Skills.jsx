import { useState } from "react"

function Skills({user}){


    return(
        <div className={user.id}>
       
            <h3>{user.Name}</h3>
            <h3>{user.Age}</h3>
            <h3>{user.id}</h3>
            <h3>{user.Email}</h3>
                </div>
    )

}
export default Skills