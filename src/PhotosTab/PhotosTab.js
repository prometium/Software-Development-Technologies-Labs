import './photos-tab.css';

import React from 'react';
import useData from '../hooks/useData';

function PhotosTab() {
  const photos = useData('https://jsonplaceholder.typicode.com/photos');

  return (
    <section>
      {photos && photos.map(({id, title, thumbnailUrl}) => 
        <div className="photo" key={id}>
          <h2 className="photo-title">{title}</h2>
          <img src={thumbnailUrl} />
        </div>
      )}
    </section>
  );
}

export default PhotosTab;
