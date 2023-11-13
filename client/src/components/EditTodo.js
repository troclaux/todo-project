import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {

  const [description, setDescription] = useState(todo.description);

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = {description};
      const response = await fetch(`http://localhost:5000/api/v1/tasks/${todo.id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      console.log(response);
      window.location = "/";
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <Fragment> 
      <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${todo.id}`}>
      Edit
      </button>

      <div class="modal" id={`id${todo.id}`}>
        <div class="modal-dialog">
          <div class="modal-content">

            <div class="modal-header">

              <h4 class="modal-title">Edit Task</h4>
              <button 
                type="button" 
                class="btn-close" 
                data-bs-dismiss="modal" 
                onClick={ () => setDescription(todo.description) }
              >
              </button>

            </div>

            <div class="modal-body">
              <input 
                type="text" 
                className="form-control" 
                value={description} 
                onChange={e => setDescription(e.target.value)} 
              />
            </div>

            <div class="modal-footer">
              <button type="button" 
                class="btn btn-warning" 
                data-bs-dismiss="modal" 
                onClick={e => updateDescription(e)}
                >
                Edit
              </button>
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
