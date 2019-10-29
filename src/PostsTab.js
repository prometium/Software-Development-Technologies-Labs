import './reset.css';
import './base.css';

import React from 'react';
import useData from './hooks/useData';

function PostsTab() {
  const posts = useData('https://jsonplaceholder.typicode.com/posts');

  return (
    <section>
      
    </section>
  );
}

export default PostsTab;
