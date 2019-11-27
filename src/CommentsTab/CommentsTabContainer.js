import './comments-tab.css';

import React from 'react';
import useData from '../hooks/useData';
import CommentsTab from './CommentsTab';

function CommentsTabContainer() {
  const comments = useData('comments');

  return <CommentsTab comments={comments} />;
}

export default CommentsTabContainer;
