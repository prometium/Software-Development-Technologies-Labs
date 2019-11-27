import './photos-tab.css';

import React from 'react';

function PhotosTab({ photos }) {
  return (
    <section>
      {photos &&
        photos.map(({ id, title, thumbnailUrl }) => (
          <div className="photo" key={id}>
            <h2 className="photo-title">{title}</h2>
            <img src={thumbnailUrl} />
          </div>
        ))}
    </section>
  );
}

export default PhotosTab;
