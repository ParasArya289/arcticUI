import "./Card.css";
import styles from "../../global.module.css";

export const Card = ({ variant = "dark", className, style, children }) => {
  return (
    <div className={`card ${styles[variant]} ${className}`} style={style}>
      {children}
    </div>
  );
};
