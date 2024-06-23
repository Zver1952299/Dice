import { useDice } from '../../../stores/useDice';
import clsx from 'clsx';

import styles from './PlateWithNumber.module.scss';

const PlateWithNumber = () => {
  const num = useDice((state) => state.number);

  return <div className={clsx(styles.plate, { [styles.plateDisabled]: !num })}>{num}</div>;
};

export default PlateWithNumber;
