import { create } from 'zustand';

import { UseModalType } from '../types/types';

export const useModal = create<UseModalType>((set) => ({
  isOpen: false,
  changeOnTrue: () => set({ isOpen: true }),
  changeOnFlase: () => set({ isOpen: false }),
}));
