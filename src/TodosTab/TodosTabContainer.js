import './todos-tab.css';

import React from 'react';
import useData from '../hooks/useData';
import TodosTab from './TodosTab';

function TodosTabContainer() {
  const todos = useData('todos');

  return <TodosTab todos={todos} />;
}

export default TodosTabContainer;
