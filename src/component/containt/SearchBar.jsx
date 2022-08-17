import React from "react";
import Search from "../../assets/Dazzie_Icons/search.svg";
const SearchBar = () => {
  return (
    <div className="searchBar">
      <img src={Search} alt="searchbar" />
      <input type="text" placeholder="Search Here..." />
    </div>
  );
};

export default SearchBar;
