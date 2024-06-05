"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const SlideshowGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full mx-auto rounded">
      <div className="relative overflow-hidden h-[70vh] rounded">
        <AnimatePresence initial={false} onExitComplete={() => setIsAnimating(false)}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, position: 'absolute', width: '100%', height: '100%' }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full rounded"
          >
            <Image
              src={images[currentIndex].src}
              alt={`Slide ${currentIndex + 1}`}
              layout="fill"
              objectFit="cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div
          className="absolute top-1/2 transform -translate-y-1/2 left-4 text-white cursor-pointer"
          onClick={handlePrevClick}
        >
          <FaArrowLeft size={30} />
        </div>
        <div
          className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white cursor-pointer"
          onClick={handleNextClick}
        >
          <FaArrowRight size={30} />
        </div>
        <div className="absolute bottom-4 left-0 right-0 text-center text-white">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      <div className="mt-4 flex overflow-x-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-24 h-24 mx-1 cursor-pointer rounded relative ${
              index === currentIndex ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentIndex(index);
              }
            }}
          >
            <Image
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideshowGallery;
