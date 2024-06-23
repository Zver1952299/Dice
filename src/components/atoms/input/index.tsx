import { InputProps } from '../../../types/types';
import styles from './Input.module.scss';

const Input = ({ type, placeholder, value, onChange }: InputProps) => {
  return (
    <>
      <div className={`${styles.div}`}>
        <input
          className={`${styles.input}`}
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
