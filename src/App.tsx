import React from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './features/TodoList'

const App: React.FC = () => {
  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto' }}>
      <h1>📝 My Todo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
