import classes from "./add-task.module.css";
import addIcon from "../../assets/add.svg";

export default function AddTask({ className, onTaskAdd }) {
  return (
    <button className={`${className} ${classes.addButton}`} onClick={() => onTaskAdd()}>
      <img className={classes.addIcon} src={addIcon} alt="Add task" />
      <p className={classes.text}>Добавить</p>
    </button>
  );
}
