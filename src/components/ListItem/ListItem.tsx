import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
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

  useEffect(() => {
    Promise.allSettled(list.map((item) => axios.get(`/get/${item}`))).then((res) => setUser(res));
  }, [list]);

  let test = user
    .filter((item: string | any) => {
      if (item.status === 'fulfilled') {
        return item;
      }
    })
    .map((item: string | any) => {
      return item.value.data.data;
    });

  return (
    <div className={styles.main}>
      {user &&
        test.map((item: string | any) => {
          return (
            <div className={styles.item}>
              <div className={styles.user} onClick={() => handleClick(user)} data-testid="user-id">
                {item.firstName}
              </div>
              <button className="button" onClick={() => getRemoveUser(user)}>
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
};
