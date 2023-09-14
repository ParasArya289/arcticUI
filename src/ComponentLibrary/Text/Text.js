import "./Text.css";

export const Text = ({ size, textAlign, children }) => {
  return (
    <p style={{ textAlign, fontSize: size }} className={`text`}>
      {children}
    </p>
  );
};
