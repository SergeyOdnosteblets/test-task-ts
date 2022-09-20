import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserListItemProps } from '../../types/UserListItemProps';
import { UserInfo } from '../../types/UserInfo';

import styles from './List.module.scss';

export const List: React.FC<UserListItemProps> = ({
  removeUser,
  handleEdit,
  filteredUsers,
  setFilteredUsers,
  sortedUsers,
  setSortedUsers,
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

  const addSortCategory = (category: string | number) => {
    setSortedUsers(category);
  };

  useEffect(() => {
    if (sortedUsers) {
      const sorted = [...filteredUsers].sort((a, b) => (a[sortedUsers] > b[sortedUsers] ? 1 : -1));
      setFilteredUsers(sorted);
    }
  }, [sortedUsers]);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th onClick={() => addSortCategory('firstName')}>Name</th>
          <th onClick={() => addSortCategory('lastName')}>LastName</th>
          <th onClick={() => addSortCategory('age')}>Age</th>
          <th onClick={() => addSortCategory('gender')}>Gender</th>
          <th onClick={() => addSortCategory('country')}>Country</th>
        </tr>
      </thead>
      <tbody className={styles.table__body}>
        {filteredUsers &&
          filteredUsers.map((item: UserInfo) => (
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
