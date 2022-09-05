import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import styles from './Item.module.scss';

import { PropsUserId } from '../../types/interface';

export const Item: React.FC<PropsUserId> = ({ id }) => {
  const [stateName, setStateName] = useState<string[]>([]);
  const [stateId, setStateId] = useState<string[]>([]);

  useEffect(() => {
    axios.get(`/get/${id}`).then((res) => {
      if (res.status === 200) {
        setStateName(res.data.data.firstName);
        setStateId(res.data.data.id);
      }
    });
  }, []);

  return (
    <div className={styles.main}>
      <Link to={`/${id}`} className={styles.user} data-testid="user-id">
        {stateName}
      </Link>
    </div>
  );
};
