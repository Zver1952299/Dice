import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import changingBalance from '../utils/changingBalance';
import { UseDiceType } from '../types/types';

export const useDice = create<UseDiceType, ['zustand/immer', unknown][]>(
  immer((set) => ({
    total: 100,
    winAmount: 0,
    value: null,
    bet: 1,
    btns: { 0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false },
    number: 0,
    isActiveStart: false,
    isWin: false,
    setValue: (newValue) => {
      set((state) => {
        state.value = newValue;

        if (state.btns[4]) {
          state.isWin = +newValue == state.number;
          state.total += changingBalance(false, state.isWin, state.bet);
          state.winAmount = Math.abs(changingBalance(false, state.isWin, state.bet));
        } else if (state.btns[2]) {
          state.isWin = +newValue < 4;
          state.total += changingBalance(true, state.isWin, state.bet);
          state.winAmount = Math.abs(changingBalance(true, state.isWin, state.bet));
        } else if (state.btns[3]) {
          state.isWin = +newValue > 3;
          state.total += changingBalance(true, state.isWin, state.bet);
          state.winAmount = Math.abs(changingBalance(true, state.isWin, state.bet));
        } else if (state.btns[0]) {
          state.isWin = !(+newValue % 2);
          state.total += changingBalance(true, state.isWin, state.bet);
          state.winAmount = Math.abs(changingBalance(true, state.isWin, state.bet));
        } else if (state.btns[1]) {
          state.isWin = !!(+newValue % 2);
          state.total += changingBalance(true, state.isWin, state.bet);
          state.winAmount = Math.abs(changingBalance(true, state.isWin, state.bet));
        }
      });
      set((state) => {
        window.localStorage.setItem('total', state.total.toString());
      });
    },
    setBet: (newBet) => set({ bet: newBet }),
    setBtns: (id) =>
      set((state) => {
        if (id < 4) {
          for (const property in state.btns) {
            state.btns[property] = false;
          }
          state.btns[id] = true;
          state.number = 0;
        } else if (id == 4) {
          for (const property in state.btns) {
            state.btns[property] = false;
          }
          state.btns[id] = true;
          if (+state.number < 6) {
            state.number += 1;
          } else {
            state.number = 0;
            state.btns[id] = false;
          }
        }
      }),
    onIsActiveStart: () =>
      set((state) => {
        for (const property in state.btns) {
          if (state.btns[property]) {
            state.isActiveStart = false;
            break;
          } else {
            state.isActiveStart = true;
          }
        }
      }),
    setTotal: () => set({ total: 100 }),
    setTotalFromLocal: (sum) => set({ total: sum }),
  })),
);
