import { useModal } from '../../../stores/useModal';
import Button from '../../atoms/button';
import styles from './headerButtonBlock.module.scss';

const HeaderButtonBlock = () => {
  const onChangeIsOpen = useModal((state) => state.changeOnTrue);
  return (
    <div className={styles.block}>
      <Button text="Вход" type="purple" onOpen={onChangeIsOpen} id="6" />
      <Button text="Регистрация" type="purple" id="7" />
    </div>
  );
};

export default HeaderButtonBlock;
