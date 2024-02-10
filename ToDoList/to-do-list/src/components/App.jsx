import React,{useState} from "react"
import Input from "./Input"
import TaskList from "./TaskList";

function App(){
    const [AllItems, setAllItems]=useState(["This is demo Item"]);
    function addItem(newText){
        setAllItems((preValue)=>{
            return [...preValue,newText]
        });
    }
    return <div>
        <h1>To Do List</h1>
        <Input
            onAdd={addItem}
        />
        <ul>
            {AllItems.map((item,index)=>{
                return(
                <TaskList
                    key={index}
                    id={index}
                    text={item}
                />)
            })}
        </ul>
        
    </div>;
}

export default App;