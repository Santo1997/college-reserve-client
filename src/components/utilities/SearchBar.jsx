import { useState } from "react";
import ClgData from "../pages/home/homeLayouts/ClgData";

const SearchBar = ({ onChange, filteredColleges }) => {
  const [searchQuery, setSearchQuery] = useState(null);

  const handleSearch = (event) => {
    const search = event.target.value;
    onChange(search);
    setSearchQuery(search);
  };

  return (
    <div className="text-right mt-20 md:mt-24 mx-4">
      <input
        type="text"
        placeholder="Search for a college name"
        onChange={handleSearch}
        className="input input-bordered border-1 focus:border-0 w-2/3"
      />

      {searchQuery ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left mt-4 relative">
          {filteredColleges.map((clg) => (
            <ClgData key={clg._id} clg={clg} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
