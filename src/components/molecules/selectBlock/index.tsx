import { useState } from 'react';
import Select, { components, DropdownIndicatorProps } from 'react-select';
import LabelText from '../../atoms/labelText';

import arrow from '/arrows/arrowDown.svg';
import './SelectBlock.scss';
import { useDice } from '../../../stores/useDice';

const SelectBlock = () => {
  const [value, setValue] = useState('1');
  const setBet = useDice((state) => state.setBet);

  function DropdownIndicator(props: DropdownIndicatorProps<string>) {
    return (
      <components.DropdownIndicator {...props}>
        <img src={arrow} alt="arrow" />
      </components.DropdownIndicator>
    );
  }

  const handlerBet = (e) => {
    setValue(e.value);
    setBet(e.value);
  };

  return (
    <div className="block">
      <LabelText text={'Размер ставки'} />
      <Select
        classNamePrefix="react-select"
        onChange={(e) => handlerBet(e)}
        isSearchable={false}
        options={[
          { value: '1', label: '1.00' },
          { value: '5', label: '5.00' },
          { value: '10', label: '10.00' },
          { value: '15', label: '15.00' },
          { value: '20', label: '20.00' },
        ]}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator,
        }}
        placeholder={'1.00' || value}
      />
    </div>
  );
};

export default SelectBlock;
