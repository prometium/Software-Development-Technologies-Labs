import './albums-tab.css';

import React from 'react';
import PropTypes from 'prop-types';

function AlbumsTab({ albums = [] }) {
  return (
    <section>
      {albums.map(({ id, title }) => (
        <div className="album" key={id}>
          <h2 className="album-title">{title}</h2>
        </div>
      ))}
    </section>
  );
}

AlbumsTab.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string
    })
  )
};

export default AlbumsTab;
