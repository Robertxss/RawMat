import * as React from "react";

const Icon = ({ size = 40, color = "#000", ...props }) => (
 <svg
  width={size}
  height={size}
  fill={color}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
 >
  <path d="M7 11h10v2H7v-2ZM4 7h16v2H4V7Zm6 8h4v2h-4v-2Z" />
 </svg>
);

export default Icon;
