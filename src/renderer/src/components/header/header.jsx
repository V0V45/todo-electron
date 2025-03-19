import classes from "./header.module.css";
import logo from "../../assets/header-icon.svg";

export default function Header({ className }) {
  return (
    <header className={`${className} ${classes.header}`}>
      <img className={classes.logo} src={logo} alt="Logo" />
      <p className={classes.title}>Список задач</p>
    </header>
  );
}
