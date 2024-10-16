import PetsList from './components/PetsList';

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="mt-4 py-2 sm:py-4 font-extrabold font-primary text-4xl text-center text-palette-primary leading-relaxed">Furrrrrrrr-ends</h1>
      <PetsList />
    </div>
  );
}
