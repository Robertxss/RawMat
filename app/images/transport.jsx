import * as React from "react";

const Icon = ({
 size = 40,
 strokeWidth = 1.5,
 color = "#000",
 ...props
}) => (
 <svg
  width={size}
  height={size}
  fill="none"
  stroke={color}
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth={strokeWidth}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
 >
  <path d="M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  <path d="M17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  <path d="M13 6h5l3 5v6h-2" />
  <path d="M5 17H3V6a1 1 0 0 1 1-1h9v12" />
  <path d="M9 17h6" />
  <path d="M21 11h-8" />
 </svg>
);

export default Icon;
