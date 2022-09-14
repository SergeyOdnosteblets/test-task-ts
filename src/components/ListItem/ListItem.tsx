import React from 'react';
import { useNavigate } from 'react-router-dom';

import { UserListItemProps } from '../../types/UserListItemProps';
import { UserInfo } from '../../types/UserInfo';

import styles from './ListItem.module.scss';

export const ListItem: React.FC<UserListItemProps> = ({ list, removeUser, handleEdit }) => {
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

  return (
    list &&
    list.map((item: UserInfo) => {
      return (
        <div className={styles.main} key={item.id}>
          <div className={styles.item}>
            <div className={styles.user} onClick={() => handleClick(item)} data-testid="user-id">
              {item.firstName}
            </div>
            <div className={styles.item__buttons}>
              <button className={styles.button} onClick={() => removeUser(item)}>
                Delete
              </button>
              <button className={styles.button} onClick={() => handleEdit(item)}>
                Edit
              </button>
            </div>
          </div>
        </div>
      );
    })
  );
};
