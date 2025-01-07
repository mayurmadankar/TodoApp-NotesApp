import { useDispatch, useSelector } from "react-redux";
import "./NoteList.css";
import { deleteNote } from "../../redux/actions/noteActions";

function NoteList() {
  // const notes=[];
  const notes = useSelector((state) => state.noteReducer.notes);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <ul>
        {notes.map((note, index) => (
          <li>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(deleteNote(index))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
