import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from '../app/store'
import { toggleTodo, deleteTodo } from './todoSlice'

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos) // Get todos from Redux state
  const dispatch = useDispatch<AppDispatch>() // Typed dispatch

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
              marginRight: '10px'
            }}
            onClick={() => dispatch(toggleTodo(todo.id))} // Toggle completed status
          >
            {todo.text}
          </span>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
