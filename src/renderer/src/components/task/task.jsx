import classes from "./task.module.css";
import checkboxEmptyIcon from "../../assets/checkbox-empty.svg";
import checkboxActiveIcon from "../../assets/checkbox-active.svg";
import deleteIcon from "../../assets/delete.svg";
import { useState } from "react";

export default function Task({
  className,
  id,
  children,
  isDone,
  onTaskChange,
  onTaskDone,
  onTaskDelete
}) {
  const [taskText, setTaskText] = useState(children);

  function handleChange(event) {
    const newText = event.target.value;
    setTaskText(newText);
    onTaskChange(id, newText);
  }

  return (
    <div
      className={`${className} ${isDone ? classes.done : classes.undone} ${classes.taskContainer}`}
    >
      <button className={classes.checkboxButton} onClick={() => onTaskDone(id, !isDone)}>
        <img src={isDone ? checkboxActiveIcon : checkboxEmptyIcon} className={classes.checkbox} />
      </button>
      <input className={classes.task} type="text" value={taskText} onChange={handleChange} />
      <button className={classes.deleteButton}>
        <img
          src={deleteIcon}
          alt="Delete"
          className={classes.delete}
          onClick={() => onTaskDelete(id)}
        />
      </button>
    </div>
  );
}
