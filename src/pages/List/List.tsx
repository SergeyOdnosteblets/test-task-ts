import React, { useState } from 'react';
import { ListItem } from '../../components/ListItem/ListItem';
import { UserModal } from '../../components/UserModal/UserModal';
import { ListTypes } from '../../types/ListTypes';
import { UserInfo } from '../../types/UserInfo';

import styles from './List.module.scss';
import { Filter } from '../../components/Filter/Filter';

export const List: React.FC<ListTypes> = ({ list, setList }) => {
  const [userToEdit, setUserToEdit] = useState<UserInfo | null>(null);
  const [isModalActive, setIsModalActive] = useState(false);
  const [filterUsers, setFilterUsers] = useState<UserInfo[]>([]);

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

  console.log(filterUsers);

  return (
    <div className={styles.main} data-testid="all-user-id">
      <div className={styles.filter}></div>
      <Filter setFilterUsers={setFilterUsers} list={list} />
      <div className={styles.list}>
        <button className={styles.button} onClick={() => handleEdit()}>
          Add Users
        </button>
        <ListItem
          list={list}
          removeUser={removeUser}
          handleEdit={handleEdit}
          filterUsers={filterUsers}
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
