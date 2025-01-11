import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  isLoading: false,
  error: null
};

// Async thunk to fetch initial todos
export const getInitialStateAsync = createAsyncThunk(
  "todo/getInitialState",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:3100/api/todos");
      return response.data; // Assuming the API returns an array of todos
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch todos.");
    }
  }
);

// Async thunk to add a new todo
export const addTodoAsync = createAsyncThunk(
  "todo/addTodo",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:3100/api/todos", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          text: payload,
          completed: false
        })
      });
      return await response.json(); // Assuming the API returns the created todo
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to add todo.");
    }
  }
);

// Todo slice
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setInitialState: (state, action) => {
      state.todos = [...action.payload];
    },
    addTodo: (state, action) => {
      state.todos.push({
        text: action.payload,
        completed: false
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos[action.payload];
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInitialStateAsync.fulfilled, (state, action) => {
        state.todos = [...action.payload.data];
        state.isLoading = false;
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.todos.push(action.payload); // Add the new todo to the state
        state.isLoading = false;
      });
  }
});

// Export actions, reducer, and selector
export const { addTodo, toggleTodo, setInitialState } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
export const todoSelector = (state) => state.todoReducer.todos;
