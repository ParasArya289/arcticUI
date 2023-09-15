import { useNavigate } from "react-router-dom";
import { Text } from "../../ComponentLibrary/Text/Text";
import "./ComponentCard.css";

export const ComponentCard = ({ component,lastRef }) => {
  const navigate = useNavigate();
  const navigateHandler = (e) => {
    e.stopPropagation();
    navigate("./components/" + component.name);
  };
  return (
    <div>
      <div ref={lastRef} className="componentCard" onClick={navigateHandler}>
        {component.component}
      </div>
      <Text textAlign={"left"} size="medium">
        {component.name}
      </Text>
    </div>
  );
};
