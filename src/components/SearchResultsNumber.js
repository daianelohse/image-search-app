import React, { useState, useEffect } from 'react';


function SearchResultsNumber({ number, word }) {


    return (

        <>

            {word?.trim() && (

                <div>
                    <h1 className='text-2xl'>Results for: <span className="text-teal-600">{word}</span></h1>
                    <p className='text-sm font-normal mt-2'> {number.toLocaleString("pt-BR")} results</p>
                </div>

            )}

        </>

    )

}

export default SearchResultsNumber;
