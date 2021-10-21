import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Nasrullah',
      image:
        'https://nasrullah-hussaini.web.app/static/media/myPic.64d1d2f4.jpg',
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
