import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Task({ task, onEditTask, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          className="border border-red-500"
          type="text"
          value={task.text}
          onChange={(e) => {
            onEditTask({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button
          className="border border-green-600 px-3 m-3"
          onClick={() => setIsEditing(false)}
        >
          save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button
          className="border border-green-600 px-3 m-3"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </>
    );
  }
  return (
    <>
      <li>
        <lable>
          <input
            type="checkbox"
            checked={task.done}
            onChange={(e) => {
              onEditTask({
                ...task,
                done: e.target.checked,
              });
            }}
          />{" "}
          {/* {task.text} */}
          <p className={`inline-block ${task.done ? "selected" : ""}`}>
            {taskContent}
          </p>
          <button
            className="border border-green-600 px-3 m-3"
            onClick={() => onDeleteTask(task.id)}
          >
            Delete
          </button>
        </lable>
      </li>
    </>
  );
}
