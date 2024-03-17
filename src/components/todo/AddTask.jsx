import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function AddTask({onAddTask}) {
  const [task, setTask] = useState("");
  return (
    <div>
      <h2>Add task</h2>
      <input
        className="border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 :text-sm"
        type="text"
        placeholder="Add task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button  onClick={() => {
                    setTask("");
                    onAddTask(task);
                }} className="border border-orange-800 m-2 px-5 py-1 hover:bg-orange-300">Add</button>
    </div>
  );
}
