import "./Alert.css";
import styles from "../../global.module.css";

export const Alert = ({ variant, text }) => {
  return <div className={`alert ${styles[variant]}`}>{<p>{text}</p>}</div>;
};
