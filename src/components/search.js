import React, { useState } from "react";
import "../styles/search.css";
import getImages from "../requests/getImages";
import PropTypes from "prop-types";

const Search = ({ setSearchResults }) => {
    const [value, setValue] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSearchResults(await getImages(value));
    };

    return (
        <>
        <form className="search-form" onSubmit={handleSubmit}>
            <input
            className="search-input"
            type="text"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search Images.."
            data-testid="search-input"
            />
            <button className="search-btn" type="submit" data-testid="search-btn">
                Go!
                </button>
            </form>
        </>
   );
};

Search.propTypes = {
    setSearchResults: PropTypes.func.isRequired,
};

export default Search;
