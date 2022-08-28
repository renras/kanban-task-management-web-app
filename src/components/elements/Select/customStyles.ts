import { StylesConfig } from "react-select";
import { Option } from "./Select";

const getCustomStyles = <T extends string | number | null>(): StylesConfig<
  Option<T>
> => {
  return {
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
    option: (provided) => ({
      ...provided,
      color: "hsla(216, 15%, 57%, 1)",
      backgroundColor: "white",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "rgba(99, 95, 199, 10%)",
        color: "black",
      },
    }),
  };
};

export default getCustomStyles;
