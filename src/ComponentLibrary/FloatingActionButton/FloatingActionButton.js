import FAB_style from "./FloatingActionButton.module.css";
import styles from "../../global.module.css";
export const FloatingActionButton = ({
  text,
  top,
  bottom,
  left,
  right,
  translateX,
  translateY,
  className,
  style,
  children,
  size = "md",
  variant = "dark",
}) => {
  return (
    <button
      className={`${FAB_style["floatingActionButton"]} ${FAB_style[size]} ${className} ${styles[variant]}`}
      style={{
        top,
        bottom,
        left,
        right,
        transform: `translate(${translateX}, ${translateY})`,
        ...style,
      }}
    >
      {children && <span>{children}</span>}
      {text && <p>{text}</p>}
    </button>
  );
};
