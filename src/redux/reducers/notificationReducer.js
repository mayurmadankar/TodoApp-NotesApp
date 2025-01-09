import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: ""
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {},
  extraReducers: {
    "todo/addTodo": (state, action) => {
      state.message = "Todo is Created";
    }
  }
});
export const notificationReducer = notificationSlice.reducer;
export const notificationSelector = (state) =>
  state.notificationReducer.message;
