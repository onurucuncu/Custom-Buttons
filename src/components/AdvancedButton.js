import React from "react";
import PropTypes from "prop-types";

// AdvancedButton Component
const AdvancedButton = ({
  text,
  onClick,
  type = "button",
  disabled = false,
  backgroundColor = "#007bff",
  color = "#fff",
  fontSize = "16px",
  margin = "5px",
  padding = "10px 20px",
  borderRadius = "5px",
  border = "none",
  hoverBackgroundColor = "#0056b3",
  hoverColor = "#fff",
  customStyles = {},
}) => {
  const buttonStyle = {
    backgroundColor,
    color,
    fontSize,
    margin,
    padding,
    borderRadius,
    border,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.7 : 1,
    ...customStyles, // Merge with custom styles
  };

  const hoverStyle = {
    backgroundColor: hoverBackgroundColor,
    color: hoverColor,
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      type={type}
      style={isHovered ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </button>
  );
};

// Define PropTypes for validation
AdvancedButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  border: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
  hoverColor: PropTypes.string,
  customStyles: PropTypes.object,
};

export default AdvancedButton;
