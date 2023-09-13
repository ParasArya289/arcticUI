import { Fragment } from "react";
import "./Button.css";
import styles from "../../global.module.css";

export const Button = ({
  type = "button",
  variant = "dark",
  className,
  text,
  size = "md",
  href,
}) => {
  return (
    <Fragment>
      {href ? (
        <a href={href} className={`link ${className}`} target="_blank">
          {text}
        </a>
      ) : (
        <button
          type={type}
          className={`button ${size} ${styles[variant]} ${className}`}
        >
          {text}
        </button>
      )}
    </Fragment>
  );
};
