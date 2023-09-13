import "./Alert.css";
import styles from "../../global.module.css";
import {
  AiOutlineInfoCircle,
  AiOutlineCheckCircle,
  AiOutlineWarning,
} from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";

export const Alert = ({ variant, text }) => {
  const alertIcons = {
    info: <AiOutlineInfoCircle />,
    success: <AiOutlineCheckCircle />,
    warning: <AiOutlineWarning />,
    danger: <RxCrossCircled />,
  };
  return (
    <div className={`alert ${styles[variant]}`}>
      <span>{alertIcons[variant]}</span>
      <p>{text}</p>
    </div>
  );
};
