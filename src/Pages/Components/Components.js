import { ComponentCard } from "../../Components/ComponentCard/ComponentCard";
import { components } from "../../Utils";
import "./Components.css";

export const Components = () => {
  return (
    <div className="components">
      {components?.map((component) => (
        <ComponentCard component={component} />
      ))}
    </div>
  );
};
