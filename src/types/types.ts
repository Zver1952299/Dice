import { ReactNode } from 'react';

export type LogoProps = {
  text: string;
};

export type ButtonProps = {
  text: string;
  type: string;
  dice?: React.RefObject<HTMLDivElement>;
  onOpen?: () => void;
  id?: string;
  plate?: JSX.Element;
  enter?: boolean;
  isError?: boolean;
};

export type ArrowProps = {
  type: string;
};

export type CrossProps = {
  type: string;
};

export type ModalType = {
  children: ReactNode;
  isOpen: boolean;
};

export type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  isError: boolean;
};

export type LabelTextProps = {
  text: string;
};

export type TitlePlaygroundProps = {
  text: string;
};

export type UseAuthType = {
  user: string;
  password: string;
  loading: boolean;
  error: string | null;
  isAuth: boolean;
  isUnauthorized: boolean;
  isValidation: boolean;
  setIsValidation: (bool: boolean) => void;
  setUser: (userName: string) => void;
  setPassword: (pass: string) => void;
  login: () => void;
  getUser: () => void;
  setIsAuth: (bool: boolean) => void;
  setIsUnauthorized: (bool: boolean) => void;
  setTimer: () => void;
};

export type UseDiceType = {
  total: number;
  winAmount: number;
  value: string | null;
  bet: number;
  btns: { [key: number]: boolean };
  number: number;
  isActiveStart: boolean;
  isWin: boolean;
  setValue: (newValue: string) => void;
  setBet: (newBet: number) => void;
  setBtns: (id: number) => void;
  onIsActiveStart: () => void;
  setTotal: () => void;
  setTotalFromLocal: (num: number) => void;
};

export type UseModalType = {
  isOpen: boolean;
  changeOnTrue: () => void;
  changeOnFlase: () => void;
};
