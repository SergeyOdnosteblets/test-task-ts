import React, { useEffect, useState } from 'react';

import { List } from '../pages/List/List';
import axios from 'axios';

export const AllUserIds: React.FC = () => {
  let [userIds, setUserIds] = useState<string[]>([]);

  useEffect(() => {
    axios.get('/list').then((request) => {
      setUserIds(request.data.data);
    });
  }, []);

  return (
    <div data-testid="all-user-id">
      {userIds && userIds.map((item) => <List id={item} key={item} />)}
    </div>
  );
};
