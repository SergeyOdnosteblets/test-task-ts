import React from 'react';
import { useForm } from 'react-hook-form';

import styles from './Filter.module.scss';

import { FilterFormTypes } from '../../types/FilterFormTypes';
import { FilterTypes } from '../../types/FilterTypes';
import { UserInfo } from '../../types/UserInfo';

export const Filter: React.FC<FilterTypes> = ({ list, setFilterUsers }) => {
  const { register, handleSubmit, reset } = useForm<FilterFormTypes>({
    mode: 'onBlur',
    defaultValues: {},
  });

  const onSubmit = (data: FilterFormTypes) => {
    const sortNames = list.filter((item: UserInfo) => {
      return data.firstName ? item.firstName.toLowerCase().includes(data.firstName) : item;
    });

    const sortAgeFrom = sortNames.filter((item: UserInfo) => {
      return data.ageFrom ? item.age >= data.ageFrom : item;
    });

    const sortAgeTo = sortAgeFrom.filter((item: UserInfo) => {
      return data.ageTo ? item.age <= data.ageTo : item;
    });

    const sortResult = sortAgeTo.filter((item: UserInfo) => {
      return data.gender ? item.gender.toLowerCase() === data.gender.toLowerCase() : item;
    });
    setFilterUsers(sortResult);
  };

  const handleReset = () => {
    setFilterUsers([]);
    reset();
  };

  return (
    <div>
      <div className={styles.form} onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className={styles.form__input}
            {...register('firstName')}
            placeholder="First name"
          />

          <input
            className={styles.form__input}
            type="number"
            {...register('ageFrom', {
              min: 0,
              max: 100,
            })}
            placeholder="Age From"
          />

          <input
            className={styles.form__input}
            type="number"
            {...register('ageTo', {
              min: 0,
              max: 100,
            })}
            placeholder="Age To"
          />

          <select className={styles.form__input} {...register('gender')}>
            <option value="">gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-binary">Non-binary</option>
          </select>

          <button type="submit" className={styles.form__button}>
            Save
          </button>
          <button type="submit" className={styles.form__button} onClick={handleReset}>
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};
