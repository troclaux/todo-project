import React, { Fragment, useState } from "react";
import "../App.css";

const InputTodo = () => {

  const [description, setDescription] = useState("")

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const user_id = 1;
      const completed = false;
      const body = { user_id, description, completed }
      const response = await fetch("http://localhost:5000/api/v1/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      console.log(response);
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <Fragment>

      <h1 className="text-center mt-5">Insert Task</h1>

      <form className="d-flex mt-5" onSubmit={onSubmitForm}>

        <input
          type="text"
          className="form-control"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <button className="btn btn-success">Add</button>

      </form>
      
    </Fragment>
  );
}

export default InputTodo;
