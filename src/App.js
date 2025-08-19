import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [totalImages, setTotalImages] = useState(0)

  useEffect(() => {

    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&per_page=21`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
        setTotalImages(data.total);
      })
      .catch(err => console.log(err))
  }, [term])

   function handleTagClick(tag) {
      setTerm(tag);
    }

  return (

    <div className='container mx-auto mb-16'>
      <ImageSearch searchText={(text) => setTerm(text)} />


      {isLoading ? (
        <h1 className='text-6xl text-center mx-auto mt-32'>Loading...</h1>
      ) : images.length !== 0 ? (
        <>
          <p className='mb-4'>{totalImages.toLocaleString("de-DE")} images found</p>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
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
