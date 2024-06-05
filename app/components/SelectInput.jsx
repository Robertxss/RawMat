// src/components/SelectInput.jsx
import React from "react";

const SelectInput = ({
  label,
  label2,
  options,
  value,
  onChange,
  defaultValue,
}) => {
  return (
    <div className="mb-4 w-full">
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        {defaultValue && (
          <option value="" disabled>
            {defaultValue}
          </option>
        )}
        {options.map((option, index) => (
          <option
            key={index}
            value={option.value}
            className="flex items-center justify-between w-full gap-5"
          >
            <span> {option.label}</span>
            <span className="ml-auto"> {option.label2 && option.label2}</span>
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
