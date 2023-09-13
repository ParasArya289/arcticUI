import { useRef } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { BiSolidChevronUpCircle } from "react-icons/bi";
import "./Home.css";
import { Carousel } from "../../Components/Carousel/Carousel";
export const Home = () => {
  const page2ref = useRef(null);

  const scrollToSecondPage = () => {
    page2ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <section className="page1">
        <h1>Arctic UI</h1>
        <p>
          Core building blocks
          <br /> for your design system
        </p>
        <p>
          Unstyled, accessible, open source React primitives
          <br /> for high-quality web apps and design systems.
        </p>
        <div>
          <button>Get started</button>
          <button onClick={scrollToSecondPage}>Preview</button>
        </div>
        <button onClick={scrollToSecondPage}>
          <BsChevronDoubleDown />
        </button>
      </section>
      <section ref={page2ref} className="page2">
        <Carousel />
      </section>
      <button onClick={scrollToTop}>
        <BiSolidChevronUpCircle />
      </button>
    </main>
  );
};
