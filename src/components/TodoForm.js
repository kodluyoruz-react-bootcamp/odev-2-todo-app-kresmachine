import React, { useState } from 'react'

function TodoForm({handleAddTodo}) {

    const [todoText, setTodoText] = useState("")

    function handleFormSubmit(event) {
        event.preventDefault()
        handleAddTodo(todoText);
        setTodoText("")
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input className="new-todo" placeholder="What needs to be done?" value={todoText} onChange={(event) => setTodoText(event.target.value)} />
        </form>

    )
}

export default TodoForm
