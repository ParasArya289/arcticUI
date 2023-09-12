import { BsChevronDoubleDown } from "react-icons/bs";
import "./Home.css";
export const Home = () => {
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
          <button>Preview</button>
        </div>
        <button>
          <BsChevronDoubleDown />
        </button>
      </section>
      <section className="page2"></section>
    </main>
  );
};
