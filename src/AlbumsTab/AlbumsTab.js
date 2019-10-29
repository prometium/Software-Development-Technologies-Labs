import './albums-tab.css';

import React from 'react';
import useData from '../hooks/useData';

function AlbumsTab() {
  const albums = useData('https://jsonplaceholder.typicode.com/albums');

  return (
    <section>
      {albums && albums.map(({id, title}) => 
        <div className="album" key={id}>
          <h2 className="album-title">{title}</h2>
        </div>
      )}
    </section>
  );
}

export default AlbumsTab;
