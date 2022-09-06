import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './ListItem.module.scss';

import { UserListItemProps } from '../../types/interface';

export const ListItem: React.FC<UserListItemProps> = ({ id }) => {
  const [userState, setUserState] = useState<any>([]);

  const navigate = useNavigate();
  const handleClick = (userObj: any) => {
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
        setUserState(res.data.data);
      }
    });
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.user} onClick={() => handleClick(userState)} data-testid="user-id">
        {userState.firstName}
      </div>
    </div>
  );
};
