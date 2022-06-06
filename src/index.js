import React, { useState } from "react";
import ReactDOM from "react-dom";
import { nanoid } from "nanoid";
import { TodoForm } from "./TodoForm.js";
import { TodoList } from "./TodoList.js";
import { TodoFilter } from "./TodoFilter";
import "./style.css";

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const taskValueChange = (val) => {
    setText(val);
  };

  const addTask = () => {
    const tasks_array = [...tasks, { id: nanoid(), name: text, status: 0 }];
    setTasks(tasks_array);
    setText("");
  };
  const deleteTask = (id) => {
    const tasks_array = tasks.filter((task) => task.id !== id);

    setTasks(tasks_array);
  };

  const onChecked = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          if (task.status === 0) {
            task.status = 1;
          } else {
            task.status = 0;
          }
        }
        return task;
      })
    );
  };

  const showAll = () => {
    setFilter("All");
  };

  const showPending = () => {
    setFilter("Pending");
  };

  const showDone = () => {
    setFilter("Done");
  };

  return (
    <>
      <div id="center">
        <div class="centre_style">
          <TodoForm
            addTask={addTask}
            taskValueChange={taskValueChange}
            text={text}
          />
          <br />

          <TodoFilter
            showAll={showAll}
            showDone={showDone}
            showPending={showPending}
          />

          <br></br>
          <TodoList
            // jnacjkn
            onChecked={onChecked}
            deleteTask={deleteTask}
            tasks={tasks}
            filter={filter}
          />
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
