import React, { useState } from 'react';
import { List } from '../../components/List/List';
import { UserModal } from '../../components/UserModal/UserModal';
import { ListTypes } from '../../types/ListTypes';
import { UserInfo } from '../../types/UserInfo';
import { useCSVReader } from 'react-papaparse';

import styles from './ListContainer.module.scss';
import { Filter } from '../../components/Filter/Filter';
import { FilterFormTypes } from '../../types/FilterFormTypes';

export const ListContainer: React.FC<ListTypes> = ({ list, setList }) => {
  const [userToEdit, setUserToEdit] = useState<UserInfo | null>(null);
  const [isModalActive, setIsModalActive] = useState(false);
  const [firlteredUsers, setFilteredUsers] = useState<UserInfo[]>(list);

  const { CSVReader } = useCSVReader();

  const removeUser = (userObj: UserInfo) => {
    let newList = [...list];
    newList.splice(list.indexOf(userObj), 1);

    setList(newList);
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

  return (
    <div className={styles.main} data-testid="all-user-id">
      <div className={styles.filter}></div>
      <Filter setFilteredUsers={setFilteredUsers} onSubmit={onSubmit} />
      <div className={styles.list}>
        <button className={styles.button} onClick={() => handleEdit()}>
          Add User
        </button>
        <List removeUser={removeUser} handleEdit={handleEdit} firlteredUsers={firlteredUsers} />
        {isModalActive && (
          <UserModal
            setIsModalActive={setIsModalActive}
            isModalActive={isModalActive}
            list={list}
            setList={setList}
            userToEdit={userToEdit}
          />
        )}
      </div>
      <div>
        <CSVReader
          onUploadAccepted={(results: any) => {
            if (results.errors.length) {
              alert('faildToAddCount');
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
      </div>
    </div>
  );
};
