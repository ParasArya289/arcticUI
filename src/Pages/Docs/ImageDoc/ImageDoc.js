import { Heading } from "../../../ComponentLibrary/Heading/Heading";
import { Layout } from "../../../Components/Layout/Layout";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Image } from "../../../ComponentLibrary/Image/Image";

export const ImageDoc = () => {
  const codeString = ` 

        //Responsive image with aspect ratio and border radius

        <Image
        src="imgSrcUlr"
        alt="arctic"
        borderRadius="12px"
        aspectRatio="16/9"
        />

        //With aspect ratio and border radius

        <Image
        src="imgSrcUlr"
        alt="arctic"
        width="320px"
        borderRadius="12px"
        aspectRatio="16/9"
        />

        //With rounded set to true

        <Image
        src="ImgSrcUrl"
        alt="arctic"
        width="286px"
        borderRadius="12px"
        rounded
        />
  
  
  `;
  return (
    <Layout>
      <div className="docs__main">
        <Heading>Image</Heading>
        <p className="docs__description">
          Image component is responsive by design if not given width and height, supports aspect ratio and can be rounded.
        </p>
        <div className="docs__preview" style={{ gap: "30px" }}>
          <Image
            src="https://images.pexels.com/photos/1009136/pexels-photo-1009136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="arctic"
            borderRadius="12px"
            aspectRatio="16/9"
          />
          <Image
            src="https://images.pexels.com/photos/1009136/pexels-photo-1009136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="arctic"
            width="320px"
            borderRadius="12px"
            aspectRatio="16/9"
          />
          <Image
            src="https://images.pexels.com/photos/1009136/pexels-photo-1009136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="arctic"
            width="286px"
            borderRadius="12px"
            rounded
          />
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
