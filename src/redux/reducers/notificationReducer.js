import { createSlice } from "@reduxjs/toolkit";
import { addTodo } from "./todoReducer";

const initialState = {
  message: ""
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    reset: (state, action) => {
      state.message = "";
    }
  },

  //using hardcoded
  //   extraReducers: {
  //     "todo/addTodo": (state, action) => {
  //       state.message = "Todo is Created";
  //     }
  //   }

  //using builder
  //   extraReducers: (builder) => {
  //     builder.addCase(addTodo, (state, action) => {
  //       state.message = "Todo is Created ";
  //     });
  //   }

  //using map object kay ,value pair
  extraReducers: {
    [addTodo]: (state, action) => {
      state.message = "Todo is Created";
    }
  }
});
export const { reset } = notificationSlice.actions;
export const notificationReducer = notificationSlice.reducer;
export const notificationSelector = (state) =>
  state.notificationReducer.message;
