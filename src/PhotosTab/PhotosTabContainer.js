import './photos-tab.css';

import React from 'react';
import useData from '../hooks/useData';
import PhotosTab from './PhotosTab';

function PhotosTabContainer() {
  const photos = useData('photos');

  return <PhotosTab photos={photos} />;
}

export default PhotosTabContainer;
