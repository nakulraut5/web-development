import React,{useState} from "react"

function Input(props){
    const [newInput,setNewInput]=useState("");
    function handleInput (event){
        setNewInput(event.target.value);
    }
    function handleClick(){
        props.onAdd(newInput);
        setNewInput("");
    }
    return <div>
        <input onChange={handleInput} value={newInput} name="mainInput" type="text" placeholder="add new to do"></input>
        {/* <span><button onClick={()=>{
            props.onAdd(newInput);
            setNewInput("");
        }} type="button">Add Item</button></span> */}
        <span><button onClick={handleClick} type="button">Add Item</button></span>
    </div>
}

export default Input;