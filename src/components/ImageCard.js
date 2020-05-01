import React from 'react';

import Tag from './Tag';

const ImageCard = ({image}) => {
  const tags = image.tags.split(',');

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image.webformatURL} alt="random"/>
      <div className="px-6 py-4">
      <div className="font-bold text-purple-500 text-xl mb-2">by {image.user}</div>
        <ul>
          <li>
            <strong>Views: </strong>{image.views}
          </li>
          <li>
          <strong>Downloads: </strong>{image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>{image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {
          tags.map(tag => <Tag tag={tag} />)
        }
      </div>
    </div>
  );
};

export default ImageCard;
