import './posts-tab.css';

import React from 'react';
import useData from 'src/hooks/useData';
import PostsTab from './PostsTab';

function PostsTabContainer() {
  const posts = useData('posts');

  return <PostsTab posts={posts} />;
}

export default PostsTabContainer;
