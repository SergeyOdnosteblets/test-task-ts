import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';

import { UserInfo } from '../../types/UserInfo';

import styles from './User.module.scss';

export const User: React.FC = () => {
  const [item, setItem] = useState<UserInfo | null>(null);

  const { state }: any = useLocation();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    axios.get(`/get/${id}`).then((res) => {
      setItem(res.data.data);
    });
  }, []);

  return (
    <div className={styles.main} data-testid="user-page">
      {state ? (
        <div className={styles.user}>
          <div>{state.firstName}</div>
          <div>{state.lastName}</div>
          <div>{state.age}</div>
          <div>{state.gender}</div>
          <div>{state.country}</div>
        </div>
      ) : (
        item && (
          <div className={styles.user}>
            <div>{item.firstName}</div>
            <div>{item.lastName}</div>
            <div>{item.age}</div>
            <div>{item.gender}</div>
            <div>{item.country}</div>
          </div>
        )
      )}
      <div>
        <Link to="/" className={styles.button}>
          Back
        </Link>
      </div>
    </div>
  );
};
