import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todos/todoSlice'
import { AppDispatch } from '../app/store'

const AddTodo: React.FC = () => {
  const [text, setText] = useState('') // local state for the input text
  const dispatch = useDispatch<AppDispatch>() // hook to dispatch actions

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      dispatch(addTodo(text)) // dispatch the addTodo action
      setText('') // reset the input field
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
