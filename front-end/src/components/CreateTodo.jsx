import { useState } from "react";
export function CreateTodo({setTodos}) {
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
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: title,
                    description: description
                })

            }).then(async (res) => {
                fetch("http://localhost:3000/todos")
                    .then(async (res) => {
                        const json = await res.json();
                        setTodos(json.todos);
                    });
            });
           // alert("added todo");
        }}>Add a todo</button>
    </div>);
}