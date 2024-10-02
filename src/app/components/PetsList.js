"use client"

import { useState } from "react";

import PetItem from "./PetItem";
import SearchBar from "./SearchBar";

function PetsList({ pets }) {
  const [filters, setFilters] = useState({
    query: "",
    type: ""
  })

  function handleChange(e) {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    })
  }

  const petList = pets
    .filter(pet =>
      pet.name.toLowerCase().includes(filters.query.toLowerCase()) &&
      (pet.type === filters.type || !filters.type)
    )
    .map((pet) => <PetItem pet={pet} key={pet.id} />);

  return (
    <>
      <SearchBar filters={filters} handleChange={handleChange} />
      <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">{petList}</div>
    </>
  );
}

export default PetsList;
