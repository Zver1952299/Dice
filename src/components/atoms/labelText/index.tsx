import { LabelTextProps } from '../../../types/types';
import styles from './LabelText.module.scss';

const LabelText = ({ text }: LabelTextProps) => {
  return <p className={styles.text}>{text}</p>;
};

export default LabelText;
