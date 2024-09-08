import React, { useState } from "react";
import MoveableRobot from "./Robot";
import gridContents from "./Array";

function AngelsRobot() {
  const [robotPosition, setRobotPosition] = useState(12);
  const [robotDirection, setRobotDirection] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const directionVectors = {
    0: -5,
    1: 1,
    2: 5,
    3: -1,
  };

  const rotateRobot = (direction) => {
    setRobotDirection((prevDirection) => {
      const newDirection =
        direction === "Left"
          ? (prevDirection - 1 + 4) % 4
          : (prevDirection + 1) % 4;
      console.log("New Direction: ", newDirection);
      return newDirection;
    });
  };

  const moveRobot = () => {
    const newPosition = robotPosition + directionVectors[robotDirection];

    const currentRow = Math.floor(robotPosition / 5);
    const currentCol = robotPosition % 5;

    const newRow = Math.floor(newPosition / 5);
    const newCol = newPosition % 5;

    const isWithinHorizontalBounds = newCol >= 0 && newCol < 5;
    const isWithinVerticalBounds = newRow >= 0 && newRow < 5;

    if (isWithinHorizontalBounds && isWithinVerticalBounds) {
      if (directionVectors[robotDirection] === 1 && newCol > currentCol) {
        setRobotPosition(newPosition);
      } else if (
        directionVectors[robotDirection] === -1 &&
        newCol < currentCol
      ) {
        setRobotPosition(newPosition);
      } else if (
        directionVectors[robotDirection] === 5 &&
        newRow > currentRow
      ) {
        setRobotPosition(newPosition);
      } else if (
        directionVectors[robotDirection] === -5 &&
        newRow < currentRow
      ) {
        setRobotPosition(newPosition);
      }
    }
  };

  return (
    <div
      className={`w-full h-screen flex flex-col items-center gap-10 py-2 ${
        isDarkTheme ? "bg-[#222222] duration-500" : "bg-[#EEEAE6] duration-500"
      }`}
    >
      <div className="flex justify-between w-full px-5">
        <p
          className={`text-2xl ${
            isDarkTheme ? "text-[#EEEAE6]" : "text-[#222222]"
          } text-[#222222]`}
        >
          Angel's Robot Simulation
        </p>
        <button
          onClick={() => setIsDarkTheme((prevTheme) => !prevTheme)}
          className={`hover:text-[#D16332] duration-300 ${
            isDarkTheme ? "text-[#EEEAE6]" : "text-[#222222]"
          }`}
        >
          {isDarkTheme ? "Light Theme" : "Dark Theme"}
        </button>
      </div>
      <div
        className={`w-[420px] h-[420px] ${
          isDarkTheme ? "bg-[#EEEAE6]" : "bg-[#D16332]"
        } grid grid-cols-5 gap-2 p-2 relative `}
      >
        {gridContents.map((x, index) => (
          <div
            key={x}
            className={`${
              isDarkTheme
                ? "bg-[#D16332] text-[#EEEAE6]"
                : "bg-[#EEEAE6] text-[#222222]"
            } w-full h-full relative flex items-center justify-center ${
              index === robotPosition
                ? isDarkTheme
                  ? "bg-[#1F273E]"
                  : "bg-[#4C77B0]"
                : ""
            }`}
          >
            {x}
            {index === robotPosition && (
              <MoveableRobot
                direction={robotDirection}
                className="absolute z-10"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            )}
          </div>
        ))}
      </div>
      <div
        className={`${
          isDarkTheme ? "bg-[#EEEAE6]" : "bg-[#222222]"
        } w-fit h-fit bg-[#222222] items-center justify-center flex flex-col gap-2 py-2 px-2 rounded-lg`}
      >
        <p className={`${isDarkTheme ? "text-[#222222]" : "text-[#EEEAE6]"}`}>
          Controls
        </p>
        <div className="flex flex-row gap-2">
          <div
            className={`flex flex-col gap-2 items-center justify-center p-2 rounded-lg ${
              isDarkTheme ? "bg-[#222222]" : "bg-[#EEEAE6]"
            }`}
          >
            <p
              className={`${
                isDarkTheme ? "text-[#EEEAE6]" : "text-[#222222]"
              } text-xs`}
            >
              Rotation
            </p>
            <button
              onClick={() => rotateRobot("Left")}
              className={`w-20 py-1 ${
                isDarkTheme
                  ? "bg-[#7DBFC8] hover:bg-[#AEC3C6]"
                  : "bg-[#AEC3C6] hover:bg-[#7DBFC8"
              } rounded-lg duration-300`}
            >
              Left
            </button>
            <button
              onClick={() => rotateRobot("Right")}
              className={`w-20 py-1 ${
                isDarkTheme
                  ? "bg-[#7DBFC8] hover:bg-[#AEC3C6]"
                  : "bg-[#AEC3C6] hover:bg-[#7DBFC8"
              } rounded-lg duration-300`}
            >
              Right
            </button>
          </div>
          <div
            className={`${
              isDarkTheme ? "bg-[#222222]" : "bg-[#EEEAE6]"
            }  p-2 rounded-lg items-center flex flex-col gap-2`}
          >
            <p
              className={`${
                isDarkTheme ? "text-[#EEEAE6]" : "text-[#222222]"
              } text-xs`}
            >
              Moving
            </p>
            <button
              onClick={moveRobot}
              className={`w-20 py-1 ${
                isDarkTheme
                  ? "bg-[#7DBFC8] hover:bg-[#AEC3C6]"
                  : "bg-[#AEC3C6] hover:bg-[#7DBFC8"
              } rounded-lg duration-300`}
            >
              Move Forward
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AngelsRobot;
