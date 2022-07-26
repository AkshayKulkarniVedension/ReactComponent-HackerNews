import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { handleSearch, query } = useGlobalContext();

  function searchHandler(e) {
    handleSearch(e.target.value);
  }
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>Search hacker news</h2>
      <input
        type="text"
        className="form-input"
        onChange={searchHandler}
        value={query}
      ></input>
    </form>
  );
};

export default SearchForm;
