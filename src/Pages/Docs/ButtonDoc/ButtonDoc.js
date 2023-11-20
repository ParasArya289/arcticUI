import { Heading } from "../../../ComponentLibrary/Heading/Heading";
import { Layout } from "../../../Components/Layout/Layout";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Button } from "../../../ComponentLibrary/Button/Button";
import { HiOutlineSquare2Stack } from "react-icons/hi2";

export const ButtonDoc = () => {
  const codeString = ` 
  //Plain button
  
  <Button text="Button" size="md" variant="info"/>

  //With Icon

  <Button text="Button" size="md" variant="info">
    <HiOutlineSquare2Stack />
  </Button>
  

  `;
  const codeString2 = ` 
  //Button with link
  
  <Button text="Link" href="#"/>

  `;
  return (
    <Layout>
      <div className="docs__main">
        <Heading>Button</Heading>
        <p className="docs__description">
          Buttons are available with six different variants, available in size
          sm, md, lg. Can be used with icons.
        </p>
        <div className="docs__preview">
          <Button text="Button" size="md" variant="info"></Button>
          <Button text="Button" size="md" variant="success"></Button>
          <Button text="Button" size="md" variant="warning"></Button>
          <Button text="Button" size="md" variant="danger"></Button>
          <Button text="Button" size="md" variant="dark"></Button>
          <Button text="Button" size="md" variant="light"></Button>
          <div style={{ width: "100%" }} />
          <Button text="Button" size="md" variant="info">
            <HiOutlineSquare2Stack />
          </Button>
          <Button text="Button" size="md" variant="success">
            <HiOutlineSquare2Stack />
          </Button>
          <Button text="Button" size="md" variant="warning">
            <HiOutlineSquare2Stack />
          </Button>
          <Button text="Button" size="md" variant="danger">
            <HiOutlineSquare2Stack />
          </Button>
          <Button text="Button" size="md" variant="dark">
            <HiOutlineSquare2Stack />
          </Button>
          <Button text="Button" size="md" variant="light">
            <HiOutlineSquare2Stack />
          </Button>
        </div>
        <div className="docs__demo">
          <Heading size={"large"}>How to use</Heading>
          <SyntaxHighlighter language="jsx" style={nightOwl}>
            {codeString}
          </SyntaxHighlighter>
        </div>
        <div className="docs__main">
          <Heading>Link</Heading>
          <p className="docs__description">
            Button component can be transformed into link if used with "href"
            attribute.
          </p>
        </div>
        <div className="docs__preview">
          <Button text={"Link"} href="#" />
          <Button text={"Link"} href="#" />
          <Button text={"Link"} href="#" />
          <Button text={"Link"} href="#" />
          <Button text={"Link"} href="#" />
          <Button text={"Link"} href="#" />
          <Button text={"Link"} href="#" />
        </div>
        <div className="docs__demo">
          <Heading size={"large"}>How to use</Heading>
          <SyntaxHighlighter language="jsx" style={nightOwl}>
            {codeString2}
          </SyntaxHighlighter>
        </div>
      </div>
    </Layout>
  );
};
