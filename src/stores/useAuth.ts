import axios from 'axios';
import { create } from 'zustand';
import { useModal } from './useModal';

import { UseAuthType } from '../types/types';

export const useAuth = create<UseAuthType>((set, get) => ({
  user: '',
  password: '',
  loading: true,
  error: null,
  isAuth: false,
  isUnauthorized: false,
  isValidation: false,
  setIsValidation: (bool) => set({ isValidation: bool }),
  setUser: (name) => set({ user: name }),
  setPassword: (pass) => set({ password: pass }),
  setIsAuth: (bool) => set({ isAuth: bool }),
  setIsUnauthorized: (bool) => set({ isUnauthorized: bool }),
  login: async () => {
    set({ loading: true, isAuth: false, isUnauthorized: false });
    try {
      await axios
        .post(
          'https://api.lettobet.dev.bet4skill.com/api/client-login/',
          {
            login: get().user,
            password: get().password,
          },
          {
            withCredentials: true,
          },
        )
        .then(() => {
          set({ isAuth: true, isUnauthorized: false, loading: false });
          const onClose = useModal.getState().changeOnFlase;
          onClose();
        })
        .catch(() => {
          set({ isUnauthorized: true });
        });
    } catch (error) {
      console.log('err', error);
    } finally {
      set({ loading: false });
    }
  },
  getUser: () => {
    set({ loading: true, isAuth: false });
    try {
      axios
        .get('https://api.lettobet.dev.bet4skill.com/api/auth/me', {
          withCredentials: true,
        })
        .then(() => {
          set({ loading: false, isAuth: true });
        })
        .catch((err) => ({ err: err.response.data.message }));
    } catch (error) {
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },
  setTimer: () => {
    setTimeout(() => {
      set({ isUnauthorized: false });
    }, 2000);
  },
}));
