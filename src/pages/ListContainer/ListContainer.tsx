import React, { useState } from 'react';
import { List } from '../../components/List/List';
import { UserModal } from '../../components/UserModal/UserModal';
import { ListTypes } from '../../types/ListTypes';
import { UserInfo } from '../../types/UserInfo';

import styles from './ListContainer.module.scss';
import { Filter } from '../../components/Filter/Filter';

export const ListContainer: React.FC<ListTypes> = ({ list, setList }) => {
  const [userToEdit, setUserToEdit] = useState<UserInfo | null>(null);
  const [isModalActive, setIsModalActive] = useState(false);
  const [firlteredUsers, setFilteredUsers] = useState<UserInfo[]>([]);

  const removeUser = (userObj: UserInfo) => {
    let newList = [...list];
    newList.splice(list.indexOf(userObj), 1);

    setList(newList);
  };

  const handleEdit = (userObj?: UserInfo) => {
    if (userObj) {
      userObj && setUserToEdit(userObj);
    } else {
      setUserToEdit(null);
    }
    setIsModalActive(!isModalActive);
  };

  return (
    <div className={styles.main} data-testid="all-user-id">
      <div className={styles.filter}></div>
      <Filter setFilteredUsers={setFilteredUsers} list={list} />
      <div className={styles.list}>
        <button className={styles.button} onClick={() => handleEdit()}>
          Add User
        </button>
        <List
          list={list}
          removeUser={removeUser}
          handleEdit={handleEdit}
          firlteredUsers={firlteredUsers}
        />
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
    </div>
  );
};
