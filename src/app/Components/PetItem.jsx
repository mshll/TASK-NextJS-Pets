'use client';

import Image from 'next/image';
import { useState } from 'react';

const btnStyle = 'm-4 p-2 bg-palette-primary text-white rounded-md font-primary font-semibold  hover:bg-palette-dark';

function PetItem({ pet }) {
  const [petImage, setPetImage] = useState(pet.image);
  const [isAdopted, setIsAdopted] = useState(false);

  const switchPetImage = () => {
    console.log(petImage);
    setPetImage(petImage !== pet.image ? pet.image : pet.image2);
  };

  const setAdopted = () => {
    if (window.confirm('Do you really want to adopt this furrrrr-end? :3')) setIsAdopted(!isAdopted);
  };

  return (
    isAdopted || (
      <div className="border-palette-lighter shadow-lg mx-auto border rounded-md w-72 h-120">
        <div className="relative border-palette-lighter border-b-2 h-72">
          <Image alt={pet.name} src={petImage} className="hover:brightness-75 rounded-t-md transform duration-500 ease-in-out" fill sizes="30vw" />
        </div>
        <div className="relative h-48">
          <div className="px-4 pt-4 font-primary font-semibold text-2xl text-palette-primary">{pet.name}</div>
          <div className="p-4 font-light font-primary text-gray-600 text-lg">{pet.description}</div>
          <div className="gap-2 grid grid-cols-2">
            <button type="button" className={btnStyle} onClick={switchPetImage}>
              Pet
            </button>
            <button type="button" className={btnStyle} onClick={setAdopted}>
              Adopt
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default PetItem;
