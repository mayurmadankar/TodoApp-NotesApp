import { useSelector, useDispatch } from "react-redux";
// import { toggleTodo } from "../../redux/actions/todoActions";
import { todoSelector, toggleTodo } from "../../redux/reducers/todoReducer";
import "./ToDoList.css";
import { useEffect } from "react";
import axios from "axios";

function ToDoList() {
  const todos = useSelector(todoSelector);
  const dispatch = useDispatch();
  // const todos= store.getState().todos;

  useEffect(() => {
    axios
      .get("http://localhost:3100/api/todos")
      .then((response) => {
        console.log("API response:", response.data);
        // Assuming you have a Redux action like `setTodos`
        // dispatch(setTodos(response.data));
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, [dispatch]);

  return (
    <div className="container">
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? "completed" : "pending"}>
              {todo.completed ? "Completed" : "Pending"}
            </span>
            <button
              className="btn btn-warning"
              onClick={() => {
                dispatch(toggleTodo(index));
              }}
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
