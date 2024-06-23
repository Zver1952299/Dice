import axios from 'axios';
import { create } from 'zustand';
import { useModal } from './useModal';

type UseAuthType = {
  user: string;
  password: string;
  loading: boolean;
  error: string | null;
  isAuth: boolean;
  setUser: (userName: string) => void;
  setPassword: (pass: string) => void;
  login: () => void;
  getUser: () => void;
  setIsAuth: (bool: boolean) => void;
};

export const useAuth = create<UseAuthType>((set, get) => ({
  user: '',
  password: '',
  loading: false,
  error: null,
  isAuth: false,
  setUser: (name) => set({ user: name }),
  setPassword: (pass) => set({ password: pass }),
  setIsAuth: (bool) => set({ isAuth: bool }),
  login: async () => {
    set({ loading: true, isAuth: false });
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
          set({ isAuth: true });
          const onClose = useModal.getState().changeOnFlase;
          onClose();
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
          set({ isAuth: true });

          //   const onClose = useModal.getState().changeOnFlase;
          //   onClose();
        })
        .catch((err) => ({ err: err.response.data.message }));
    } catch (error) {
      console.log(error);
    }
  },
}));
