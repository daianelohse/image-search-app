import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import SearchResultsNumber from './components/SearchResultsNumber';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [wordSearched, setWordSearched] = useState("");
  const [totalImages, setTotalImages] = useState(0)
  const [imageType, setImageType] = useState("")

  useEffect(() => {

    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${wordSearched}&image_type=${imageType}&per_page=21`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setImages(data.hits);
        setIsLoading(false);
        setTotalImages(data.total);
      })
      .catch(err => console.log(err))
  }, [wordSearched])

  function handleTagClick(tag) {
    setWordSearched(tag);
  }

  return (

    <div className='container mx-auto mb-16'>
      <NavBar />

      <Hero>
        <ImageSearch searchText={(text) => setWordSearched(text)} />
      </Hero>



      {isLoading ? (
        <h1 className='text-6xl text-center mx-auto mt-32'>Loading...</h1>
      ) : images.length > 0 ? (
        <>
          <SearchResultsNumber number={totalImages.toLocaleString("de-DE")} word={wordSearched} />
          
          <div className='grid grid-cols-2 md:grid-cols-3 gap-6 mt-12'>
            
            {images.map(image => (
              <ImageCard key={image.id} image={image} onTagClick={handleTagClick} />
            ))}
          </div>
        </>
      ) : (
        <h1 className='text-5xl text-center mx-auto mt-32'>No results found</h1>
      )}
    </div>

  );
}

export default App;
