import "./Badge.css";
import styles from "../../global.module.css";

export const Badge = ({ variant = "danger", size = "md", text }) => {
  const badgeSize = {
    sm: 44,
    md: 66,
    lg: 88,
  };
  return (
    <div className={`badge ${size} ${styles[variant]}`}>
      <p>{text}</p>
    </div>
  );
};
