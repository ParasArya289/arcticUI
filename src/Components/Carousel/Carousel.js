import { useEffect, useRef, useState } from "react";
import { ComponentCard } from "../ComponentCard/ComponentCard";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import "./Carousel.css";
import { components } from "../../Utils";

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const lastComponentRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const handleNext = () => {
    if (currentIndex < components.length - 1 && !isVisible) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (lastComponentRef.current) {
      observer.observe(lastComponentRef.current);
    }
    return () => {
      if (lastComponentRef.current) {
        observer.unobserve(lastComponentRef.current);
      }
    };
  }, [setIsVisible]);

  const transformValue = `translateX(-${410 * currentIndex}px)`;
  
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
        {components.map((component, i) => (
          <ComponentCard
            lastRef={i === components.length - 1 ? lastComponentRef : null}
            component={component}
          />
        ))}
      </div>
      <button onClick={handleNext}>
        <BsChevronRight />
      </button>
    </div>
  );
};
