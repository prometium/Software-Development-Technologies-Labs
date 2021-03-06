import './photos-tab.css';

import React from 'react';
import PropTypes from 'prop-types';

function PhotosTab({ photos = [] }) {
  return (
    <section>
      {photos.map(({ id, title, thumbnailUrl }) => (
        <div className="photo" key={id}>
          <h2 className="photo-title">{title}</h2>
          <img src={thumbnailUrl} />
        </div>
      ))}
    </section>
  );
}

PhotosTab.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      thumbnailUrl: PropTypes.string
    })
  )
};

export default PhotosTab;
