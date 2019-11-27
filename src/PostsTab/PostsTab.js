import './posts-tab.css';

import React from 'react';

function PostsTab({ posts }) {
  return (
    <section>
      {posts &&
        posts.map(({ id, title, body }) => (
          <div className="post" key={id}>
            <h2 className="post-title">{title}</h2>
            <p>{body}</p>
          </div>
        ))}
    </section>
  );
}

export default PostsTab;
