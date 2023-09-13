import { useState } from "react";
import "./Avatar.css";

export const Avatar = ({ src, name, fallback, size = "md", children }) => {
  const [loading, setLoading] = useState(true);

  const avatarSize = {
    sm: 44,
    md: 66,
    lg: 88,
  };

  const imageLoadHandler = () => setLoading(false);

  return (
    <div
      className="avatar"
      style={{
        width: `${avatarSize[size]}px`,
        height: `${avatarSize[size]}px`,
      }}
    >
      <img
        style={{ display: !src || loading ? "none" : "" }}
        draggable={false}
        src={src}
        alt={name}
        onLoad={imageLoadHandler}
        height={avatarSize[size]}
      />
      {(!src || loading) && <p>{fallback}</p>}
      <div className="avatar__badge">{children}</div>
    </div>
  );
};
