import { Heading } from "../../../ComponentLibrary/Heading/Heading";
import { Layout } from "../../../Components/Layout/Layout";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { TextOverlay } from "../../../ComponentLibrary/TextOverlay/TextOverlay";
import { Text } from "../../../ComponentLibrary/Text/Text";
import { Button } from "../../../ComponentLibrary/Button/Button";

export const TextOverlayDoc = () => {
  const codeString = ` 

  
    <TextOverlay src="imgSrcUrl">

      <Heading size="large" textAlign="left">
        Arctic UI
      </Heading>
      
      <Text size="medium" textAlign="left">
        Core building blocks for your design system
      </Text>

      <Button text="Check out" size="md" variant="info" />

    </TextOverlay>
  
  
  `;
  return (
    <Layout>
      <div className="docs__main">
        <Heading>Text Overlay</Heading>
        <p className="docs__description">
          Text Overlay are available. Can be used with/without Text, Heading,
          Button, Badge components available on Arctic UI.
        </p>
        <div className="docs__preview">
          <TextOverlay src="https://images.pexels.com/photos/1647220/pexels-photo-1647220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
            <Heading size="large" textAlign="left">
              Arctic UI
            </Heading>
            <Text size="medium" textAlign="left">
              Core building blocks for your design system
            </Text>
            <Button text="Check out" size="md" variant="info" />
          </TextOverlay>
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
