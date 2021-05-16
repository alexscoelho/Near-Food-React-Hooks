import React, { useState } from "react";
import "./SearchBar.css";

export const SearchBar = ({ searchYelp }) => {
  const [state, setState] = useState({
    term: "",
    location: "",
    sortBy: "best_match",
  });

  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewes": "review_count",
  };

  const getSortByClass = (sortByOption) => {
    if (state.sortBy === sortByOption) {
      return "active";
    } else {
      return "";
    }
  };

  const handleSortByChange = (sortByOption) => {
    setState({ ...state, sortBy: sortByOption });
  };

  const handleTermChange = (event) => {
    setState({ ...state, term: event.target.value });
  };

  const handleLocationChange = (event) => {
    setState({ ...state, location: event.target.value });
  };

  const handleSearch = (event) => {
    if (state.term.trim() === "" || state.location.trim() === "") {
      return;
    }
    searchYelp(state.term, state.location, state.sortBy);
    event.preventDefault();
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          className={getSortByClass(sortByOptionValue)}
          onClick={() => handleSortByChange(sortByOptionValue)}
          key={sortByOptionValue}
        >
          {sortByOption}
        </li>
      );
    });
  };

  return (
    <div className='SearchBar'>
      <div className='SearchBar-sort-options'>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className='SearchBar-fields'>
        <input onChange={handleTermChange} placeholder='Search Businesses' />
        <input onChange={handleLocationChange} placeholder='Where?' />
      </div>
      <div className='SearchBar-submit'>
        <a onClick={handleSearch}>Let's Go</a>
      </div>
    </div>
  );
};
