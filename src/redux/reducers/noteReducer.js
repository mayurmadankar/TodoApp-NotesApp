import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

const initialState = {
  notes: [
    { text: "Note 1", Deleted: false, createdOn: new Date() }, // Fixed typo in "createdOn"
    { text: "Note 2", Deleted: false, createdOn: new Date() }
  ]
};

export function noteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            text: action.text,
            Deleted: false,
            createdOn: new Date() // Consistent key name
          }
        ]
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((_, index) => index !== action.index) // Immutable deletion
      };
    default:
      return state;
  }
}
