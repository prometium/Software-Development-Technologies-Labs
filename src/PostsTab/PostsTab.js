import './posts-tab.css';

import React from 'react';
import PropTypes from 'prop-types';

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

PostsTab.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default PostsTab;
