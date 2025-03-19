import classes from "./app.module.css";
import Header from "../header/header";
import Task from "../task/task";
import AddTask from "../add-task/add-task";
import { useEffect, useState, useRef } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const hasBeenRendered = useRef(false);

  useEffect(() => {
    if (hasBeenRendered.current) {
      return;
    } else {
      window.api.getData().then((data) => setData(data));
      hasBeenRendered.current = true;
    }
  }, []);

  useEffect(() => {
    if (hasBeenRendered.current) {
      window.api.saveData(data);
      return;
    } else {
      return;
    }
  }, [data]);

  function handleTaskChange(taskId, newText) {
    setData((prevData) => {
      return prevData.map((task) => {
        return taskId === task.id ? { ...task, name: newText } : task;
      });
    });
  }

  function handleTaskDone(taskId, isDone) {
    setData((prevData) => {
      return prevData.map((task) => {
        return taskId === task.id ? { ...task, isDone } : task;
      });
    });
  }

  function handleTaskDelete(taskId) {
    setData((prevData) => {
      return prevData.filter((task) => task.id !== taskId);
    });
  }

  function handleTaskAdd() {
    setData((prevData) => {
      return [...prevData, { id: Date.now(), name: "Введите имя задачи...", isDone: false }];
    });
  }

  return (
    <>
      <Header />
      <main className={classes.tasks}>
        {data.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            className={classes.task}
            isDone={task.isDone}
            onTaskChange={handleTaskChange}
            onTaskDone={handleTaskDone}
            onTaskDelete={handleTaskDelete}
          >
            {task.name}
          </Task>
        ))}
        <AddTask className={classes.addTask} onTaskAdd={handleTaskAdd} />
      </main>
    </>
  );
}
