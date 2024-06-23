const changingBalance = (double, win, bet) => {
  if (double) {
    if (win) {
      return bet * 2;
    } else {
      return -bet;
    }
  } else {
    if (win) {
      return bet * 3;
    } else {
      return -bet;
    }
  }
};

export default changingBalance;
