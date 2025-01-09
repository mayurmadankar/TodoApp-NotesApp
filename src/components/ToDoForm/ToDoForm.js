import { useState } from "react";
import { useDispatch } from "react-redux";
// import {addTodo} from "../../redux/actions/todoActions";
import { useSelector } from "react-redux";
import { reset } from "../../redux/reducers/notificationReducer";
import "./ToDoForm.css";
import { addTodo } from "../../redux/reducers/todoReducer";
import { notificationSelector } from "../../redux/reducers/notificationReducer";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const disptach = useDispatch();
  const message = useSelector(notificationSelector);

  const handleSubmit = (e) => {
    e.preventDefault();
    disptach(addTodo(todoText));
    setTodoText("");
    setTimeout(() => {
      disptach(reset());
    }, 2000);
  };

  return (
    <div className="container">
      {message && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">
          Create Todo
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
