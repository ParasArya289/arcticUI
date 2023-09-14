import { useRef, useState } from "react";
import { ComponentCard } from "../ComponentCard/ComponentCard";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import "./Carousel.css";
import { Alert } from "../../ComponentLibrary/Alert/Alert";
import { Avatar } from "../../ComponentLibrary/Avatar/Avatar";
import { Badge } from "../../ComponentLibrary/Badge/Badge";
import { Button } from "../../ComponentLibrary/Button/Button";
import { FloatingActionButton } from "../../ComponentLibrary/FloatingActionButton/FloatingActionButton";
import { FiFolderPlus } from "react-icons/fi";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { Card } from "../../ComponentLibrary/Card/Card";
import { Image } from "../../ComponentLibrary/Image/Image";
import { Heading } from "../../ComponentLibrary/Heading/Heading";
import { Text } from "../../ComponentLibrary/Text/Text";
import { TextOverlay } from "../../ComponentLibrary/TextOverlay/TextOverlay";
import { HorizontalCard } from "../../ComponentLibrary/HorizontalCard/HorizontalCard";

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const components = [
    <Alert variant="info" text="Oops something went wrong" />,
    <Avatar
      fallback="D"
      size="lg"
      name="david"
      src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    />,
    <Avatar
      fallback="D"
      size="lg"
      name="david"
      src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    >
      <Badge variant="info" size="sm" text="4+" />
    </Avatar>,
    <Button text="Button" size="md" variant="info">
      <HiOutlineSquare2Stack />
    </Button>,
    <FloatingActionButton
      // text="Add"
      top="50%"
      left="50%"
      size="lg"
      variant="info"
      translateX="-50%"
      translateY="-50%"
    >
      <FiFolderPlus />
    </FloatingActionButton>,
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
    </Card>,
    <TextOverlay src="https://images.pexels.com/photos/1647220/pexels-photo-1647220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
      <Heading size="large" textAlign="left">
        Arctic UI
      </Heading>
      <Text size="medium" textAlign="left">
        Core building blocks for your design system
      </Text>
      <Button text="Check out" size="md" variant="info" />
    </TextOverlay>,
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
    </HorizontalCard>,
  ];

  const handleNext = () => {
    if (currentIndex < components.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const itemWidth = carouselRef.current
    ? carouselRef.current.clientWidth / components.length
    : 0;

  const transformValue = `translateX(-${400 * currentIndex}px)`;
  return (
    <div className="carousel">
      <button onClick={handlePrevious}>
        <BsChevronLeft />
      </button>
      <div
        className="list"
        ref={carouselRef}
        style={{ transform: transformValue }}
      >
        {components.map((component) => (
          <ComponentCard component={component} />
        ))}
      </div>
      <button onClick={handleNext}>
        <BsChevronRight />
      </button>
    </div>
  );
};
