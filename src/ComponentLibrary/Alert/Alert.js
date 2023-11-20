import "./Alert.css";
import styles from "../../global.module.css";
import {
  AiOutlineInfoCircle,
  AiOutlineCheckCircle,
  AiOutlineWarning,
} from "react-icons/ai";
import { RxCross2, RxCrossCircled } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";

export const Alert = ({ variant, text, dismissable=true }) => {
  const [dismiss, setDismiss] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const alertRef = useRef(null);
  const alertIcons = {
    info: <AiOutlineInfoCircle />,
    success: <AiOutlineCheckCircle />,
    warning: <AiOutlineWarning />,
    danger: <RxCrossCircled />,
  };
  useEffect(() => {
    if (dismissable) {
      alertRef?.current?.setAttribute("data-dismiss", dismiss);
    }
    const timeoutId = setTimeout(() => {
      if (dismiss === true) {
        setAnimateOut(true);
      }
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [dismiss]);
  return (
    <>
      {!animateOut && (
        <div ref={alertRef} className={`alert ${styles[variant]}`}>
          <span>{alertIcons[variant]}</span>
          <p>{text}</p>
          {dismissable && <RxCross2 className="alert__dismiss" onClick={() => setDismiss(true)} />}
        </div>
      )}
    </>
  );
};
