import React from 'react';
import { useForm } from 'react-hook-form';

import styles from './Filter.module.scss';

import { FilterFormTypes } from '../../types/FilterFormTypes';
import { FilterTypes } from '../../types/FilterTypes';

export const Filter: React.FC<FilterTypes> = ({ setFilteredUsers, onSubmit }) => {
  const { register, handleSubmit, reset } = useForm<FilterFormTypes>({
    mode: 'onBlur',
    defaultValues: {},
  });

  const handleReset = () => {
    setFilteredUsers([]);
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

          <label>
            <input type="checkbox" {...register('gender')} value="Male" />
            Male
          </label>
          <label>
            <input type="checkbox" value="Female" {...register('gender')} />
            Female
          </label>
          <label>
            <input type="checkbox" value="Non-binary" {...register('gender')} />
            Non-binary
          </label>

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
