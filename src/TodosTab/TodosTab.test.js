import React from 'react';
import { shallow } from 'enzyme';
import TodosTab from './TodosTab';

const todos = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false
  }
];

describe('TodosTab', () => {
  it('renders without crashing with 3 elements', () => {
    shallow(<TodosTab todos={todos} />);
  });

  it('renders without crashing with undefinded elements', () => {
    shallow(<TodosTab todos={undefined} />);
  });
});
