import { Sidebar } from "../Sidebar/Sidebar";
import "./Layout.css";
export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__sidebar">
        <Sidebar />
      </div>
      <div className="layout__children">{children}</div>
    </div>
  );
};
