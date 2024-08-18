import { useState  } from 'react'

export function AddTodo(){
    //local state variables
    const [title, setTitle]= useState("");
    const [description, setDescription]= useState("");
    
    return <div>
        <input style={{
            padding: 15,
            margin: 10
        }} type="text" placeholder="title" onChange={function(e){
            const value= e.target.value;
            setTitle(value);
        }}></input><br></br>
        <input style={{
            padding: 15,
            margin: 10
        }}type="text" placeholder="description" onChange={function(e){
            const value= e.target.value;
            setDescription(value);
        }}></input><br></br>
        <button style={{
            padding: 5,
            margin: 10
        }} onClick={function(){
            fetch("http://localhost:3000/addTodo", {
                method: "POST", 
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(function(resp){
                    resp.json();
                    alert("To-do added");
                })
        }}>Add To-Do</button>
    </div>
}