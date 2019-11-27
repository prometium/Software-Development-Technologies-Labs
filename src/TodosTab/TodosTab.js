import './todos-tab.css';

import React from 'react';

function TodosTab({ todos }) {
  return (
    <section>
      {todos &&
        todos.map(({ id, title, completed }) => (
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

export default TodosTab;
