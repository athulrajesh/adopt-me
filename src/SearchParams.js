import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, Animaldropdown] = useDropdown("animal", "dog", ANIMALS);
  const [breed, Breeddropdown] = useDropdown("breed", "", breeds);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <Animaldropdown />
        <Breeddropdown />
        <button>submit</button>
      </form>
    </div>
  );
};
export default SearchParams;
