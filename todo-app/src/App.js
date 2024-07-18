import React, { useState } from 'react';

function App() {
  return (
    <div>
      <h1>TODO List</h1>
      <TodoApp />
    </div>
  );
}

function TodoApp() {
  const [todos, Test] = useState([
    { text: "Learn React", done: false },
    { text: "Build a project", done: false },
    { text: "Read a book", done: false },
  ]);

  const addTodo = (text) => {
    Test([...todos, {text, done: false }]);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    Test(newTodos);
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div>
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        placeholder="New TODO" 
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

function TodoList({ todos, toggleTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li 
          key={index} 
          onClick={() => toggleTodo(index)}
          style={{ textDecoration: todo.done ? "line-through" : "none" }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default App;
