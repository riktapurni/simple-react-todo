import { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { initialTasks } from "../../data/tasks";

export default function TodoApp() {
  const [tasks, setTasks] = useState(initialTasks);

  const getNextId = (data) => {
    const maxId = data.reduce(
      (prev, current) => (prev && prev > current.id ? prev : current.id),
      0
    );

    return maxId + 1;
  };
  const total = tasks.length;
  const completedTask = tasks.filter((task) => task.done).length;

  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: getNextId(tasks),
        text: text,
        done: false,
      },
    ]);
  };
  const handleEditTask = (task) => {
    const nextTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });
    setTasks(nextTasks);
  };
  const handleDeleteTask = (taskId) => {
    const taskAfterDeleted = tasks.filter((task) => task.id !== taskId);
    setTasks(taskAfterDeleted);
    // setTasks(tasks.filter((t) => t.id !== taskId))
  };
  return (
    <div>
      <AddTask onAddTask={handleAddTask} />
      <h2 className="my-3">Todo List</h2>

      <TaskList
        tasks={tasks}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />
      <hr />
      <b className="text-orange-600">
        Task {completedTask} is completed out of {total}{" "}
      </b>
    </div>
  );
}
