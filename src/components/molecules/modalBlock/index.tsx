import { ReactNode } from 'react';

import { useDice } from '../../../stores/useDice';
import { useModal } from '../../../stores/useModal';

import Cross from '../../atoms/cross';

import styles from './ModalBlock.module.scss';

const ModalBlock = ({ children }: { children: ReactNode }) => {
  const onChangeIsOpenFalse = useModal((state) => state.changeOnFlase);
  const setTotal = useDice((state) => state.setTotal);

  const onClose = () => {
    onChangeIsOpenFalse();
    setTotal();
  };

  return (
    <div className={styles.block}>
      {children}
      <div className={styles.cross} onClick={() => onClose()}>
        <Cross />
      </div>
    </div>
  );
};

export default ModalBlock;
