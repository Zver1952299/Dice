import { useEffect } from 'react';
import clsx from 'clsx';
import { PulseLoader } from 'react-spinners';

import { useDice } from '../../../stores/useDice';
import { useAuth } from '../../../stores/useAuth';

import LabelText from '../labelText';

import { ButtonProps } from '../../../types/types';

import styles from './Button.module.scss';

const Button = ({ text, type, dice, onOpen, id, plate, enter, isError }: ButtonProps) => {
  const login = useAuth((state) => state.login);
  const isUnauthorized = useAuth((state) => state.isUnauthorized);
  const setTimer = useAuth((state) => state.setTimer);
  const loading = useAuth((state) => state.loading);
  const btns = useDice((state) => state.btns);
  const setBtns = useDice((state) => state.setBtns);
  const onStart = useDice((state) => state.onIsActiveStart);

  const clickBtn = () => {
    if (dice && dice.current) {
      const elem = dice.current.children[0] as HTMLButtonElement;
      elem.click();
    }
    if (onOpen) {
      onOpen();
    }
    if (id) {
      setBtns(+id);
    }
    onStart();
  };

  const onAuth = () => {
    login();
    setTimer();
  };

  useEffect(() => {
    onStart();
  }, [onStart]);

  const isUnauthorizedTimer = isUnauthorized ? <LabelText text="Неверный логин/пароль" /> : text;

  if (id) {
    type = btns[+id] ? 'active' : type;
  }

  if (enter) {
    return (
      <button
        disabled={isError}
        onClick={() => onAuth()}
        className={clsx(
          styles.button,
          { [styles.buttonPurpleActive]: type == 'active' },
          { [styles.buttonGreenDefaultDisabled]: type == 'greenDisabled' },
          { [styles.buttonGreenDefault]: type == 'green' },
          { [styles.buttonPurpleDefault]: type == 'purple' },
          { [styles.buttonPurpleDefaultDisabled]: type == 'purpleDisabled' },
          { [styles.buttonPurpleDefaultDisabled]: isError == true },
        )}>
        {loading ? <PulseLoader color="#fff" size={19} loading={loading} /> : isUnauthorizedTimer}
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
