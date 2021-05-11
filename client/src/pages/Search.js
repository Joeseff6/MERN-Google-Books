import { useState, useEffect } from 'react';
import API from '../utils/API';
import Header from "../components/Header";
import SearchCard from "../components/Cards/SearchCard";

function Search() {
  const [value,setValue] = useState("");
  const [results,setResults] = useState([]);

  const handleChange = ({target}) => {
    setValue(target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    document.getElementById('searchInput').value = "";
    const {data} = await API.getBooks(value);
    console.log(data.items);
    setResults(data.items);
  };

  useEffect(() => {
    setValue(value);
  },[value])

  return (
    <>
      <Header heading="Search Page" />
      <form className="mb-3">
        <input
          className="d-block m-auto mb-3 col-6 text-capitalize"
          type="text"
          id="searchInput"
          placeholder="Enter book name"
          onChange={handleChange}
        />
        <button 
        type="submit" 
        className="btn d-block m-auto"
        onClick={handleSubmit}
        >
          Search
        </button>
      </form>
      <h3 className="text-center">Results found: {results.length > 0 ? results.length : "Please submit search"}</h3>
      <SearchCard books={results}/>
    </>
  );
}

export default Search;
