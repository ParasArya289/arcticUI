import { Heading } from "../../../ComponentLibrary/Heading/Heading";
import { Layout } from "../../../Components/Layout/Layout";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Card } from "../../../ComponentLibrary/Card/Card";
import { Image } from "../../../ComponentLibrary/Image/Image";
import { Text } from "../../../ComponentLibrary/Text/Text";
import { Button } from "../../../ComponentLibrary/Button/Button";

export const CardDoc = () => {
  const codeString = ` 
  
  
  <Card variant="dark">
    <Image
        src="imgSrcUrl"
        fallback="imgSrcUrl"
        alt="arctic"
        borderRadius={"4px 4px 0 0 "}
        aspectRatio={"16/9"}
    />

    <Heading size="large" textAlign="left">
        Arctic UI
    </Heading>

    <Text size="medium" textAlign="left">
        Core building blocks for your design system
    </Text>

    <Button text="Check out" size="md" variant="info" />
  </Card>
  
  
  `;
  const codeString2 = ` 
  
  
  <Card variant="dark" dismissable aniamteOut>
    <Image
        src="imgSrcUrl"
        fallback="imgSrcUrl"
        alt="arctic"
        borderRadius={"4px 4px 0 0 "}
        aspectRatio={"16/9"}
    />

    <Heading size="large" textAlign="left">
        Arctic UI
    </Heading>

    <Text size="medium" textAlign="left">
        Core building blocks for your design system
    </Text>

    <Button text="Check out" size="md" variant="info" />
  </Card>
  
  
  `;
  return (
    <Layout>
      <div className="docs__main">
        <Heading>Card</Heading>
        <p className="docs__description">
          Cards are available with six different variants. Can be used
          with/without Image, Text, Heading, Button, Badge etc components
          available on Arctic UI.
        </p>
        <div className="docs__preview" style={{ gap: "30px" }}>
          <Card variant="info">
            <Image
              src={
                "https://images.pexels.com/photos/1647220/pexels-photo-1647220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              fallback={
                "https://zhulian.com/wp-content/uploads/2023/03/fallback-image.webp"
              }
              alt="arctic"
              borderRadius={"4px 4px 0 0 "}
              aspectRatio={"16/9"}
            />
            <Heading size="large" textAlign="left">
              Arctic UI
            </Heading>
            <Text size="medium" textAlign="left">
              Core building blocks for your design system
            </Text>
            <Button text="Check out" size="md" variant="dark" />
          </Card>

          <Card variant="success">
            <Image
              src={
                "https://images.pexels.com/photos/1647220/pexels-photo-1647220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              fallback={
                "https://zhulian.com/wp-content/uploads/2023/03/fallback-image.webp"
              }
              alt="arctic"
              borderRadius={"4px 4px 0 0 "}
              aspectRatio={"16/9"}
            />
            <Heading size="large" textAlign="left">
              Arctic UI
            </Heading>
            <Text size="medium" textAlign="left">
              Core building blocks for your design system
            </Text>
            <Button text="Check out" size="md" variant="warning" />
          </Card>

          <Card variant="warning">
            <Image
              src={
                "https://images.pexels.com/photos/1647220/pexels-photo-1647220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              fallback={
                "https://zhulian.com/wp-content/uploads/2023/03/fallback-image.webp"
              }
              alt="arctic"
              borderRadius={"4px 4px 0 0 "}
              aspectRatio={"16/9"}
            />
            <Heading size="large" textAlign="left">
              Arctic UI
            </Heading>
            <Text size="medium" textAlign="left">
              Core building blocks for your design system
            </Text>
            <Button text="Check out" size="md" variant="success" />
          </Card>

          <Card variant="danger">
            <Image
              src={
                "https://images.pexels.com/photos/1647220/pexels-photo-1647220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              fallback={
                "https://zhulian.com/wp-content/uploads/2023/03/fallback-image.webp"
              }
              alt="arctic"
              borderRadius={"4px 4px 0 0 "}
              aspectRatio={"16/9"}
            />
            <Heading size="large" textAlign="left">
              Arctic UI
            </Heading>
            <Text size="medium" textAlign="left">
              Core building blocks for your design system
            </Text>
            <Button text="Check out" size="md" variant="light" />
          </Card>

          <Card variant="light">
            <Image
              src={
                "https://images.pexels.com/photos/1647220/pexels-photo-1647220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              fallback={
                "https://zhulian.com/wp-content/uploads/2023/03/fallback-image.webp"
              }
              alt="arctic"
              borderRadius={"4px 4px 0 0 "}
              aspectRatio={"16/9"}
            />
            <Heading size="large" textAlign="left">
              Arctic UI
            </Heading>
            <Text size="medium" textAlign="left">
              Core building blocks for your design system
            </Text>
            <Button text="Check out" size="md" variant="danger" />
          </Card>

          <Card variant="dark">
            <Image
              src={
                "https://images.pexels.com/photos/1647220/pexels-photo-1647220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              fallback={
                "https://zhulian.com/wp-content/uploads/2023/03/fallback-image.webp"
              }
              alt="arctic"
              borderRadius={"4px 4px 0 0 "}
              aspectRatio={"16/9"}
            />
            <Heading size="large" textAlign="left">
              Arctic UI
            </Heading>
            <Text size="medium" textAlign="left">
              Core building blocks for your design system
            </Text>
            <Button text="Check out" size="md" variant="info" />
          </Card>
        </div>
        <div className="docs__demo">
          <Heading size={"large"}>How to use</Heading>
          <SyntaxHighlighter language="jsx" style={nightOwl}>
            {codeString}
          </SyntaxHighlighter>
        </div>
        <Heading size="large">Card with dismiss</Heading>
        <p className="docs__description">
          By setting "dismissable" prop to true card will become
          dismissable. Setting "animateOut" prop to true will make card to animate out on dismiss.
        </p>

        <div className="docs__preview" style={{ gap: "30px" }}>
          <Card dismissable animateOut variant="info">
            <Image
              src={
                "https://images.pexels.com/photos/1647220/pexels-photo-1647220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              fallback={
                "https://zhulian.com/wp-content/uploads/2023/03/fallback-image.webp"
              }
              alt="arctic"
              borderRadius={"4px 4px 0 0 "}
              aspectRatio={"16/9"}
            />
            <Heading size="large" textAlign="left">
              Arctic UI
            </Heading>
            <Text size="medium" textAlign="left">
              Core building blocks for your design system
            </Text>
            <Button text="Check out" size="md" variant="dark" />
          </Card>

          <Card dismissable animateOut variant="success">
            <Image
              src={
                "https://images.pexels.com/photos/1647220/pexels-photo-1647220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              fallback={
                "https://zhulian.com/wp-content/uploads/2023/03/fallback-image.webp"
              }
              alt="arctic"
              borderRadius={"4px 4px 0 0 "}
              aspectRatio={"16/9"}
            />
            <Heading size="large" textAlign="left">
              Arctic UI
            </Heading>
            <Text size="medium" textAlign="left">
              Core building blocks for your design system
            </Text>
            <Button text="Check out" size="md" variant="warning" />
          </Card>

          <Card dismissable animateOut variant="warning">
            <Image
              src={
                "https://images.pexels.com/photos/1647220/pexels-photo-1647220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              fallback={
                "https://zhulian.com/wp-content/uploads/2023/03/fallback-image.webp"
              }
              alt="arctic"
              borderRadius={"4px 4px 0 0 "}
              aspectRatio={"16/9"}
            />
            <Heading size="large" textAlign="left">
              Arctic UI
            </Heading>
            <Text size="medium" textAlign="left">
              Core building blocks for your design system
            </Text>
            <Button text="Check out" size="md" variant="success" />
          </Card>

          <Card dismissable animateOut variant="danger">
            <Image
              src={
                "https://images.pexels.com/photos/1647220/pexels-photo-1647220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              fallback={
                "https://zhulian.com/wp-content/uploads/2023/03/fallback-image.webp"
              }
              alt="arctic"
              borderRadius={"4px 4px 0 0 "}
              aspectRatio={"16/9"}
            />
            <Heading size="large" textAlign="left">
              Arctic UI
            </Heading>
            <Text size="medium" textAlign="left">
              Core building blocks for your design system
            </Text>
            <Button text="Check out" size="md" variant="light" />
          </Card>

          <Card dismissable animateOut variant="light">
            <Image
              src={
                "https://images.pexels.com/photos/1647220/pexels-photo-1647220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              fallback={
                "https://zhulian.com/wp-content/uploads/2023/03/fallback-image.webp"
              }
              alt="arctic"
              borderRadius={"4px 4px 0 0 "}
              aspectRatio={"16/9"}
            />
            <Heading size="large" textAlign="left">
              Arctic UI
            </Heading>
            <Text size="medium" textAlign="left">
              Core building blocks for your design system
            </Text>
            <Button text="Check out" size="md" variant="danger" />
          </Card>

          <Card dismissable animateOut variant="dark">
            <Image
              src={
                "https://images.pexels.com/photos/1647220/pexels-photo-1647220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              fallback={
                "https://zhulian.com/wp-content/uploads/2023/03/fallback-image.webp"
              }
              alt="arctic"
              borderRadius={"4px 4px 0 0 "}
              aspectRatio={"16/9"}
            />
            <Heading size="large" textAlign="left">
              Arctic UI
            </Heading>
            <Text size="medium" textAlign="left">
              Core building blocks for your design system
            </Text>
            <Button text="Check out" size="md" variant="info" />
          </Card>
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
