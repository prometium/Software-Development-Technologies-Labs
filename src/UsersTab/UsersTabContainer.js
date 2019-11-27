import './users-tab.css';

import React from 'react';
import useData from '../hooks/useData';
import UsersTab from './UsersTab';

function UsersTabContainer() {
  const users = useData('users');

  return <UsersTab users={users} />;
}

export default UsersTabContainer;
