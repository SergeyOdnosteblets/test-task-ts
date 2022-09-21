import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserListItemProps } from '../../types/UserListItemProps';
import { UserInfo } from '../../types/UserInfo';

import styles from './List.module.scss';

export const List: React.FC<UserListItemProps> = ({
  removeUser,
  handleEdit,
  filteredUsers,
  setFilteredUsers,
  forceRefresh,
}) => {
  const [sortBy, setSortBy] = useState<string | number>('');
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

  const onSortingChange = (category: string | number) => {
    setSortBy(category);
  };

  useEffect(() => {
    if (sortBy) {
      const sorted = [...filteredUsers].sort((a, b) =>
        a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? 1 : -1,
      );
      setFilteredUsers(sorted);
    }
  }, [sortBy, forceRefresh]);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th onClick={() => onSortingChange('firstName')}>Name</th>
          <th onClick={() => onSortingChange('lastName')}>LastName</th>
          <th onClick={() => onSortingChange('age')}>Age</th>
          <th onClick={() => onSortingChange('gender')}>Gender</th>
          <th onClick={() => onSortingChange('country')}>Country</th>
        </tr>
      </thead>
      <tbody className={styles.table__body}>
        {filteredUsers &&
          filteredUsers.map((item: UserInfo) => (
            <tr key={item.id}>
              <th onClick={() => handleClick(item)}>{item.firstName}</th>
              <th>{item.lastName}</th>
              <th>{item.age}</th>
              <th>{item.gender}</th>
              <th>{item.country}</th>
              <th>
                <div className={styles.item__buttons}>
                  <button className={styles.button} onClick={() => removeUser(item)}>
                    Delete
                  </button>
                  <button className={styles.button} onClick={() => handleEdit(item)}>
                    Edit
                  </button>
                </div>
              </th>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
