"use client";
import React from "react";
import Filter from "../../images/filter.jsx";
import MasterCard from "./MesterCard.jsx";
import MesterImage from "../../images/mester-1.png";

const MesterBody = () => {

    const mesteri = [
        {
            name: "Andrei",
            image: MesterImage,
            skills: ["Zugrav", "Instalator", "Electrician","Parhetar"],
            oras: "Bucuresti",
        },
        {
            name: "Mihai",
            image: MesterImage,
            skills: ["Zugrav", "Instalator", "Electrician"],
            oras: "Bucuresti",
        },
        {
            name: "Andrei",
            image: MesterImage,
            skills: ["Zugrav", "Instalator", "Electrician"],
            oras: "Bucuresti",
        },
        {
            name: "Mihai",
            image: MesterImage,
            skills: ["Zugrav", "Instalator", "Electrician"],
            oras: "Bucuresti",
        },
        {
            name: "Andrei",
            image: MesterImage,
            skills: ["Zugrav", "Instalator", "Electrician"],
            oras: "Bucuresti",
        },
        {
            name: "Mihai",
            image: MesterImage,
            skills: ["Zugrav", "Instalator", "Electrician"],
            oras: "Bucuresti",
        },
        {
            name: "Mihai",
            image: MesterImage,
            skills: ["Zugrav", "Instalator", "Electrician"],
            oras: "Bucuresti",
        },
        {
            name: "Mihai",
            image: MesterImage,
            skills: ["Zugrav", "Instalator", "Electrician"],
            oras: "Bucuresti",
        },
        {
            name: "Mihai",
            image: MesterImage,
            skills: ["Zugrav", "Instalator", "Electrician"],
            oras: "Bucuresti",
        },

    ];

  return (
    <div>
      <div className="mesteri-header flex flex-col w-full overflow-auto">
        <p className="text-2xl font-bold mb-4">Mesteri</p>
        <div className="flex gap-1 mr-20 filter-button items-center">
            Filtrează
            <Filter className="h-5 w-5" />
        </div>
        <div className="mesteri-cont overflow-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-10">
            {mesteri.map((mester) => (
                <MasterCard
                key={mester.name}
                name={mester.name}
                image={mester.image}
                skills={mester.skills}
                oras={mester.oras}
                />
            ))}

        </div>
      </div>
    </div>
  );
};

export default MesterBody;
