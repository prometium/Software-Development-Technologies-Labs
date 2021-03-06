import React from 'react';
import { shallow } from 'enzyme';
import PhotosTab from './PhotosTab';

const photos = [
  {
    albumId: 1,
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952'
  },
  {
    albumId: 1,
    id: 2,
    title: 'reprehenderit est deserunt velit ipsam',
    url: 'https://via.placeholder.com/600/771796',
    thumbnailUrl: 'https://via.placeholder.com/150/771796'
  },
  {
    albumId: 1,
    id: 3,
    title: 'officia porro iure quia iusto qui ipsa ut modi',
    url: 'https://via.placeholder.com/600/24f355',
    thumbnailUrl: 'https://via.placeholder.com/150/24f355'
  }
];

describe('PhotosTab', () => {
  it('renders without crashing with 3 elements', () => {
    shallow(<PhotosTab photos={photos} />);
  });

  it('renders without crashing with undefinded elements', () => {
    shallow(<PhotosTab photos={undefined} />);
  });
});
