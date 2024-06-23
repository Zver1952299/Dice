import { ArrowProps } from '../../../types/types';

const Arrow = ({ type }: ArrowProps) => {
  if (type == 'up') {
    return <img src="arrows/arrowUp.svg" alt="arrow" />;
  } else {
    return <img src="arrows/arrowDown.svg" alt="arrow" />;
  }
};

export default Arrow;
