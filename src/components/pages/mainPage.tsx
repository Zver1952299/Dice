import { useEffect, useState } from 'react';

import { useAuth } from '../../stores/useAuth';
import { useDice } from '../../stores/useDice';
import { useModal } from '../../stores/useModal';

import Button from '../atoms/button';
import Input from '../atoms/input';
import LabelText from '../atoms/labelText';
import ErrorText from '../atoms/errorText';
import ModalBlock from '../molecules/modalBlock';
import Header from '../organisms/header';
import Modal from '../organisms/modal';
import Playground from '../organisms/playground';
import StartView from '../organisms/startView';

import styles from './mainPage.module.scss';

const MainPage = () => {
  const isOpen = useModal((state) => state.isOpen);
  const total = useDice((state) => state.total);
  const setTotalFromLocal = useDice((state) => state.setTotalFromLocal);
  const getUser = useAuth((state) => state.getUser);
  const setUser = useAuth((state) => state.setUser);
  const setPassword = useAuth((state) => state.setPassword);
  const isAuth = useAuth((state) => state.isAuth);

  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');

  useEffect(() => {
    setUser(userName);
    setPassword(pass);
  }, [pass, setPassword, userName, setUser]);

  useEffect(() => {
    getUser();
    if (window.localStorage.getItem('total')) {
      setTotalFromLocal(+window.localStorage.getItem('total')!);
    }
  }, [getUser, setTotalFromLocal]);

  return (
    <div className={styles.main}>
      <Header />
      <Playground />
      <Modal isOpen={isOpen}>
        <ModalBlock>
          <Input
            type="text"
            placeholder="Login"
            value={userName}
            onChange={setUserName}
            isError={/^$/.test(userName)}
          />
          {/^$/.test(userName) && <ErrorText text="Введите логин" top="94" />}
          <Input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={setPass}
            isError={/^$/.test(pass)}
          />
          {/^$/.test(pass) && <ErrorText text="Введите пароль" top="148" />}
          <Button type="purple" text="Войти" enter={true} isError={!userName || !pass} />
        </ModalBlock>
      </Modal>
      <Modal isOpen={total <= 0}>
        <ModalBlock>
          <LabelText text="У вас кончились деньги" />
        </ModalBlock>
      </Modal>
      {!isAuth && <StartView />}
    </div>
  );
};

export default MainPage;
