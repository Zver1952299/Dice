import { PulseLoader } from 'react-spinners';

import { useAuth } from '../../../stores/useAuth';

import Balance from '../../atoms/balance';
import Logo from '../../atoms/logo';
import HeaderButtonBlock from '../../molecules/headerButtonBlock';

import styles from './Header.module.scss';

const Header = () => {
  const isAuth = useAuth((state) => state.isAuth);
  const loading = useAuth((state) => state.loading);

  const rightSide = isAuth ? <Balance /> : <HeaderButtonBlock />;

  return (
    <div className={styles.header}>
      <Logo text="Test Game" />
      {loading ? <PulseLoader color="#fff" loading={loading} /> : rightSide}
    </div>
  );
};

export default Header;
