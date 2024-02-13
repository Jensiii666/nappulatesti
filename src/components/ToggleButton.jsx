import { useState } from "react";

const ToggleButton = ({ text, icon, iconSide, size, onClickFnc }) => {
  const [isPressed, setIsPressed] = useState(false);
  let buttonContent = text;
  const buttonIcon = icon;
  const buttonIconSide = iconSide; // right or left
  const buttonSize = size; // small, medium, large

  let buttonSizeClass = "text-base";

  if (buttonSize === "small") {
    buttonSizeClass = "text-xs";
  }
  if (buttonSize === "large") {
    buttonSizeClass = "text-2xl";
  }

  const pressedClass = `bg-green-500 hover:bg-green-700 ${buttonSizeClass} text-white font-bold py-2 px-4 rounded my-2 shadow-inner flex flex-row`;
  const unpressedClass = `bg-blue-500 hover:bg-blue-700 ${buttonSizeClass} text-white font-bold py-2 px-4 rounded my-2 shadow-md flex flex-row`;

  if (buttonIcon) {
    if (buttonIconSide === "right") {
      buttonContent = (
        <>
          {buttonContent}
          <div className="my-auto ml-2">{buttonIcon}</div>
        </>
      );
    } else {
      buttonContent = (
        <>
          <div className="my-auto mr-2">{buttonIcon}</div>
          {buttonContent}
        </>
      );
    }
  }

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
      {buttonContent}
    </button>
  );
};
export default ToggleButton;
