import React from 'react';
import { shallow } from 'enzyme';
import AlbumsTab from './AlbumsTab';

const albums = [
  {
    userId: 1,
    id: 1,
    title: 'quidem molestiae enim'
  },
  {
    userId: 1,
    id: 2,
    title: 'sunt qui excepturi placeat culpa'
  },
  {
    userId: 1,
    id: 3,
    title: 'omnis laborum odio'
  }
];

it('renders without crashing with 3 elements', () => {
  shallow(<AlbumsTab albums={albums} />);
});
