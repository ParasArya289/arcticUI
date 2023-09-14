import "./Heading.css";

export const Heading = ({ size, textAlign, children }) => {
  return (
    <h1 style={{ textAlign, fontSize: size }} className={`heading`}>
      {children}
    </h1>
  );
};
