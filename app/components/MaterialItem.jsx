import React from 'react';

const MaterialItem = ({ MaterialName, MaterialImage, onClick }) => {
  return (
    <div className="text-center cursor-pointer material-item" onClick={onClick}>
      <div
        className="material-image h-[200px] w-[200px] bg-cover bg-center"
        style={{ backgroundImage: `url(${MaterialImage.src})` }}
      />
      <p className="font-medium mt-2 text-lg">{MaterialName}</p>
    </div>
  );
};

export default MaterialItem;
