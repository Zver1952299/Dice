import clsx from 'clsx';

import { ButtonProps } from '../../../types/types';
import styles from './Button.module.scss';
import { useDice } from '../../../stores/useDice';
import { useEffect } from 'react';
import { useAuth } from '../../../stores/useAuth';

const Button = ({ text, type, dice, onOpen, id, plate, enter }: ButtonProps) => {
  const clickBtn = () => {
    if (dice && dice.current) {
      const elem = dice.current.children[0] as HTMLButtonElement;
      elem.click();
    }
    if (onOpen) {
      onOpen();
    }
    if (id) {
      setBtns(id);
    }
    onStart();
  };

  const login = useAuth((state) => state.login);

  const onAuth = () => {
    login();
  };

  const btns = useDice((state) => state.btns);
  const setBtns = useDice((state) => state.setBtns);
  const onStart = useDice((state) => state.onIsActiveStart);

  useEffect(() => {
    onStart();
  }, [onStart]);

  type = btns[id] ? 'active' : type;

  if (enter) {
    return (
      <button
        onClick={() => onAuth()}
        className={clsx(
          styles.button,
          { [styles.buttonPurpleActive]: type == 'active' },
          { [styles.buttonGreenDefaultDisabled]: type == 'greenDisabled' },
          { [styles.buttonGreenDefault]: type == 'green' },
          { [styles.buttonPurpleDefault]: type == 'purple' },
          { [styles.buttonPurpleDefaultDisabled]: type == 'purpleDisabled' },
        )}>
        {text}
      </button>
    );
  }

  if (plate) {
    return (
      <button
        onClick={() => clickBtn()}
        className={clsx(
          styles.button,
          { [styles.buttonPurpleActive]: type == 'active' },
          { [styles.buttonGreenDefault]: type == 'green' },
          { [styles.buttonGreenDefaultDisabled]: type == 'greenDisabled' },
          { [styles.buttonPurpleDefault]: type == 'purple' },
          { [styles.buttonPurpleDefaultDisabled]: type == 'purpleDisabled' },
        )}>
        <div className={styles.wrapper}>
          {text}
          {plate}
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={() => clickBtn()}
      className={clsx(
        styles.button,
        { [styles.buttonPurpleActive]: type == 'active' },
        { [styles.buttonGreenDefaultDisabled]: type == 'greenDisabled' },
        { [styles.buttonGreenDefault]: type == 'green' },
        { [styles.buttonPurpleDefault]: type == 'purple' },
        { [styles.buttonPurpleDefaultDisabled]: type == 'purpleDisabled' },
      )}>
      {text}
    </button>
  );
};

export default Button;
