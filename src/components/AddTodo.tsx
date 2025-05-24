import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoSlice'
import type { AppDispatch } from '../app/store'

const AddTodo: React.FC = () => {
  const [text, setText] = useState('') // Local state for input field
  const dispatch = useDispatch<AppDispatch>() // Typed dispatch from Redux store

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      dispatch(addTodo(text)) // Dispatch the action to add a new todo
      setText('') // Clear the input after submission
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Add a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodo
