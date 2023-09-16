import { Heading } from "../../../ComponentLibrary/Heading/Heading";
import { Layout } from "../../../Components/Layout/Layout";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Text } from "../../../ComponentLibrary/Text/Text";
import { HorizontalCard } from "../../../ComponentLibrary/HorizontalCard/HorizontalCard";

export const HorizontaCardDoc = () => {
  const codeString = ` 

  
    <HorizontalCard src="imgSrcUrl">

        <Heading size="medium" textAlign="left">
        Arctic UI
        </Heading>

        <Text size="smaller" textAlign="left">
        Core building blocks for your design system
        </Text>

    </HorizontalCard>
  
  
  `;
  return (
    <Layout>
      <div className="docs__main">
        <Heading>Text Overlay</Heading>
        <p className="docs__description">
          Horizontal Cards are available in six different variants. Can be used
          with/without Text, Heading, Button, Badge components available on
          Arctic UI.
        </p>
        <div className="docs__preview">
          <HorizontalCard
            src="https://images.pexels.com/photos/1647220/pexels-photo-1647220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            variant="info"
          >
            <Heading size="medium" textAlign="left">
              Arctic UI
            </Heading>
            <Text size="smaller" textAlign="left">
              Core building blocks for your design system
            </Text>
          </HorizontalCard>

          <HorizontalCard
            src="https://images.pexels.com/photos/1647220/pexels-photo-1647220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            variant="success"
          >
            <Heading size="medium" textAlign="left">
              Arctic UI
            </Heading>
            <Text size="smaller" textAlign="left">
              Core building blocks for your design system
            </Text>
          </HorizontalCard>

          <HorizontalCard
            src="https://images.pexels.com/photos/1647220/pexels-photo-1647220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            variant="warning"
          >
            <Heading size="medium" textAlign="left">
              Arctic UI
            </Heading>
            <Text size="smaller" textAlign="left">
              Core building blocks for your design system
            </Text>
          </HorizontalCard>
          <HorizontalCard
            src="https://images.pexels.com/photos/1647220/pexels-photo-1647220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            variant="danger"
          >
            <Heading size="medium" textAlign="left">
              Arctic UI
            </Heading>
            <Text size="smaller" textAlign="left">
              Core building blocks for your design system
            </Text>
          </HorizontalCard>
          <HorizontalCard
            src="https://images.pexels.com/photos/1647220/pexels-photo-1647220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            variant="light"
          >
            <Heading size="medium" textAlign="left">
              Arctic UI
            </Heading>
            <Text size="smaller" textAlign="left">
              Core building blocks for your design system
            </Text>
          </HorizontalCard>
          <HorizontalCard
            src="https://images.pexels.com/photos/1647220/pexels-photo-1647220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            variant="dark"
          >
            <Heading size="medium" textAlign="left">
              Arctic UI
            </Heading>
            <Text size="smaller" textAlign="left">
              Core building blocks for your design system
            </Text>
          </HorizontalCard>
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
