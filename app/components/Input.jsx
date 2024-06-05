// src/components/CustomInput.jsx
import React from "react";

const Input = ({
  label,
  type = "text",
  placeholder,
  placeholderTail,
  value,
  onChange,
}) => {
  // Create the combined placeholder string
  const combinedPlaceholder = placeholderTail
    ? `${placeholder} ${placeholderTail}`
    : placeholder;

  return (
    <div className="mb-4 w-full">
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={combinedPlaceholder}
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default Input;
