import "./TextOverlay.css";
import styles from "../../global.module.css";

export const TextOverlay = ({
  src,
  alt,
  variant = "dark",
  className,
  style,
  children,
}) => {
  return (
    <div
      className={`textOverlay ${styles[variant]} ${className}`}
      style={style}
    >
      <img src={src} alt={alt} />
      <div className="textOverlay__content">{children}</div>
    </div>
  );
};
