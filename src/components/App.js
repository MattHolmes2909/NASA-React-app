import React, { useState } from "react"; 
import '../styles/App.css';
import Search from "./search"
import SearchResults from "./SearchResults";

function App() {
  const [searchResults, setSearchResults] = useState();
  return (
    <div className="App" data-testid="app">
      <img
      className="nasa-logo"
      src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
      alt="nasaLogo"
      data-testid="logo"
      />
      <Search setSearchResults={setSearchResults} />
      <div className="search-results">
      <SearchResults results={searchResults} />
    </div>
    </div>
  );
}

export default App;
