import React from "react";
import classNames from "classnames"; // Optional, for conditional class handling

const SuperBtn = ({
  text = "Button",
  onclick,
  variant = "primary", // default variant
  size = "normal", // button size (small, normal, larger)
  disabled = false,
}) => {
  // Define variant styles with Tailwind CSS classes
  const variantClasses = {
    success: "bg-green-500 border-green-900 text-white hover:bg-green-700",
    danger: "bg-red-500 border-red-900 text-white hover:bg-red-700",
    primary: "bg-blue-500 border-blue-900 text-white hover:bg-blue-700",
  };

  // Define size styles with Tailwind CSS classes
  const sizeClasses = {
    small: "text-sm py-1 px-3", // smaller padding and text size
    normal: "text-lg py-2 px-4", // medium padding and text size
    larger: "text-3xl py-3 px-6", // larger padding and text size
  };

  // Combine classes using classNames (optional) or just template strings
  const buttonClass = classNames(
    "rounded-md m-5 border transition duration-300 ease-in-out", // common classes
    variantClasses[variant], // apply variant classes
    sizeClasses[size], // apply size classes
    {
      "opacity-50 cursor-not-allowed": disabled, // disabled state
    }
  );

  return (
    <button
      onClick={onclick}
      disabled={disabled}
      className={buttonClass}
    >
      {text}
    </button>
  );
};

export default SuperBtn;
