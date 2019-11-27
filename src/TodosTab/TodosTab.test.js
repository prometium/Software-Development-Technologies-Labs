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

it('renders without crashing with 3 elements', async () => {
  shallow(<TodosTab todos={todos} />);
});
