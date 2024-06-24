import clsx from 'clsx';

import { useDice } from '../../../stores/useDice';

import styles from './PlateWithNumber.module.scss';

const PlateWithNumber = () => {
  const num = useDice((state) => state.number);

  return <div className={clsx(styles.plate, { [styles.plateDisabled]: !num })}>{num}</div>;
};

export default PlateWithNumber;
