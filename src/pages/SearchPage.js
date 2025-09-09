import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from "react-router-dom";
import { usePixabayResults } from "../hooks/usePixabayResults";
import Gallery from '../components/Gallery';
import SearchResultsNumber from '../components/SearchResultsNumber';

function SearchPage() {
    let wordSearched = "";
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    wordSearched = searchParams.get("q"); // pega o valor depois de ?q=

    const { resultsSearch, totalResults, isLoading, error, hasMoreResults, setPage } = usePixabayResults(wordSearched, "photo");

    if (!wordSearched) {
        return <p className="mt-24">Digite um termo de busca.</p>;
    }

    function handleTagClick(tag) {
        navigate(`/search?q=${encodeURIComponent(tag)}`);
    }

    const onEndPageReached = () => {

        if (!isLoading && hasMoreResults) {

            setPage(prevPage => prevPage + 1); // avança a página
        }
    };



    return (

        <div className='mt-24 text-2xl font-bold mb-4'>

            {isLoading
                ? <p>Searching...</p>
                : <SearchResultsNumber number={totalResults} word={wordSearched} />
            }

            {error && <p className="text-red-600 mb-4">Error: {error}</p>}

            <Gallery
                resultsSearch={resultsSearch}
                onTagClick={handleTagClick}
                hasMoreResults={hasMoreResults}
                isLoading={isLoading}
                onEndPageReached={onEndPageReached}
            />‚


        </div>

    )

}

export default SearchPage;
