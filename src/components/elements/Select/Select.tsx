import Select from "react-select";
import getCustomStyles from "./customStyles";

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
  className?: string;
}

const SelectComponent = <T extends string | number | null>({
  id,
  options,
  onChange,
  value,
  className,
}: Props<T>) => {
  return (
    <Select
      styles={getCustomStyles<T>()}
      id={id}
      className={`${styles.select} ${className}`}
      options={options}
      onChange={(value) => onChange(value)}
      value={value}
      isMulti={false}
      components={{
        IndicatorSeparator: () => null,
      }}
    />
  );
};

export default SelectComponent;
