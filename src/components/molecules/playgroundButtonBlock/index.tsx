import { useDice } from '../../../stores/useDice';
import Button from '../../atoms/button';
import LabelText from '../../atoms/labelText';
import PlateWithNumber from '../../atoms/plateWithNumber';
import styles from './PlayGroundButtonBlock.module.scss';

const PlaygroundButtonBlock = ({ diceRef }: { diceRef: React.RefObject<HTMLDivElement> }) => {
  const isActiveStart = useDice((state) => state.isActiveStart);

  return (
    <div className={styles.wrapper}>
      <LabelText text="Варианты ставок" />
      <div className={styles.dobleButton}>
        <Button text="Четное" type="purple" id="0" />
        <Button text="Нечетное" type="purple" id="1" />
      </div>
      <div className={styles.dobleButton}>
        <Button text="От 1 до 3" type="purple" id="2" />
        <Button text="От 4 до 6" type="purple" id="3" />
      </div>
      <div className={styles.oneButton}>
        <Button text="Конкретное число" type="purple" id="4" plate={<PlateWithNumber />} />
      </div>
      <div className={styles.bottomButton}>
        <Button
          dice={diceRef}
          text="Сделать ставку"
          type={isActiveStart === true ? 'greenDisabled' : 'green'}
          id="5"
        />
      </div>
    </div>
  );
};

export default PlaygroundButtonBlock;
