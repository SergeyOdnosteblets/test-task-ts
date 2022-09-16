import React from 'react';
import { useForm } from 'react-hook-form';
import { UserToEdit } from '../../types/UserToEdit';
import { UserInfo } from '../../types/UserInfo';

import styles from './UserModal.module.scss';

export const UserModal: React.FC<UserToEdit> = ({
  setIsModalActive,
  isModalActive,
  list,
  setList,
  userToEdit,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<UserInfo>({
    mode: 'onBlur',
    defaultValues: userToEdit ? userToEdit : {},
  });

  const onSubmit = (data: UserInfo) => {
    if (data.id) {
      let index = list.findIndex((item) => item.id === data.id);
      list[index] = data;

      setList(list);
    } else {
      let newUser = { ...data, id: (Math.random() + 1).toString(36).substring(2) };

      setList([...list, newUser]);
    }
    setIsModalActive(!isModalActive);
    reset();
  };

  return (
    <div
      className={isModalActive ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={() => {
        setIsModalActive(!isModalActive);
        reset();
      }}>
      <div className={styles.form} onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className={styles.form__input}
            {...register('firstName', {
              required: true,
            })}
            placeholder="First name"
          />
          <div>{errors?.firstName && <p className={styles.form__error}>Enter First Name</p>}</div>

          <input
            className={styles.form__input}
            {...register('lastName', {
              required: true,
            })}
            placeholder="Last name"
          />
          <div>{errors?.country && <p className={styles.form__error}>Enter Last Name</p>}</div>

          <input
            className={styles.form__input}
            {...register('country', {
              required: true,
            })}
            placeholder="Country"
          />
          <div>{errors?.country && <p className={styles.form__error}>Enter country</p>}</div>

          <input
            className={styles.form__input}
            type="number"
            {...register('age', {
              required: true,
              min: 0,
              max: 100,
            })}
            placeholder="Age"
          />
          <div>{errors?.age && <p className={styles.form__error}>Enter age</p>}</div>

          <select
            className={styles.form__input}
            {...register('gender', {
              required: true,
            })}>
            <option value="">gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-binary">Non-binary</option>
          </select>
          <div>{errors?.gender && <p className={styles.form__error}>Choose gender</p>}</div>

          <button type="submit" className={styles.form__button}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
