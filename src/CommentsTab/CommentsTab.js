import './comments-tab.css';

import React from 'react';
import useData from '../hooks/useData';

function CommentsTab() {
  const comments = useData('https://jsonplaceholder.typicode.com/comments');

  return (
    <section>
      {comments && comments.map(({id, name, email, body}) => 
        <div className="comment" key={id}>
          <h2 className="comment-name">{name}</h2>
          <p className="comment-email">{email}</p>
          <p>{body}</p>
        </div>
      )}
    </section>
  );
}

export default CommentsTab;
