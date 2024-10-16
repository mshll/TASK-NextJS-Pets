function SearchBar({ type, query, handleQuery, handleType }) {
  return (
    <>
      <div className="mx-auto">
        <div className="flex justify-start space-x-2 w-full font-primary">
          <div className="flex flex-col flex-grow items-start space-y-1">
            <input
              type="search"
              placeholder="search"
              value={query}
              className="border-gray-300 focus:border-palette-light form-input border rounded-md focus:ring-palette-light w-full text-gray-900"
              onChange={handleQuery}
            />
          </div>
          <div className="flex flex-col flex-grow-0 items-start space-y-1">
            <select
              defaultValue={type}
              onChange={handleType}
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
    </>
  );
}

export default SearchBar;
