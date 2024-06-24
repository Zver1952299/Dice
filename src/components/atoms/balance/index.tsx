import { useAuth } from '../../../stores/useAuth';
import { useDice } from '../../../stores/useDice';

import styles from './Balance.module.scss';

const Balance = () => {
  const total = useDice((state) => state.total);
  const setIsAuth = useAuth((state) => state.setIsAuth);

  const logout = () => {
    setIsAuth(false);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>{`${total} (TND)`}</p>;
      <img onClick={() => logout()} className={styles.img} src="/logout/logout.svg" alt="logout" />
    </div>
  );
};

export default Balance;
