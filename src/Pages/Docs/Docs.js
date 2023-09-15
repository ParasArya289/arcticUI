import { useParams } from "react-router-dom";
import { Heading } from "../../ComponentLibrary/Heading/Heading";
import { Layout } from "../../Components/Layout/Layout";
import { components } from "../../Utils";
import "./Docs.css";

export const Docs = () => {
  const { componentName } = useParams();

  const component = components.find(({ name }) => name === componentName);
  return (
    <Layout>
      <Heading size={"large"}>This is {componentName}</Heading>
      {component.component}
    </Layout>
  );
};
