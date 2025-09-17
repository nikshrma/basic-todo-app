import { useState } from "react";
export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (<div>
        <input type="text" placeholder="Title" onChange={(e) => {
            const value = e.target.value;
            setTitle(value);
        }}></input><br />
        <input type="text" placeholder="Description" onChange={(e) => {
            const value = e.target.value;
            setDescription(value);
        }}></input><br />
        <button onClick={() => {
            fetch("http://localhost:3000/todos", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
            headers:{
                "Content-Type": "application/json"
            }
        });
        alert("added todo");
    }}>Add a todo</button>
    </div>);
}