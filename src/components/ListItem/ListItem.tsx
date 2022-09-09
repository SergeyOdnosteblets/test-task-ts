import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './ListItem.module.scss';

import { UserListItemProps } from '../../types/UserListItemProps';
import { UserInfo } from '../../types/UserInfo';

export const ListItem: React.FC<UserListItemProps> = ({ list, getRemoveUser }) => {
  const [user, setUser] = useState<any>([]);

  const navigate = useNavigate();
  const handleClick = (userObj: UserInfo) => {
    navigate(`/${userObj.id}`, {
      state: {
        firstName: userObj.firstName,
        age: userObj.age,
        lastName: userObj.lastName,
        gender: userObj.gender,
        country: userObj.country,
      },
    });
  };

  console.log('user', user);
  console.log('list', list);
  
  useEffect(() => {
    Promise.allSettled(list.map((item) => axios.get(`/get/${item}`))).then((res) => setUser(res));
  }, []);

  let fulfilledUsers = user
    .filter((item: any) => {
      if (item.status === 'fulfilled') {
        return item;
      }
    })
    .map((item: any) => {
      return item.value.data.data;
    });

  return (
    <div className={styles.main}>
      {user &&
        fulfilledUsers.map((item: any) => {
          return (
            <div className={styles.item}>
              <div className={styles.user} onClick={() => handleClick(user)} data-testid="user-id">
                {item.firstName}
              </div>
              <button className="button" onClick={() => getRemoveUser(item)}>
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
};
