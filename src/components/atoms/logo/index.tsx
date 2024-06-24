import { LogoProps } from '../../../types/types';

import styles from './Logo.module.scss';

const Logo = ({ text }: LogoProps) => {
  return <h1 className={styles.logo}>{text}</h1>;
};

export default Logo;
