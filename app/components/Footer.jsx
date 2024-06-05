import React from "react";

const Footer = () => {
  return (
    <div className="footer-cont min-h-[80vh] text-center">
      <div className="logo text-8xl font-medium pt-14">
        <span className="logo-start">RAW </span>
        <span className="logo-end-footer">MAT</span>
      </div>
      <div className="footer-main mt-24 flex px-8">
        <div className="footer-section flex flex-col">
          <p className="font-bold text-xl mb-5">Despre noi</p> 
          <p className="text-start px-6 footer-description">
            Suntem mijlocitorul dintre nevoile tale in constructii si amenajări,
            și furnizorii de profil.
          </p>
        </div>
        <div className="footer-section flex flex-col ">
            <p className="font-bold text-xl mb-5">Navigare</p>
            <a href="#">Acasă</a>
            <a href="#">Meșter</a>
            <a href="#">Materiale</a>
            <a href="#">Consultanță</a>
        </div>
        <div className="footer-section flex flex-col">
            <p className="font-bold text-xl mb-5">Contact</p>
            <p>contact@rawmat.ro</p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
