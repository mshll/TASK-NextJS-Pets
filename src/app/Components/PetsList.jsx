import PetItem from './PetItem';
import SearchBar from './SearchBar';

function PetsList({ pets, type, query, handleQuery, handleType }) {
  const petList = pets.map(
    (pet) => (type === '' || pet.type === type) && pet.name.toLowerCase().includes(query) && <PetItem pet={pet} key={pet.id} />
  );

  return (
    <>
      <SearchBar query={query} type={type} handleQuery={handleQuery} handleType={handleType} />
      <div className="gap-x-4 gap-y-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto py-12 max-w-6xl">{petList}</div>
    </>
  );
}

export default PetsList;
