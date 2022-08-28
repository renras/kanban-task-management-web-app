import Select, { StylesConfig } from "react-select";

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
  const customStyles: StylesConfig<Option<T>> = {
    singleValue: (provided) => ({
      ...provided,
      color: "black",
      padding: "0",
    }),
    control: (provided, state) => ({
      ...provided,
      border: "1px solid #e4ebfa",
      height: "40px",
      boxShadow: state.isFocused ? "0 0 0 1px #635fc7" : "0",
      cursor: "pointer",
      "&:hover": {
        border: "1px solid #e4ebfa",
      },
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#635fc7",
    }),
  };

  return (
    <Select
      styles={customStyles}
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
