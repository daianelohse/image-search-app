import { useState, useEffect } from "react";

export function usePixabayResults(wordSearched, searchType) {


  const [resultsSearch, setResutsSearch] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMoreResults, setHasMoreResults] = useState(false);

  // 1) Always a search or type changes: reset
  useEffect(() => {
    setResutsSearch([]);
    setTotalResults(0);
    setError(null);
    setHasMoreResults(false);
    setPage(1);
  }, [wordSearched, searchType]);

  useEffect(() => {

    setIsLoading(true);

    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${wordSearched}&image_type=${searchType}&page=${page}&per_page=20`)
      .then(res => res.json())
      .then(data => {

        const hits = Array.isArray(data.hits) ? data.hits : [];



        // creates a new list (concatena if page > 1)
        setResutsSearch((prev) => {
          const newList = page === 1 ? hits : [...prev, ...hits];


          const totalHits = Number(data.totalHits ?? data.total ?? 0);
          setTotalResults(data.total);
          setHasMoreResults(newList.length < totalHits);

          return newList;
        });
        setIsLoading(false);
        console.log(page)
      })
      .catch(err => {
        setError("Error: " + err.message);
        setIsLoading(false);
      })
  }, [wordSearched, searchType, page])

  return { resultsSearch, totalResults, isLoading, error, hasMoreResults, page, setPage };

}