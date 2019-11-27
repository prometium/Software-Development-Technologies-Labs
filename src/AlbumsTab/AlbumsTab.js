import './albums-tab.css';

import React from 'react';

function AlbumsTab({ albums }) {
  return (
    <section>
      {albums &&
        albums.map(({ id, title }) => (
          <div className="album" key={id}>
            <h2 className="album-title">{title}</h2>
          </div>
        ))}
    </section>
  );
}

export default AlbumsTab;
