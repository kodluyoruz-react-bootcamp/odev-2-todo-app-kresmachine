import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
function App() {
  const [items, setItems] = useState([])
  const [ticked, setTicked] = useState(false)
  
  useEffect(() => {
    setItems(items.map(item => {
      return { ...item, done: ticked };
    }));
  }, [ticked])

  const handleDelete = (id) => {
    const filtered = items.filter(item => item.id !== id)
    setItems(filtered)
  }

  const handleToggle = (id) => {
    const updated = items.map((item) => {
      if (item.id === id) {
        console.log(id)
        item.done = !item.done
      }
      return item
    })
    console.log(updated);
    setItems(updated)

  }

  const handleAddTodo = (text) => {
    const todo = {
      text: text,
      id: Math.random(),
      done: false
    }
    setItems([...items, todo])

  }

  const handleCheckAll = () => {
    setTicked(!ticked)
  }
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <TodoForm handleAddTodo={handleAddTodo} />
      </header>

      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all" onClick={handleCheckAll}>
          Mark all as complete
      </label>
        <TodoList list={items} onDelete={handleDelete} onToggle={handleToggle} />

      </section>
      <Footer activeTodosCount={items.filter(item => item.done !== true).length} />

    </section>
  );
}

export default App;
