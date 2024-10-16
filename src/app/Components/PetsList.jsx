import pets from '../data/pets';
import PetItem from './PetItem';

function PetsList() {
  const petList = pets.map((pet) => <PetItem pet={pet} key={pet.id} />);

  return (
    <>
      <div className="mx-auto">
        <div className="flex justify-start space-x-2 w-full font-primary">
          <div className="flex flex-col flex-grow items-start space-y-1">
            <input
              type="search"
              placeholder="search"
              className="border-gray-300 focus:border-palette-light form-input border rounded-md focus:ring-palette-light w-full text-gray-900"
            />
          </div>
          <div className="flex flex-col flex-grow-0 items-start space-y-1">
            <select
              defaultValue={''}
              className="border-gray-300 focus:border-palette-light form-select border rounded-md focus:ring-palette-light w-full text-gray-900"
            >
              <option value="">All</option>
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
              <option value="Rabbit">Rabbit</option>
            </select>
          </div>
        </div>
      </div>
      <div className="gap-x-4 gap-y-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto py-12 max-w-6xl">{petList}</div>
    </>
  );
}

export default PetsList;
