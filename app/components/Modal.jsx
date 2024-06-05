'use client';
import React, {useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Close from '../images/close.jsx';

const Modal = ({ isOpen, onClose, children }) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white p-2 sm:p-8 shadow-lg w-full h-full relative overflow-y-auto"
            initial={{ y: 100}}
            animate={{ y: 0}}
            exit={{ y: 100}}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} // Prevent click from closing modal when clicking inside content
          >
            <div className="close-button rounded cursor-pointer absolute right-6" onClick={onClose}>
              <Close  />
            </div>

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
