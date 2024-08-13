import { MdSearch } from "react-icons/md";
const SearchBar = ({ Search }) => {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.2em" />
      <input
        type="text"
        placeholder="Search for note: "
        onChange={(e) => Search(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
