function Todo(){
    function click(){
        alert("jai mata di")
    }
    return(
        <>
        <h1>ToDo Exercise</h1>
        <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" />
        <ul>
            <li>jai 1</li>
            <li>jai 2</li>
            <li>jai 3</li>
            <li>jai 4</li>
        </ul>
        <button onClick={click}>Click Me</button>
        </>
    )
} 
export default Todo