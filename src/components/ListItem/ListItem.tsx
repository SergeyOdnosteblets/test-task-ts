import React, { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './ListItem.module.scss';

import { UserListItemProps } from '../../types/UserListItemProps';
import { UserInfo } from '../../types/UserInfo';

export const ListItem: React.FC<UserListItemProps> = ({ id, getRemoveUser }) => {
  const [user, setUser] = useState<UserInfo | null>(null);

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

  useEffect(() => {
    axios.get(`/get/${id}`).then((res) => {
      if (res.status === 200) {
        setUser(res.data.data);
      }
    });
  }, []);

  return (
    <div className={styles.main}>
      {user && (
        <div className={styles.item}>
          <div className={styles.user} onClick={() => handleClick(user)} data-testid="user-id">
            {user.firstName}
          </div>
          <button className="button" onClick={() => getRemoveUser(user)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};
