import "./Image.css";

export const Image = ({ aspectRatio, fallback, src, alt, borderRadius }) => {
  return (
    <img
      className="image"
      src={src || fallback}
      alt={alt}
      style={{ aspectRatio, borderRadius }}
    />
  );
};
