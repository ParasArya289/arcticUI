import "./Card.css";
import styles from "../../global.module.css";
import { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";

export const Card = ({
  variant = "dark",
  className,
  style,
  children,
  animateOut:animate,
  dismissable,
}) => {
  const [dismiss, setDismiss] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (dismissable) {
      cardRef?.current?.setAttribute("data-dismiss", dismiss);
    }
      const timeoutId = setTimeout(() => {
        if (dismiss === true) {
          setAnimateOut(true);
        }
      }, animate?500:0);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [dismiss]);
  console.log(animate)

  return (
    <>
      {!animateOut && (
        <div
          ref={cardRef}
          className={`card ${styles[variant]} ${className}`}
          style={style}
        >
          {children}
          {dismissable && <RxCross2 onClick={() => setDismiss(true)} />}
        </div>
      )}
    </>
  );
};
