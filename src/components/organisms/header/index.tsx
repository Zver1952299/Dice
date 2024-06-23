import { useAuth } from '../../../stores/useAuth';
import Balance from '../../atoms/balance';
import Logo from '../../atoms/logo';
import HeaderButtonBlock from '../../molecules/headerButtonBlock';

import styles from './Header.module.scss';

const Header = () => {
  const isAuth = useAuth((state) => state.isAuth);

  return (
    <div className={styles.header}>
      <Logo text="Test Game" />
      {isAuth ? <Balance /> : <HeaderButtonBlock />}
    </div>
  );
};

export default Header;
