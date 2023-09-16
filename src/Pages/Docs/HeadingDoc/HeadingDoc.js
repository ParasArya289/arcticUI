import { Heading } from "../../../ComponentLibrary/Heading/Heading";
import { Layout } from "../../../Components/Layout/Layout";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Image } from "../../../ComponentLibrary/Image/Image";

export const HeadingDoc = () => {
  const codeString = ` 

  <Heading size="xx-small" textAlign="left">Heading</Heading>
  
  
  `;
  return (
    <Layout>
      <div className="docs__main">
        <Heading>Heading</Heading>
        <p className="docs__description">
          Headings are available in size xx-small, x-small, small, smaller,
          medium, large, larger, x-large, xx-large, xxx-large
        </p>
        <div className="docs__preview">
          <Heading size="xx-small">Heading</Heading>
          <Heading size="x-small">Heading</Heading>
          <Heading size="small">Heading</Heading>
          <Heading size="smaller">Heading</Heading>
          <Heading size="medium">Heading</Heading>
          <Heading size="large">Heading</Heading>
          <Heading size="larger">Heading</Heading>
          <Heading size="x-large">Heading</Heading>
          <Heading size="xx-large">Heading</Heading>
          <Heading size="xxx-large">Heading</Heading>
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
