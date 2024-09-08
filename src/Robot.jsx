import React from "react";

const MoveableRobot = ({ direction = 0, className, style }) => {
  const rotationDegrees = direction * 90;

  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        ...style,
        transform: `rotate(${rotationDegrees}deg)`,
        transformOrigin: "50% 50%",
        display: "block",
      }}
    >
      <polygon
        points="50,10 80,90 20,90"
        fill="#222222"
        stroke="#D16332"
        strokeWidth="5"
      />
    </svg>
  );
};

export default MoveableRobot;
