import { Alert } from "../../../ComponentLibrary/Alert/Alert";
import { Heading } from "../../../ComponentLibrary/Heading/Heading";
import { Layout } from "../../../Components/Layout/Layout";
import "./AlertDoc.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const AlertDoc = () => {
  const codeString = `<Alert variant="info" text="Oops something went wrong" />`;
  return (
    <Layout>
      <div className="docs__main">
        <Heading>Alert</Heading>
        <p className="docs__description">
          Alerts are available for any length of text, as.For proper styling,
          use one of the six variants.
        </p>
        <div className="docs__preview">
          <Alert variant="info" text="Oops something went wrong" />
          <Alert variant="success" text="Oops something went wrong" />
          <Alert variant="warning" text="Oops something went wrong" />
          <Alert variant="danger" text="Oops something went wrong" />
          <Alert variant="light" text="Oops something went wrong !!!!" />
          <Alert variant="dark" text="Oops something went wrong !!!!" />
        </div>
        <div className="docs__demo">
          <Heading size={"large"}>How to use</Heading>
          <SyntaxHighlighter language="jsx" style={nightOwl}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </Layout>
  );
};
