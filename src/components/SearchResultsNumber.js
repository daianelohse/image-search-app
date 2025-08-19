import React, { useState, useEffect } from 'react';


function SearchResultsNumber({ number, word }) {

    return (

        <>

            {word?.trim() && number > 0 && (
                <p>
                    {number.toLocaleString('pt-BR')} {number === 1 ? 'resultado' : 'resultados'} para “{word.trim()}”
                </p>
            )}

        </>

    )

}

export default SearchResultsNumber;
