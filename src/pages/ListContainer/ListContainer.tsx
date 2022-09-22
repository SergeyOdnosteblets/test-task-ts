import React, { useState } from 'react';

import { CSVLink } from 'react-csv';

import { List } from '../../components/List/List';
import { UserModal } from '../../components/UserModal/UserModal';
import { ListTypes } from '../../types/ListTypes';
import { UserInfo } from '../../types/UserInfo';
import { useCSVReader } from 'react-papaparse';

import styles from './ListContainer.module.scss';
import { Filter } from '../../components/Filter/Filter';
import { FilterFormTypes } from '../../types/FilterFormTypes';
import { headers } from '../../listContainer.helpers';

export const ListContainer: React.FC<ListTypes> = ({ list, filteredUsers, setFilteredUsers }) => {
  const [userToEdit, setUserToEdit] = useState<UserInfo | null>(null);
  const [isModalActive, setIsModalActive] = useState(false);
  const [forceRefresh, setForceRefresh] = useState(true);

  const { CSVReader } = useCSVReader();

  const removeUser = (userObj: UserInfo) => {
    let newList = [...filteredUsers];
    newList.splice(filteredUsers.indexOf(userObj), 1);

    setFilteredUsers(newList);
  };

  const handleEdit = (userObj?: UserInfo) => {
    userObj ? setUserToEdit(userObj) : setUserToEdit(null);
    setIsModalActive(!isModalActive);
  };

  const onSubmit = (data: FilterFormTypes) => {
    const filtered =
      list
        ?.filter(
          (item: UserInfo) =>
            !data.firstName || item.firstName.toLowerCase().includes(data.firstName),
        )
        ?.filter((item: UserInfo) => !data.ageFrom || item.age >= data.ageFrom)
        ?.filter((item: UserInfo) => !data.ageTo || item.age <= data.ageTo)
        ?.filter((item: UserInfo) => !data.gender || data.gender.includes(item.gender)) ?? [];
    setFilteredUsers(filtered);
  };

  const csvLink = {
    filename: 'contacts.csv',
    headers: headers,
    data: filteredUsers,
  };

  return (
    <div className={styles.main} data-testid="all-user-id">
      <div className={styles.buttons_import__export}>
        <div className={styles.title}>User List</div>
        <div>
          <CSVReader
            onUploadAccepted={(results: any) => {
              if (results.errors.length) {
                alert('failedToAddCount');
              } else {
                const users = results.data.map((item: UserInfo[]) => {
                  return {
                    id: item[0],
                    firstName: item[1],
                    lastName: item[2],
                    age: item[3],
                    country: item[4],
                    gender: item[5],
                  };
                });
                users.shift();
                setFilteredUsers(users);
                alert('addedCount');
              }
            }}>
            {({ getRootProps }: any) => (
              <button type="button" {...getRootProps()} className={styles.button}>
                Import Contacts
              </button>
            )}
          </CSVReader>
          <CSVLink {...csvLink}>
            <button className={styles.button}>Export contacts</button>
          </CSVLink>
        </div>
      </div>
      <Filter setFilteredUsers={setFilteredUsers} onSubmit={onSubmit} />
      <div className={styles.list}>
        <button className={styles.add__user} onClick={() => handleEdit()}>
          Add User
        </button>
        <List
          removeUser={removeUser}
          handleEdit={handleEdit}
          filteredUsers={filteredUsers}
          setFilteredUsers={setFilteredUsers}
          forceRefresh={forceRefresh}
        />
      </div>
      {isModalActive && (
        <UserModal
          setIsModalActive={setIsModalActive}
          isModalActive={isModalActive}
          filteredUsers={filteredUsers}
          userToEdit={userToEdit}
          setFilteredUsers={setFilteredUsers}
          setForceRefresh={setForceRefresh}
          forceRefresh={forceRefresh}
        />
      )}
    </div>
  );
};
