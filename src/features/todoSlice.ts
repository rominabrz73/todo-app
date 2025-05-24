import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// Define the structure of a single todo item
export interface Todo {
  id: number
  text: string
  completed: boolean
}

// Initial state: an empty array of todos
const initialState: Todo[] = []

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Add a new todo with the provided text
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now(), // Generate a unique ID using the current timestamp
        text: action.payload,
        completed: false
      }
      state.push(newTodo)
    },

    // Toggle the completed status of a todo by its ID
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.find((t) => t.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },

    // Delete a todo by filtering it out by ID
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((t) => t.id !== action.payload)
    }
  }
})

// Export action creators and reducer
export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer
