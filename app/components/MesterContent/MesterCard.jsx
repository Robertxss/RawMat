"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Close from "../../images/close.jsx";
import ImageGrid from "../SlideshowGallery.jsx"; // Ensure the correct path
import GaleryImage from "../../images/galery1.jpg";
import GaleryImage2 from "../../images/galery2.jpg";
import GaleryImage3 from "../../images/galery3.jpg";
import GaleryImage4 from "../../images/galery-4.jpg";

const MesterCard = ({ image, skills, name, oras }) => {
  const [isOpen, setIsOpen] = useState(false);

  const displaySkills =
    skills.length > 3 ? skills.slice(0, 3).concat(["+..."]) : skills;

  const handleCardClick = () => {
    setIsOpen(true);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  const imagesGalery = [
    { src: GaleryImage },
    { src: GaleryImage2 },
    { src: GaleryImage3 },
    { src: GaleryImage4 },
  ];

  return (
    <>
       <div
        className="mester relative h-[300px] bg-cover bg-center shadow-md flex flex-col cursor-pointer w-full p-2"
        style={{ backgroundImage: `url(${image.src})` }}
        onClick={handleCardClick}
      >
        <ul className="text-white p-4 text-lg text-right">
          {displaySkills.map((skill, index) => (
            <li key={index} className="">
              {skill}
            </li>
          ))}
        </ul>
        <div className="flex w-full gap-2 items-center mt-auto justify-between p-4 text-white mester-name">
          <p>{name}</p>
          <p>{oras}</p>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-white z-50 flex justify-between py-8 px-2 sm:px-10 gap-[30px] overflow-auto lg:flex-row flex-col-reverse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex flex-col items-start w-full lg:pt-[55px]">
                <ImageGrid images={imagesGalery} />
                <div className="description text-black mt-10">
                  <p className="font-medium text-xl mt-6 mb-3">
                    Auto descriere
                  </p>
                  <p className="mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio quae sint, soluta, voluptatem eos at minima architecto
                    similique quis ut incidunt fuga, necessitatibus error
                    voluptate officia? Eum quisquam veniam illo!
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row-reverse lg:flex-col gap-4 lg:gap-0">
                <div className="flex flex-col">
                  <button
                    className="text-gray-700 mb-4 button-close-card"
                    onClick={handleCloseClick}
                  >
                    <Close />
                  </button>
                  <motion.div
                    className="relative h-[300px] w-full sm:w-[300px] bg-cover bg-center shadow-md rounded"
                    style={{ backgroundImage: `url(${image.src})` }}
                    initial={{  height: "300px" }}
                    animate={{  height: "300px" }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex w-full justify-between p-4 text-gray-800 sm:mt-[45px] lg:mt-0 font-medium flex-col">
                    <p className="text-2xl">{name}</p>
                    <p className="text-md">{oras}</p>
                  </div>
                  <ul className="text-gray-800 p-4 text-md font-medium">
                    {skills.map((skill, index) => (
                      <li key={index} className="">
                        {skill}
                      </li>
                    ))}
                  </ul>
                  <p className="font-medium text-md px-4">De la 100 lei / ora</p>
                  <a className="button-primary font-medium w-full text-center mt-auto px-4">
                    Contactează
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MesterCard;
