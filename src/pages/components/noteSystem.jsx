import React, { useState } from "react";
import "./noteSystem.css";

function NoteSystem() {
  const [task, setTask] = useState("");
  const [itemsList, setItemsList] = useState([]);

  function handleChangeInput(event) {
    const inputTask = event.target.value;

    setTask(inputTask);
  }

  function handleAddItemToList(event) {
    event.preventDefault();

    if (!task) {
      return;
    }

    setItemsList([...itemsList, task]);
    setTask("");
  }

  return (
    <div class="task-creator">
      <form onSubmit={handleAddItemToList}>
        <input
          type="text"
          placeholder="Feel like creating a note?"
          onChange={handleChangeInput}
          value={task}
        />
        <button>
          <text>Add note</text>
        </button>
        <ul>
          {itemsList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default NoteSystem;
