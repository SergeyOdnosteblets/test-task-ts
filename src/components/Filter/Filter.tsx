import React from 'react';
import { useForm } from 'react-hook-form';
import { FilterTypes } from '../../types/FilterTypes';
import { FilterTypesForm } from '../../types/FilterTypesForm';
import { UserInfo } from '../../types/UserInfo';

import styles from './Filter.module.scss';

export const Filter: React.FC<FilterTypes> = ({ list, setIsFilter }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FilterTypesForm>({
    mode: 'onSubmit',
  });

  const onSubmit = (data: FilterTypesForm) => {
    if (data.firstName) {
      console.log('firstName');
      let filter = list.filter((item: UserInfo) => {
        return item.firstName.toLocaleLowerCase().includes(data.firstName.toLocaleLowerCase());
      });
      setIsFilter(filter);
    }

    if (data.gender) {
      console.log('gender');
      let filter = list.filter((item: UserInfo) => {
        return item.gender === data.gender;
      });
      setIsFilter(filter);
    }

    if (data.ageFrom && data.ageTo) {
      console.log('age');
      let filter = list.filter((item: UserInfo) => {
        return item.age > data.ageFrom && item.age < data.ageTo;
      });
      setIsFilter(filter);
    }
    reset();
  };

  const handleReset = () => {
    setIsFilter([]);
    reset();
  };

  return (
    <div
      onClick={() => {
        reset();
      }}>
      <div className={styles.form} onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className={styles.form__input}
            {...register('firstName')}
            placeholder="First name"
          />
          <button type="submit" className={styles.form__button}>
            Filter
          </button>

          <div className={styles.form__age}>
            <input
              type="number"
              {...register('ageFrom', {
                min: 0,
                max: 100,
              })}
              placeholder="Age from"
            />

            <input
              type="number"
              {...register('ageTo', {
                min: 0,
                max: 100,
              })}
              placeholder="Age to"
            />
          </div>
          <button type="submit" className={styles.form__button}>
            Filter
          </button>

          <select className={styles.form__input} {...register('gender')}>
            <option value="">gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-binary">Non-binary</option>
          </select>

          <button type="submit" className={styles.form__button}>
            Filter
          </button>
          <div>
            <button type="submit" className={styles.form__button} onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
