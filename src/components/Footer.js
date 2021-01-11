import React from 'react'

function Footer({activeTodosCount}) {
    return (
        <footer className="footer">
  
        <span className="todo-count">
          <strong>{activeTodosCount} </strong>
          items left
        </span>
    
        <ul className="filters">
          <li>{/*eslint-disable-next-line */}
            <a  className="selected">All</a>
          </li>
          <li>{/*eslint-disable-next-line */}
            <a>Active</a>
          </li>
          <li>{/*eslint-disable-next-line */}
            <a>Completed</a>
          </li>
        </ul>
    
        <button className="clear-completed">
          Clear completed
        </button>
      </footer>
    )
}

export default Footer
