import { Alert } from "../../../ComponentLibrary/Alert/Alert";
import { Heading } from "../../../ComponentLibrary/Heading/Heading";
import { Layout } from "../../../Components/Layout/Layout";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Avatar } from "../../../ComponentLibrary/Avatar/Avatar";
import { Badge } from "../../../ComponentLibrary/Badge/Badge";

export const BadgeDoc = () => {
  const codeString = `
  
  //Plain badge
  
  <Badge variant="info" size="sm" text="4+" />

  //With avatar

  <Avatar
  fallback="D"
  size="lg"
  name="david"
  src="imgSrcUrl"
  >
    <Badge variant="info" size="sm" text="4+" />
  </Avatar>


`;
  return (
    <Layout>
      <div className="docs__main">
        <Heading>Badge</Heading>
        <p className="docs__description">
          Badges are available with six different variants, available in size
          sm, md, lg. Can be applied direclty on top of Avatar. Can be rounded
          for small text and for large text convert in pill.
        </p>
        <div className="docs__preview">
          <Badge variant="info" size="md" text="4+" />
          <Badge variant="success" size="md" text="4+" />
          <Badge variant="danger" size="md" text="4+" />
          <Badge variant="warning" size="md" text="4+" />
          <Badge variant="dark" size="md" text="4+" />
          <Badge variant="light" size="md" text="4+" />
          <Avatar
            fallback="D"
            size="lg"
            name="david"
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          >
            <Badge variant="info" size="sm" text="4+" />
          </Avatar>
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
