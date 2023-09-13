import { useRef, useState } from "react";
import { ComponentCard } from "../ComponentCard/ComponentCard";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import "./Carousel.css";
import { Alert } from "../../ComponentLibrary/Alert/Alert";

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const components = [
    <Alert variant="info" text="Opps! something went wrong" />,
    "two",
    "thhree",
    "four",
    "five",
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
