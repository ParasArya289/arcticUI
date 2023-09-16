import { Alert } from "../../../ComponentLibrary/Alert/Alert";
import { Heading } from "../../../ComponentLibrary/Heading/Heading";
import { Layout } from "../../../Components/Layout/Layout";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Avatar } from "../../../ComponentLibrary/Avatar/Avatar";

export const AvatarDoc = () => {
  const codeString = `<Avatar
  fallback="D"
  size="lg"
  name="david"
  src="imageSrcURl"
/>`;
  return (
    <Layout>
      <div className="docs__main">
        <Heading>Avatar</Heading>
        <p className="docs__description">
          Avatars with fallback are available for size sm, md, lg.
        </p>
        <div className="docs__preview">
          <Avatar
            fallback="D"
            size="sm"
            name="david"
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            fallback="D"
            size="md"
            name="david"
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar fallback="PA" size="lg" name="david" />
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
