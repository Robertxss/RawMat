"use client";
import React, { useState, useEffect } from "react";
import MaterialItem from "./MaterialItem";
import BalastImage from "../images/Balast.jpg";
import BetonImage from "../images/Beton.png";
import CaramidaImage from "../images/Caramida.webp";
import LemnImage from "../images/Lemn.png";
import NisipImage from "../images/Nisip.png";
import ScanduraImage from "../images/Scandura.jpg";
import Modal from "./Modal";
import LemnContent from "./ProductContent/LemnContent";
import BetonContent from "./ProductContent/BetonContent";
import CaramidaContent from "./ProductContent/CaramidaContent";
import NisipContent from "./ProductContent/NisipContent";
import ScanduraContent from "./ProductContent/ScanduraContent";
import BalastContent from "./ProductContent/BalastContent";

const materials = [
  { name: "Balast", image: BalastImage },
  { name: "Beton", image: BetonImage },
  { name: "Caramida", image: CaramidaImage },
  { name: "Lemn", image: LemnImage },
  { name: "Nisip", image: NisipImage },
  { name: "Scandura", image: ScanduraImage },
];

const MaterialSelector = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div id="material" className="material-selector">
      <h2 className="text-2xl sm:text-4xl font-bold mb-16 text-center">
        Selectează materialul dorit
      </h2>
      <div className="material-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {materials.map((material) => (
          <MaterialItem
            onClick={() =>
              openModal(
                <div>
                  <h3 className="text-2xl font-bold mb-4">{material.name}</h3>
                  {material.name === "Lemn" && <LemnContent />}
                  {material.name === "Beton" && <BetonContent />}
                  {material.name === "Caramida" && <CaramidaContent />}
                  {material.name === "Nisip" && <NisipContent />}
                  {material.name === "Scandura" && <ScanduraContent />}
                  {material.name === "Balast" && <BalastContent />}

                  <div className="w-full text-center mt-10">
                    <a href="" className="button-primary font-medium mx-auto">
                      Mergi la plată
                    </a>
                  </div>
                </div>
              )
            }
            key={material.name}
            MaterialName={material.name}
            MaterialImage={material.image}
          />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalContent}
      </Modal>
    </div>
  );
};

export default MaterialSelector;
