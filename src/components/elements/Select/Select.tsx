import Select from "react-select";

import styles from "./Select.module.scss";

interface Option<T> {
  value: T;
  label: string;
}

interface Props<T> {
  options: Option<T>[];
  onChange: (option: Option<T> | null) => void;
  value: Option<T>;
}

const SelectComponent = <T extends string | number | null>({
  options,
  onChange,
  value,
}: Props<T>) => {
  return (
    <Select
      className={styles.select}
      options={options}
      onChange={(value) => onChange(value)}
      value={value}
    />
  );
};

export default SelectComponent;
