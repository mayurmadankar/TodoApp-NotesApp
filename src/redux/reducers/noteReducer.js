// import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [
    { text: "Note 1", Deleted: false, createdOn: new Date() }, // Fixed typo in "createdOn"
    { text: "Note 2", Deleted: false, createdOn: new Date() }
  ]
};

//creating reducer using redux toolkit
const noteSlice = createSlice({
  name: "note",
  initialState: initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push({
        text: action.payload,
        Deleted: false,
        createdOn: new Date()
      });
    },
    deleteNote: (state, action) => {
      const note = state.notes.splice(action.payload, 1);
      if (note) {
        note.Deleted = true;
      }
    }
  }
});
export const { addNote, deleteNote } = noteSlice.actions;
export const noteReducer = noteSlice.reducer;
export const noteSelector = (state) => state.noteReducer.notes;

// export function noteReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_NOTE:
//       return {
//         ...state,
//         notes: [
//           ...state.notes,
//           {
//             text: action.text,
//             Deleted: false,
//             createdOn: new Date() // Consistent key name
//           }
//         ]
//       };
//     case DELETE_NOTE:
//       return {
//         ...state,
//         notes: state.notes.filter((_, index) => index !== action.index) // Immutable deletion
//       };
//     default:
//       return state;
//   }
// }
