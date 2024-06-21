import { ButtonProps } from '../../../types/types';
import styles from './Button.module.scss';

const Button = ({ text }: ButtonProps) => {
  return <button className={styles.button}>{text}</button>;
};

export default Button;
