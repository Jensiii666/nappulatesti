import { useEffect, useState } from "react";

const ToggleButton = ({
  text,
  icon,
  iconSide,
  size,
  onClickFnc,
  initiallsPressed,
}) => {
  const [isPressed, setIsPressed] = useState(initiallsPressed || false);
  let buttonContent = text;
  const buttonIcon = icon;
  const buttonIconSide = iconSide; // right or left
  const buttonSize = size; // small, medium, large

  let buttonSizeClass = "text-base";
  let buttonSideClass = "flex row gap-2 items-center";

  if (buttonSize === "small") {
    buttonSizeClass = "text-xs";
  }
  if (buttonSize === "large") {
    buttonSizeClass = "text-2xl";
  }

  if (buttonIcon) {
    if (buttonIconSide === "right") {
      buttonSideClass = "flex flex-row-reverse gap-2 items-center";
    }
  }

  const pressedClass = `bg-green-500 hover:bg-green-700 ${buttonSizeClass} ${buttonSideClass} text-white font-bold py-2 px-4 rounded my-2 shadow-inner flex flex-row`;
  const unpressedClass = `bg-blue-500 hover:bg-blue-700 ${buttonSizeClass} ${buttonSideClass} text-white font-bold py-2 px-4 rounded my-2 shadow-md flex flex-row`;

  return (
    <button
      className={isPressed ? pressedClass : unpressedClass}
      onClick={() => {
        setIsPressed(!isPressed);
        if (onClickFnc) {
          onClickFnc();
        }
      }}
      aria-pressed={isPressed}
    >
      <div className={buttonSideClass}>
        {buttonIcon}
        {buttonContent}
      </div>
    </button>
  );
};
export default ToggleButton;
