import { Heading } from "../../../ComponentLibrary/Heading/Heading";
import { Layout } from "../../../Components/Layout/Layout";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Text } from "../../../ComponentLibrary/Text/Text";

export const TextDoc = () => {
  const codeString = ` 

  <Text size="xx-small" textAlign="left">Text</Text>
  
  
  `;
  return (
    <Layout>
      <div className="docs__main">
        <Heading>Text</Heading>
        <p className="docs__description">
          Texts are available in size xx-small, x-small, small, smaller, medium,
          large, larger, x-large, xx-large, xxx-large
        </p>
        <div className="docs__preview">
          <Text size="xx-small">Text</Text>
          <Text size="x-small">Text</Text>
          <Text size="small">Text</Text>
          <Text size="smaller">Text</Text>
          <Text size="medium">Text</Text>
          <Text size="large">Text</Text>
          <Text size="larger">Text</Text>
          <Text size="x-large">Text</Text>
          <Text size="xx-large">Text</Text>
          <Text size="xxx-large">Text</Text>
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
