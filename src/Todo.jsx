import React, { useRef, useState } from 'react'
import TodoList from './TodoList';

const Todo = () => {
    const inputref = useRef();
    const [todos,setTodos]= useState([])
    const add = () =>{
        const input = inputref.current.value.trim();
        if (input == ""){
            return null
        }
        const newTodo = {
            id: Date.now(),
            text: input,
            isComplete: false,
        }
        setTodos((prev)=>[...prev,newTodo])
        inputref.current.value = ""
    }
  return (
    <div>
        <h1>TO-DO</h1>
        <input type="text" ref={inputref} />
        <button onClick={add}>Add</button>
        <hr />
        {
        todos.map((item,index)=>{
          return  <TodoList key={index} text={item.text} id={item.id}/>
        })
        }
    </div>
  )
}

export default Todo