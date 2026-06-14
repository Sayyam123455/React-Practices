import Todo from "./ToDo"


function App(){
  const name ="Sayyam";
  const x= 10;
  const y= 20;
 const ObjectSam={
    name: "Sayyam",
    email: "sam@gmail.com",
age:"29"
  }
  const img="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
  const arr=[8,9,5,4,5]
  function data(){
    return "fruit";
  }
  function marks(a, b, op){
    if(op=="+"){
      return a+b;
    }
    else if(op=="-"){
      return a-b;
    }
else{
      return a*b;
}    
  }

  return(
<div>
    <h1>{name?name:"User not Found"}</h1>
    <h1>{x+y}</h1>
    <h1>{data()}</h1>
    <h1>{marks(4,6, "")}</h1>
    <h1>{ObjectSam.age}</h1>
    <h1>{arr[3]}</h1>
<img src={img}/>
    </div>
  )
}

export default App
