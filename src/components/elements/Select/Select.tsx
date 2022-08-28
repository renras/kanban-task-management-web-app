import Select from "react-select";

import styles from "./Select.module.scss";

export interface Option<T> {
  value: T;
  label: string;
}

interface Props<T> {
  options: Option<T>[];
  onChange: (option: Option<T> | null) => void;
  value: Option<T>;
  id?: string;
}

const SelectComponent = <T extends string | number | null>({
  id,
  options,
  onChange,
  value,
}: Props<T>) => {
  return (
    <Select
      id={id}
      className={styles.select}
      options={options}
      onChange={(value) => onChange(value)}
      value={value}
    />
  );
};

export default SelectComponent;
