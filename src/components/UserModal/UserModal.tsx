import { useForm } from 'react-hook-form';
import { DataInfo } from '../../types/DataInfo';
import { UserModalTypes } from '../../types/UserModalTypes';

import styles from './UserModal.module.scss';

export const UserModal: React.FC<UserModalTypes> = ({
  isModalActive,
  setIsModalActive,
  list,
  setList,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<DataInfo>({
    mode: 'onBlur',
  });

  const onSubmit = (data: DataInfo) => {
    let newUser = { ...data, id: (Math.random() + 1).toString(36).substring(2) };

    setList([...list, newUser]);
    setIsModalActive(false);
    reset();
  };

  return (
    <div
      className={isModalActive ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={() => setIsModalActive(false)}>
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
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non-binary">Non-binary</option>
          </select>
          <div>{errors?.gender && <p className={styles.form__error}>Choose gender</p>}</div>

          <button type="submit" className={styles.form__button}>
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};
