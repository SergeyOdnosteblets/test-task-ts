import React from 'react';
import { useNavigate } from 'react-router-dom';

import { UserListItemProps } from '../../types/UserListItemProps';
import { UserInfo } from '../../types/UserInfo';

import styles from './List.module.scss';

export const List: React.FC<UserListItemProps> = ({ removeUser, handleEdit, firlteredUsers }) => {
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
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>LastName</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody className={styles.table__body}>
        {firlteredUsers &&
          firlteredUsers.map((item: UserInfo) => (
            <tr key={item.id} onClick={() => handleClick(item)}>
              <th>{item.firstName}</th>
              <th>{item.lastName}</th>
              <th>{item.age}</th>
              <th>{item.gender}</th>
              <th>{item.country}</th>
              <div className={styles.item__buttons}>
                <button className={styles.button} onClick={() => removeUser(item)}>
                  Delete
                </button>
                <button className={styles.button} onClick={() => handleEdit(item)}>
                  Edit
                </button>
              </div>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
