import React, { Fragment } from "react";
import "../App.css";

const InputTodo = () => {
  return (
    <Fragment>
      <h1 className="text-center t-5">Input Todo</h1>
      <form>
        <input type="text" />
        <button className="btn btn-success">Add</button>
      </form>
      
    </Fragment>
  );
}

export default InputTodo;
