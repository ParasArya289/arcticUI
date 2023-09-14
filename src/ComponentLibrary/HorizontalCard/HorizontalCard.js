import "./HorizontalCard.css";
import styles from "../../global.module.css";

export const HorizontalCard = ({
  src,
  alt,
  variant = "dark",
  className,
  style,
  children,
}) => {
  return (
    <div
      className={`horizontalCard ${styles[variant]} ${className}`}
      style={style}
    >
      <img src={src} alt={alt}/>
      <div className="horizontalCard__content">{children}</div>
    </div>
  );
};
