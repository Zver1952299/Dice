import styles from './Playground.module.scss';
import SelectBlock from '../../molecules/selectBlock';
import PlaygroundButtonBlock from '../../molecules/playgroundButtonBlock';
import TitlePlayground from '../../atoms/titlePlayground';
import Dice from 'react-dice-roll';

import dice1 from '/dice/1.jpg';
import dice2 from '/dice/2.jpg';
import dice3 from '/dice/3.jpg';
import dice4 from '/dice/4.jpg';
import dice5 from '/dice/5.jpg';
import dice6 from '/dice/6.jpg';
import { useRef } from 'react';
import { useDice } from '../../../stores/useDice';
import { useAuth } from '../../../stores/useAuth';

const Playground = () => {
  const diceRef = useRef<HTMLDivElement>(null);
  const setValue = useDice((state) => state.setValue);
  const value = useDice((state) => state.value);
  const isAuth = useAuth((state) => state.isAuth);

  const title = !value ? (
    <TitlePlayground text="Сделайте ставку" />
  ) : (
    <TitlePlayground text={`Результат броска кубика: ${value}`} />
  );

  return (
    <div className={styles.playground}>
      {isAuth && title}
      <div ref={diceRef} className={styles.diceDiv}>
        <Dice
          size={92}
          onRoll={(num) => setValue(num)}
          rollingTime={3000}
          faces={[dice1, dice2, dice3, dice4, dice5, dice6]}
        />
      </div>
      <SelectBlock />
      <PlaygroundButtonBlock diceRef={diceRef} />
    </div>
  );
};

export default Playground;
