import './posts-tab.css';

import React from 'react';
import useData from '../hooks/useData';

function PostsTab() {
  const posts = useData('https://jsonplaceholder.typicode.com/posts');

  return (
    <section>
      {posts && posts.map(({id, title, body}) => 
        <div className="post" key={id}>
          <h2 className="post-title">{title}</h2>
          <p>{body}</p>
        </div>
      )}
    </section>
  );
}

export default PostsTab;
