import { useState, type HTMLInputTypeAttribute } from 'react';

import styles from './index.module.scss';

interface CustomInputProps {
  type: HTMLInputTypeAttribute;
  placeholder?: string;
}

export const CustomInput = ({ type, placeholder }: CustomInputProps) => {
  const [value, setValue] = useState('');
  return (
    <input
      className={`${styles.base} ${styles.input}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
