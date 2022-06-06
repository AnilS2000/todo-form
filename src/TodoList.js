import "./style.css";

export const TodoList = ({ onChecked, deleteTask, tasks, filter }) => {
  return (
    <div className="todo_list">
      {/* List of todos */}

      {tasks.map((task, id) => {
        if (filter === "All") {
          return (
            <div key={task.id}>
              <li key={task.id}>
                {" "}
                <input
                  type="checkbox"
                  checked={task.status === 1 ? "checked" : ""}
                  onChange={() => onChecked(task.id)}
                />
                {task.name} - {task.status} -
                <a href="#" onClick={() => deleteTask(task.id)}>
                  Delete
                </a>
              </li>
            </div>
          );
        } else if (filter === "Pending") {
          if (task.status === 0) {
            return (
              <div key={task.id}>
                <li key={task.id}>
                  {" "}
                  <input type="checkbox" onChange={() => onChecked(task.id)} />
                  {task.name} - {task.status} -
                  <a href="#" onClick={() => deleteTask(task.id)}>
                    Delete
                  </a>
                </li>
              </div>
            );
          }
        } else if (filter === "Done") {
          if (task.status === 1) {
            return (
              <div key={task.id}>
                <li key={task.id}>
                  {" "}
                  <input
                    type="checkbox"
                    checked
                    onChange={() => onChecked(task.id)}
                  />
                  {task.name} - {task.status} -
                  <a href="#" onClick={() => deleteTask(task.id)}>
                    Delete
                  </a>
                </li>
              </div>
            );
          }
        }
      })}

      <br />
    </div>
  );
};
