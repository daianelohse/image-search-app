import React from "react";

const ImageCard = ({ image, onTagClick }) => {


  const tags = image.tags.split(',').slice(0, 4);


  return (

    <div className="bg-white rounded-lg shadow">

      <div className="w-full h-96">
        <img
          src={image.webformatURL}
          alt="Imagem aleatória"
          className="w-full h-full object-cover rounded-t-lg"
        />

      </div>

      <div className="p-4">

        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl">
            Photo by {image.user}
          </div>
          <ul>
            <li>
              <strong>Views: </strong>
              {image.views}
            </li>
            <li>
              <strong>Downloads: </strong>
              {image.downloads}
            </li>
            <li>
              <strong>Likes: </strong>
              {image.likes}
            </li>
          </ul>
        </div>
        <div className="px-2 py-2">
          {tags.map((tag, index) => (

            <span onClick={() => onTagClick?.(tag)} key={index} className="cursor-pointer hover:bg-blue-500 hover:text-white inline-block bg-gray-200 rounded-full px-3 py-1 mt-1 text-sm font-semibold text-gray-700 mr-2 ">
                {tag}
            </span>

          ))}

        </div>
      </div>
    </div>

  )
}

export default ImageCard;