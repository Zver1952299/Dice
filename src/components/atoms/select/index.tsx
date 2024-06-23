import { useState } from 'react';
import styles from './Select.module.scss';

const Select = () => {
  const [value, setValue] = useState('');

  const handle = (e) => {
    setValue(e.target.value);
  };

  return <></>;
};

export default Select;
