'use client';
import React, {useState} from "react";
import Navbar from "./components/Navbar";
import MaterialSelector from "./components/MaterialSelector";
import Footer from "./components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import ScaleSVG from "./components/ScaleSVG";
import Modal from "./components/Modal";
import MesterBody from "./components/MesterContent/MesterBody";

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content: any) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between px-8">
        <div className="hero flex h-screen w-full justify-center flex-col">
          <h1 className=" text-4xl sm:text-6xl font-bold mb-5">
            Materie primă de calitate, <br />
            aproape de tine
          </h1>
          <ScaleSVG />
          <div className="buttons-hero mt-10 flex gap-4 items-center">
            <a href="#material" className="button-primary font-medium">
              Vezi oferta
            </a>
            <a href="#team" className="button-secondary font-medium">
              Cine suntem?
            </a>
          </div>
        </div>
        <MaterialSelector />
        <section id="mester" className="home-mester mt-48 w-full">
          <h3 className="text-2xl sm:text-4xl font-bold text-center">
            Ai nevoie de meșteri de încredere?
          </h3>
          <p className=" text-2xl sm:text-4xl font-bold mb-16 text-center">I-am găsit noi!</p>
          <div className="section-content w-full flex sm:flex-row flex-col items-center mt-5">
            <div className="sm:w-[60%] w-full flex flex-col gap-7 items-center px-0 sm:px-12 sm:mb-0 mb-10">
              <p className="px-4 text-center font-medium">
                Pentru orice fel de lucrari, alege echipa pentru nevoile tale.
                De la lucrari precedente la tarif transparent toti meșterii sunt
                verificați sa fie ce trebe.
              </p>
              <a className="button-primary font-medium max-w-max cursor-pointer"  onClick={() =>
              openModal(<MesterBody />)}>
                Găsește meșteri
              </a>
            </div>

            <div className="image-home-mester sm:w-[40%] w-full" />
          </div>
        </section>
        <section id="team" className="meet-the-team w-full mt-48">
          <div className="title-meet-the-team flex items-center gap-4">
            <p className="text-4xl font-medium">Echipa</p>
            <div className="logo text-4xl font-medium">
              <span className="logo-start">Raw </span>
              <span className="logo-end">Mat</span>
            </div>
          </div>
          <div className="section-content w-full flex items-center mt-20 md:flex-row flex-col">
            <div className="image-home-team w-full md:w-[60%]" />
            <div className="md:w-[40%] w-full flex flex-col gap-7 md:px-12 px-0 md:mt-0 mt-10">
              <p className=" font-medium">
                Suntem un grup de programatori, designeri si constructori care
                am vazut un lucru care lipseste in piata: Transparenta
                costurilor materiei prime de calitate cat si un serviciu care sa
                faca achizitionarea de materiale usoara.
              </p>
              <a className="button-primary font-medium max-w-max cursor-pointer">
                Vezi echipa
              </a>
            </div>
          </div>
        </section>

        <p className="mt-48 font-medium md:w-[60%]">
          Verificam calitatea materialelor fiecarui aprovizionator inainte de
          inregistrarea acestuia pe platforma noasta. Mai apoi, continuam cu
          controale periodice pentru a asigura buna functionare a sistemului.
        </p>
        <a className="button-primary font-medium max-w-max mt-5 cursor-pointer">
          Vezi procesul
        </a>
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalContent}
      </Modal>    </>
  );
}
