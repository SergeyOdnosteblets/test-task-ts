import React, { useEffect, useState } from 'react';

import { ListItem } from '../../components/ListItem/ListItem';
import axios from 'axios';
import { UserInfo } from '../../types/UserInfo';

export const List: React.FC<any> = ({ list, setList }) => {
  const getRemoveUser = (userObj: UserInfo) => {
    let delUser = list?.filter((item: string) => {
      return item !== userObj.id;
    });

    delUser && setList(delUser);
  };

  useEffect(() => {
    console.log('list in List', list);
    axios.get('/list').then((request) => {
      if (request.status === 200) {
        setList(request.data.data);
      }
    });
  }, []);

  return (
    <div data-testid="all-user-id">
      {list && <ListItem list={list} getRemoveUser={getRemoveUser} />}
    </div>
  );
};
