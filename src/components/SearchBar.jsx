import { MdSearch } from "react-icons/md";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.2em" />
      <input
        type="text"
        placeholder="Search for note: "
        onChange={(e) => onSearch(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default SearchBar;
