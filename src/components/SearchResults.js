import React from "react";
import "../styles/SearchResults.css";
import PropTypes from "prop-types";

const SearchResults = ({ results }) => {
     return results.length ? (
         results.map((result) => {
             return (
        <>
        <div className="images">
        <img
        className="card-image"
        src={result}
        alt="space-image"
        />
        </div>
        </>
        );
    })
    ) : (
    <p>No results!</p>
    )
};

SearchResults.propTypes = {
    results: PropTypes.array.isRequired,
};

export default SearchResults;
