import React, { useEffect, useState } from 'react';

import { ListItem } from '../../components/ListItem/ListItem';
import axios from 'axios';
import { UserInfo } from '../../types/UserInfo';

import styles from './List.module.scss';

export const List: React.FC = () => {
  const [list, setList] = useState<string[]>([]);
  const [delUser, setDelUser] = useState<any>([]);

  const getRemoveUser = (userObj: UserInfo) => {
    setDelUser([...delUser, userObj.id]);
  };

  useEffect(() => {
    axios.get('/list').then((request) => {
      if (request.status === 200) {
        setList(request.data.data);
      }
    });
  }, [delUser]);

  return (
    <div data-testid="all-user-id">
      {list &&
        list
          .filter((item: string) => {
            return !delUser.includes(item);
          })
          .map((item) => {
            return (
              <div className={styles.user}>
                <ListItem id={item} key={item} getRemoveUser={getRemoveUser} />
              </div>
            );
          })}
    </div>
  );
};
