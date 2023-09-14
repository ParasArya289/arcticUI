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
  children,
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
          {children && <span>{children}</span>}
          {text && <p>{text}</p>}
        </button>
      )}
    </Fragment>
  );
};
