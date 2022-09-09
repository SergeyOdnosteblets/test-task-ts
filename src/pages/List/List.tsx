import React, { useEffect, useState } from 'react';

import { ListItem } from '../../components/ListItem/ListItem';
import axios from 'axios';
import { UserInfo } from '../../types/UserInfo';

import styles from './List.module.scss';

export const List: React.FC = () => {
  const [list, setList] = useState<string[]>([]);
  console.log(list);

  const removeUser = (userObj: UserInfo) => {
    let delUser = list?.filter((item: string) => {
      return item !== userObj.id;
    });
    delUser && setList(delUser);
  };

  useEffect(() => {
    axios.get('/list').then((request) => {
      if (request.status === 200) {
        setList(request.data.data);
      }
    });
  }, []);

  return (
    <div data-testid="all-user-id">
      {list &&
        list.map((item) => (
          <div className={styles.userId} key={item}>
            <ListItem id={item} removeUser={removeUser} />
          </div>
        ))}
    </div>
  );
};
