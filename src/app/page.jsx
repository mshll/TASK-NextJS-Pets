'use client';

import { useState } from 'react';
import PetsList from './components/PetsList';
import pets from './data/pets';

export default function Home() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');

  const handleQuery = () => {
    setQuery(event.target.value.toLowerCase());
  };
  const handleType = () => {
    setType(event.target.value);
  };

  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="mt-4 py-2 sm:py-4 font-extrabold font-primary text-4xl text-center text-palette-primary leading-relaxed">Furrrrrrrr-ends</h1>
      <PetsList pets={pets} query={query} type={type} handleQuery={handleQuery} handleType={handleType} />
    </div>
  );
}
