import { create } from 'zustand';

type UseModalType = {
  isOpen: boolean;
  changeOnTrue: () => void;
  changeOnFlase: () => void;
};

export const useModal = create<UseModalType>((set) => ({
  isOpen: false,
  changeOnTrue: () => set({ isOpen: true }),
  changeOnFlase: () => set({ isOpen: false }),
}));
