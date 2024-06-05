// src/components/CustomCheckbox.jsx
import React from 'react';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className="mb-4 flex items-center w-full">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
      />
      {label && <label className="ml-2 text-gray-700 text-sm">{label}</label>}
    </div>
  );
};

export default Checkbox;
