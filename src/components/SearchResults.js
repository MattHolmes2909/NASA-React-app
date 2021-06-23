import React from "react";
import "../styles/SearchResults.css";
import PropTypes from "prop-types";

const SearchResults = ({ results }) => {
if (!results) {
    return null;
}
if (results.length === 0) {
    return <p>No results</p>;
}
return (
    <>
    {results.map((image) => (
        <div className="images">
            <img
            className="image"
            src={image}
            alt="Nasa Image"
            data-testid="image"
            />
        </div>
    ))}
    </>
    );
};

SearchResults.propTypes = {
    results: PropTypes.array.isRequired,
};

export default SearchResults;
