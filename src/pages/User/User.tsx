import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';
import styles from './User.module.scss';

import { IUser } from '../../types/data';

export const User: React.FC = () => {
  const [state, setState] = useState<IUser | null>(null);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`/get/${id}`).then((res) => {
      setState(res.data.data);
    });
  }, []);

  return (
    <div className={styles.main} data-testid="user-page">
      {state && (
        <div className={styles.user}>
          <div>{state.firstName}</div>
          <div>{state.lastName}</div>
          <div>{state.age}</div>
          <div>{state.gender}</div>
          <div>{state.country}</div>
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
