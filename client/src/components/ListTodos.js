import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {

  const [todos, setTodos] = useState([]);

  const deleteTodo = async (id) => {
    try{
      const deleteTodo = await fetch(`http://localhost:5000/api/v1/tasks/${id}`, {
        method: "DELETE"
      });
      setTodos(todos.filter(todo => todo.id !== id));
      console.log(deleteTodo);
    } catch (err) {
      console.error(err.message);
    }
  }

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/tasks");
      const jsonData = await response.json();
      setTodos(jsonData.data.task);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>---</th>
            <th>---</th>
          </tr>
        </thead>
        <tbody>

          {todos.map(todo => (

            <tr key = { todo.id }>

              <td>{ todo.description }</td>

              <td>
                <EditTodo todo={todo} />
              </td>

              <td>
                <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
              </td>

            </tr>

          ))}

        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
