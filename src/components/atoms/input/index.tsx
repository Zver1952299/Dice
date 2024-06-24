import clsx from 'clsx';

import { InputProps } from '../../../types/types';

import styles from './Input.module.scss';

const Input = ({ type, placeholder, value, onChange, isError }: InputProps) => {
  return (
    <>
      <div className={clsx(styles.div, { [styles.error]: isError == true })}>
        <input
          className={clsx(styles.input, { [styles.error]: isError == true })}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </>
  );
};

export default Input;
