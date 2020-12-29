import React from 'react'

function TodoList({ list, onDelete, onToggle }) {


    return (
        <ul className="todo-list">
            {/*    <li className="completed">
                <div className="view">
                    <input className="toggle" type="checkbox" checked="true"/>
                    <label>Learn JavaScript</label>
                    <button className="destroy"></button>
                </div>
            </li> */
            }

            {
                list.map((item, i) => {
                    return <li key={item.id} className={item.done ? "completed" : ""}>
                        <div className="view">
                            <input className="toggle" onChange={() => onToggle(item.id)} type="checkbox" checked={item.done} />
                            <label>{item.text}</label>
                            <button onClick={() => onDelete(item.id)} className="destroy"></button>
                        </div>
                    </li>
                })
            }

        </ul>
    )
}

export default TodoList
