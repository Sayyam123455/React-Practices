import { useState } from "react";
import Collage from "./Collage";


function App() {
  const CollageData =[
    {
      name:"IET",
      website:"iet.com",
      city:"delhi",
      student:[
        {
          name:"sayyam",
          age:"29",
          email:"Sayyam@test.com"
        }
      ]
    },
    {
      name:"IIT",
      website:"iit.com",
      city:"delhi",
      student:[
        {
          name:"Akshit",
          age:"29",
          email:"akshit@test.com"
        }
      ]
    },
    {
      name:"MIT",
      website:"mit.com",
      city:"delhi",
      student:[
        {
          name:"rohit",
          age:"29",
          email:"rohit@test.com"
        }
      ]
    }

  ]
  return (
<>
<Collage collage={CollageData}/>


</>

  );
}

export default App;