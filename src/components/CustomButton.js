import React, { useState } from "react";

const CustomButton = ({
  text,
  onclick,
  variant,
  disabled = false,
  margin = "5px",
  padding = "10px 20px",
  border = "solid 2px #507687",
  hoverBackgroundColor = "#0056b3",
  hoverColor = "#fff",
  customStyles,
//   fontSize
}) => {
  let buttonStyle = {
    margin,
    padding,
    border,
    opacity: disabled ? 0.5 : 1,
    ...customStyles,
  };

//   const buttonSizes = {
//     small: "text-sm",
//     mid: "text-md",
//   };

  switch (variant) {
    case "cancel":
      buttonStyle = {
        ...buttonStyle,
        backgroundColor: "#B8001F",
        color: "#FCFAEE",
        fontSize: "16px",
        borderRadius: "5px",
        opacity: disabled ? 0.5 : 0.7,
      };

      break;
    case "danger":
      buttonStyle = {
        ...buttonStyle,
        backgroundColor: "#B8001F",
        color: "#FCFAEE",
        fontSize: "32px",
        borderRadius: "10px",
        opacity: disabled ? 0.7 : 1,
      };

      break;
    case "success":
      buttonStyle = {
        ...buttonStyle,
        backgroundColor: "#6256CA",
        color: "#FCFAEE",
        fontSize: "48px",
        borderRadius: "15px",
        opacity: disabled ? 0.7 : 1,
      };

      break;
    default:
      buttonStyle = {
        ...buttonStyle,
        backgroundColor: "#FF885B",
        color: "#FFE5CF",
        fontSize: "12px",
      };

      break;
  }

  const hoverStyle = {
    backgroundColor: hoverBackgroundColor,
    color: hoverColor,
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={isHovered ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
      onClick={onclick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // className={buttonSizes[fontSize]}
    >
      {text}
    </button>
  );
};

export default CustomButton;
