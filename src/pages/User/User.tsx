import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';

import { UserInfo } from '../../types/UserInfo';

import styles from './User.module.scss';

export const User: React.FC = () => {
  const location = useLocation();
  const state = location.state as UserInfo;

  const [user, setUser] = useState<UserInfo | null>(state);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    !state &&
      axios.get(`/get/${id}`).then((res) => {
        setUser(res.data.data);
      });
  }, []);

  return (
    <div className={styles.main} data-testid="user-page">
      {user && (
        <div className={styles.user}>
          <div>{user.firstName}</div>
          <div>{user.lastName}</div>
          <div>{user.age}</div>
          <div>{user.gender}</div>
          <div>{user.country}</div>
        </div>
      )}
      <div>
        <Link to="/" className={styles.button}>
          Back
        </Link>
      </div>
    </div>
  );
};
