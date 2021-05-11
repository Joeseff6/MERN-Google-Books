import { useEffect, useState } from "react";
import Header from "../components/Header";
import SavedCard from "../components/Cards/SavedCard";
import API from "../utils/API";

function Saved() {
  const [results, setResults] = useState([]);
  useEffect(async () => {
    const userBooks = await API.getUserBooks();
    setResults(userBooks.data);
  }, []);

  return (
    <>
      <Header heading="Saved Page" />
      <SavedCard userBooks={results} />
    </>
  );
}

export default Saved;
