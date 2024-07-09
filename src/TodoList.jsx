import React from 'react'

const TodoList = ({text,id}) => {
  return (
    <div>
       <h1>{text}</h1>
        <p>{id}</p>
    </div>
  )
}

export default TodoList