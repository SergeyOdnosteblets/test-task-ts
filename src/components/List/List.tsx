import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserListItemProps } from '../../types/UserListItemProps';
import { UserInfo } from '../../types/UserInfo';

import styles from './List.module.scss';

export const List: React.FC<UserListItemProps> = ({
  removeUser,
  handleEdit,
  firlteredUsers,
  setFilteredUsers,
  sortUsers,
  setSortUsers,
}) => {
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

  const handleTableFilter = (id: string | number) => {
    setSortUsers(id);
  };

  useEffect(() => {
    if (sortUsers) {
      const sorted = [...firlteredUsers].sort((a, b) =>
        `${a}${sortUsers}` > `${b}${sortUsers}` ? 1 : -1,
      );
      setFilteredUsers(sorted);
    }
  }, [sortUsers]);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th onClick={() => handleTableFilter('firstName')}>Name</th>
          <th onClick={() => handleTableFilter('lastName')}>LastName</th>
          <th onClick={() => handleTableFilter('age')}>Age</th>
          <th onClick={() => handleTableFilter('gender')}>Gender</th>
          <th onClick={() => handleTableFilter('country')}>Country</th>
        </tr>
      </thead>
      <tbody className={styles.table__body}>
        {firlteredUsers &&
          firlteredUsers.map((item: UserInfo) => (
            <tr>
              <th key={item.id} onClick={() => handleClick(item)}>
                {item.firstName}
              </th>
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
