import React from "react";
import Select from "react-select";

interface OptionType {
  label: string;
  value: number;
}

interface MultiSelectProps {
  id: string;
  name: string;
  options: OptionType[];
  value: OptionType[];
  onChange: (selectedOptions: OptionType[] | any) => void;
  error?: string | string[];
  touched?: boolean;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  id,
  name,
  options,
  value,
  onChange,
  error,
  touched,
}) => (
  <>
    <Select
      isMulti
      id={id}
      name={name}
      options={options}
      value={value}
      onChange={onChange}
      className="basic-single"
      classNamePrefix="select"
    />
    {touched && error && <div className="text-red-500 text-xs">{error}</div>}
  </>
);

export default MultiSelect;
