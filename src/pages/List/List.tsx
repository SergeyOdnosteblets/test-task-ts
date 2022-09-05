import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import styles from './List.module.scss';

import { PropList } from '../../types/data';

export const List: React.FC<PropList> = ({ id }) => {
  const [stateName, setStateName] = useState<string[]>([]);
  const [stateId, setStateId] = useState<string[]>([]);

  useEffect(() => {
    axios.get(`/get/${id}`).then((res) => {
      setStateName(res.data.data.firstName);
      setStateId(res.data.data.id);
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
