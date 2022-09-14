import React, { useState } from 'react';
import { Filter } from '../../components/Filter/Filter';
import { ListItem } from '../../components/ListItem/ListItem';
import { UserModal } from '../../components/UserModal/UserModal';
import { ListTypes } from '../../types/ListTypes';
import { UserInfo } from '../../types/UserInfo';

import styles from './List.module.scss';

export const List: React.FC<ListTypes> = ({ list, setList }) => {
  const [userToEdit, setUserToEdit] = useState<UserInfo | null>(null);
  const [isModal, setIsModal] = useState(false);
  const [isFilter, setIsFilter] = useState([]);

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
    setIsModal(!isModal);
  };

  return (
    <div className={styles.main} data-testid="all-user-id">
      <div className={styles.filter}></div>
      <Filter list={list} setIsFilter={setIsFilter} />
      <div className={styles.list}>
        <button className={styles.button} onClick={() => handleEdit()}>
          Add Users
        </button>
        <ListItem list={list} removeUser={removeUser} handleEdit={handleEdit} isFilter={isFilter} />
        {isModal && (
          <UserModal
            setIsModal={setIsModal}
            isModal={isModal}
            list={list}
            setList={setList}
            userToEdit={userToEdit}
          />
        )}
      </div>
    </div>
  );
};
