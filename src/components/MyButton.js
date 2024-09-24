import React, { useState } from "react";

const MyButton = ({
  text,
  onclick,
  variant,
  fontSize = "16px",
  disabled = false,
  margin = "5px",
  padding = "10px 20px",
  border = "2px solid transparent",
  borderRadius= "5px",
  transition= "background-color 0.3s ease"
}) => {
   const [isHovered, setIsHovered] = useState(false)

   const variantStyles  = {
      // success: "bg-green-500 border-green-900 text-slate-300",
      // danger: "bg-red-500 border-red-900 text-slate-300",
      // primary: "bg-blue-500 border-blue-900 text-slate-300",
      success: {
         backgroundColor: "green",
         borderColor: "darkgreen",
         color: "#ffffff",
       },
       danger: {
         backgroundColor: "red",
         borderColor: "darkred",
         color: "#ffffff",
       },
       primary: {
         backgroundColor: "blue",
         borderColor: "darkblue",
         color: "#ffffff",
       },
   }
   const buttonSizes = {
      // small: "text-sm",
      // normal: "text-lg",
      // larger: "text-3xl"
      small: { fontSize : "16px" },
      normal: { fontSize : "24px" },
      larger: { fontSize : "32px" },
   }

   const buttonStyle = {
      margin,
      padding,
      borderRadius,
      border,
      opacity: disabled ? 0.7 : 1,
      transition,
      fontSize,
      ...variantStyles[variant] || {},
      ...buttonSizes[fontSize] || {},
    ...(isHovered ? { opacity: 0.5 } : {}),
   }

  return (
   <button
      style={buttonStyle}
      onClick={onclick}
      disabled= {disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
  >
   {text}
   </button>
  )
};

export default MyButton;
