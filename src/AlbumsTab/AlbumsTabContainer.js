import './albums-tab.css';

import React from 'react';
import useData from 'src/hooks/useData';
import AlbumsTab from './AlbumsTab';

function AlbumsTabContainer() {
  const albums = useData('albums');

  return <AlbumsTab albums={albums} />;
}

export default AlbumsTabContainer;
