import { useState } from "react"

function Skills(){
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
        <>
       <table border="1">
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Age</td>
                <td>Email</td>
            </tr>
            </thead>
            <tbody>
                {
                    dataStore.map((user)=>(
                        <tr>
                        <td>{user.id}</td>
                        <td>{user.Name}</td>
                        <td>{user.Age}</td>
                        <td>{user.Email}</td>
                        </tr>
                    ))
                }
            </tbody>
        
       </table>
                </>
    )

}
export default Skills