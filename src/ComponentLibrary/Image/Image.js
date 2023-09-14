import "./Image.css";

export const Image = ({
  aspectRatio,
  fallback,
  src,
  alt,
  borderRadius,
  height,
  width,
  rounded,
}) => {
  return (
    <img
      className="image"
      src={src || fallback}
      alt={alt}
      height={height}
      width={width}
      style={{
        aspectRatio: rounded ? "1/1" : aspectRatio,
        borderRadius: rounded ? "999999px" : borderRadius,
      }}
    />
  );
};
