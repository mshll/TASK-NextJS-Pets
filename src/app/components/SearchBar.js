
function SearchBar({ filters, handleChange }) {
  return (
    <div className="mx-auto">
      <div className="flex justify-start space-x-2 w-full font-primary">
        <div className="flex flex-col items-start space-y-1 flex-grow">
          <input
            type="search"
            placeholder="search"
            name="query"
            value={filters.query}
            onChange={handleChange}
            className="text-gray-900 form-input border border-gray-300 w-full rounded-sm focus:border-palette-light focus:ring-palette-light"
          />
        </div>
        <div className="flex flex-col items-start space-y-1 flex-grow-0">
          <select
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="form-select border border-gray-300 rounded-sm w-full text-gray-900 focus:border-palette-light focus:ring-palette-light"
          >
            <option value="">All</option>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
            <option value="Rabbit">Rabbit</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default SearchBar