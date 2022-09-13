import { useForm } from 'react-hook-form';
import { UserEdit } from '../../types/UserEdit';
import { UserInfo } from '../../types/UserInfo';

import styles from '../UserModal/UserModal.module.scss';

export const UserModalEdit: React.FC<UserEdit> = ({
  editUser,
  setIsEditModalActive,
  isEditModalActive,
  setEditUser,
  list,
  setList,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UserInfo>({
    mode: 'onBlur',
    defaultValues: editUser,
  });

  const onSubmit = (data: UserInfo) => {
    let index = list.findIndex((item) => item.id === data.id);
    list[index] = data;

    setList(list);
    setEditUser(null);
    setIsEditModalActive(!isEditModalActive);
  };

  return (
    <div
      className={isEditModalActive ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={() => {
        setIsEditModalActive(!isEditModalActive);
        setEditUser(null);
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
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-binary">Non-binary</option>
          </select>
          <div>{errors?.gender && <p className={styles.form__error}>Choose gender</p>}</div>

          <button type="submit" className={styles.form__button}>
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};
