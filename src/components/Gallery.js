import { React, useRef, useEffect, useState } from "react";
import ImageCard from "./ImageCard";

const Gallery = ({ resultsSearch, onTagClick, hasMoreResults, onEndPageReached, isLoading }) => {

    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const enabled = hasMoreResults && !isLoading;

    // ➊ flag para travar múltiplas chamadas durante o loading
    const requestedRef = useRef(false);

    // mantém como está:
    const callbackFunction = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    };

    // ➋ dispara apenas uma vez por ciclo de carregamento
    useEffect(() => {
        if (isVisible && hasMoreResults && !isLoading && !requestedRef.current) {
            requestedRef.current = true;
            onEndPageReached();
        }
    }, [isVisible, hasMoreResults, isLoading, onEndPageReached]);

    // ➌ quando o loading terminar, libera para o próximo disparo
    useEffect(() => {
        if (!isLoading) {
            requestedRef.current = false;
        }
    }, [isLoading]);

    // ➍ crie o observer só quando 'enabled' mudar (sem callback nas deps)
    useEffect(() => {
        if (!enabled) return;
        const node = containerRef.current;
        if (!node) return;

        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            setIsVisible(entry.isIntersecting);
        }, {
            root: null,
            rootMargin: "400px",
            threshold: 1.0,
        });

        observer.observe(node);
        return () => observer.disconnect();
    }, [enabled]);


    return (




        <div className='grid grid-cols-2 md:grid-cols-3 gap-6 mt-12'>

            {resultsSearch.map(result => (
                <ImageCard key={result.id} image={result} onTagClick={onTagClick} />

            ))}
            <div className="box" ref={containerRef} />

        </div>


    )
}

export default Gallery;