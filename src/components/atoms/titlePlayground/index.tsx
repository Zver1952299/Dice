import { useAuth } from '../../../stores/useAuth';
import { useDice } from '../../../stores/useDice';

import { TitlePlaygroundProps } from '../../../types/types';

import styles from './TitlePlayground.module.scss';

const TitlePlayground = ({ text }: TitlePlaygroundProps) => {
  const isWin = useDice((state) => state.isWin);
  const value = useDice((state) => state.value);
  const winAmount = useDice((state) => state.winAmount);
  const isAuth = useAuth((state) => state.isAuth);

  const supText = () => {
    if (isWin) {
      return <p className={styles.supText}>Вы выиграли {winAmount} TND!</p>;
    } else {
      return <p className={styles.supText}>Повезёт в следущий раз</p>;
    }
  };

  return (
    <>
      <p className={styles.text}>{text}</p>
      {value && isAuth && supText()}
    </>
  );
};

export default TitlePlayground;
