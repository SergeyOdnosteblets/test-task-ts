import React, { useEffect, useState } from 'react';

import { ListItem } from '../../components/ListItem/ListItem';
import axios from 'axios';
import { UserInfo } from '../../types/UserInfo';

import styles from './List.module.scss';

export const List: React.FC = () => {
  const [list, setList] = useState<string[]>([]);

  const getRemoveUser = (userObj: UserInfo) => {
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
        list.map((item) => {
          return (
            <div className={styles.userId}>
              <ListItem id={item} key={item} getRemoveUser={getRemoveUser} />
            </div>
          );
        })}
    </div>
  );
};
