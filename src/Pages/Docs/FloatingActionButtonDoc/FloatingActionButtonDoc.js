import { Heading } from "../../../ComponentLibrary/Heading/Heading";
import { Layout } from "../../../Components/Layout/Layout";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FloatingActionButton } from "../../../ComponentLibrary/FloatingActionButton/FloatingActionButton";
import { FiFolderPlus } from "react-icons/fi";

export const FloatingActionButtonDoc = () => {
  const codeString = ` 
  //Plain 
  
  <FloatingActionButton
    text="Add"
    top
    right
    left
    bottom
    translateX={0}
    translateY={0}
    size="lg"
    variant="dark"
  >
    <FiFolderPlus />
  </FloatingActionButton>

  //With Icon

  <FloatingActionButton
    //text="Add"
    style={{ position: "unset" }}
    translateX={0}
    translateY={0}
    size="lg"
    variant="dark"
  >
    <FiFolderPlus />
  </FloatingActionButton>
  
  
  `;
  return (
    <Layout>
      <div className="docs__main">
        <Heading>Floating Action Button</Heading>
        <p className="docs__description">
          Floating Action Button are available with six different variants. Can
          be manipulated over with can be placed any where on the screen as it
          has Position Fixed property applied, available in size sm, md, lg. Can
          be used with icons.
        </p>
        <div className="docs__preview">
          <FloatingActionButton
            // text="Add"
            style={{ position: "unset" }}
            translateX={0}
            translateY={0}
            size="lg"
            variant="info"
          >
            <FiFolderPlus />
          </FloatingActionButton>
          <FloatingActionButton
            // text="Add"
            style={{ position: "unset" }}
            translateX={0}
            translateY={0}
            size="lg"
            variant="success"
          >
            <FiFolderPlus />
          </FloatingActionButton>
          <FloatingActionButton
            // text="Add"
            style={{ position: "unset" }}
            translateX={0}
            translateY={0}
            size="lg"
            variant="warning"
          >
            <FiFolderPlus />
          </FloatingActionButton>
          <FloatingActionButton
            // text="Add"
            style={{ position: "unset" }}
            translateX={0}
            translateY={0}
            size="lg"
            variant="danger"
          >
            <FiFolderPlus />
          </FloatingActionButton>
          <FloatingActionButton
            // text="Add"
            style={{ position: "unset" }}
            translateX={0}
            translateY={0}
            size="lg"
            variant="light"
          >
            <FiFolderPlus />
          </FloatingActionButton>
          <FloatingActionButton
            // text="Add"
            style={{ position: "unset" }}
            translateX={0}
            translateY={0}
            size="lg"
            variant="dark"
          >
            <FiFolderPlus />
          </FloatingActionButton>
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
