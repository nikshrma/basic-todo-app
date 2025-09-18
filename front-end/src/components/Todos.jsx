function handleCompleted(id,todos,setTodos){
    fetch("http://localhost:3000/completed",{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            id
        })
    })
    .then (async(res)=>{
        const modifiedTodo = await res.json();
        const newTodos = todos.map((t) =>
        t._id === modifiedTodo.updatedTodo._id ? modifiedTodo.updatedTodo : t
      );

      setTodos(newTodos);
    })
}
export function Todos({todos , setTodos}){
    return <div>
        {todos.map((todo)=>{
            return <div>
               <h1>{todo.title}</h1>
               <h1>{todo.description}</h1>
               {todo.completed?<span>Completed</span>:<button onClick={()=>{
                handleCompleted(todo._id,todos ,setTodos);
               }}>Mark as done</button>}
                </div>
        })}
    </div>
}