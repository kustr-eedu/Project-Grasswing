import React, { useState } from "react";
import GrasswingFooter from "./components/footer";
import WebsiteSelector from "./components/siteSelector";
import "./stylesheet.css";

function Notes() {
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
    <div class="main-container">
      <WebsiteSelector />
      <section />
      <div class="task-creator">
        <form onSubmit={handleAddItemToList}>
          <input
            type="text"
            placeholder="Create a note and add here"
            onChange={handleChangeInput}
            value={task}
          />
          <button>
            <img src="" />
          </button>
          <ul>
            {itemsList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </form>
      </div>
      <section />
      <GrasswingFooter />
    </div>
  );
}

export default Notes;
