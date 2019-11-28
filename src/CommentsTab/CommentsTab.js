import './comments-tab.css';

import React from 'react';
import PropTypes from 'prop-types';

function CommentsTab({ comments = [] }) {
  return (
    <section>
      {comments.map(({ id, name, email, body }) => (
        <div className="comment" key={id}>
          <h2 className="comment-name">{name}</h2>
          <p className="comment-email">{email}</p>
          <p>{body}</p>
        </div>
      ))}
    </section>
  );
}

CommentsTab.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      email: PropTypes.string,
      body: PropTypes.string
    })
  )
};

export default CommentsTab;
