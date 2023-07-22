import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    const search = event.target.value;
    setSearchQuery(search);
    onSearch(search);
  };

  return (
    <div className="text-right mt-20 md:mt-24 mx-4">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search..."
        className="input input-bordered border-1 focus:border-0 w-2/3"
      />
    </div>
  );
};

export default SearchBar;
