import './todos-tab.css';

import React from 'react';
import PropTypes from 'prop-types';

function TodosTab({ todos = [] }) {
  return (
    <section>
      {todos.map(({ id, title, completed }) => (
        <div className="todo" key={id}>
          <h2
            className={
              'todo-title' + (completed ? ' todo-title-completed' : '')
            }
          >
            {title}
          </h2>
        </div>
      ))}
    </section>
  );
}

TodosTab.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      completed: PropTypes.bool
    }).isRequired
  )
};

export default TodosTab;
