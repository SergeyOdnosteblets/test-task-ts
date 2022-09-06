import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import styles from './User.module.scss';

import { UserInfo } from '../../types/interface';

export const User: React.FC = () => {
  const { state } = useLocation();

  const { firstName, lastName, age, gender, country }: any = state;

  return (
    <div className={styles.main} data-testid="user-page">
      <div className={styles.user}>
        <div>{firstName}</div>
        <div>{lastName}</div>
        <div>{age}</div>
        <div>{gender}</div>
        <div>{country}</div>
      </div>

      <div>
        <Link to="/" className={styles.button}>
          Back
        </Link>
      </div>
    </div>
  );
};
