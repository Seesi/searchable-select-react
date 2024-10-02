import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export type Props<T> = {
    title?: string;
  optionLabel: keyof T;
  options: T[];
  onSelected: (selectedItems: T[]) => void;
  placeholder?: string
  limitTags? : number
};

export function SearchableSelect<T>(
    { 
        title,
        optionLabel, 
        options, 
        onSelected, 
        placeholder,
        limitTags
    }: Props<T>) {
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const [value, setValue] = useState<T[]>([]);
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      onChange={(_, newValue) => {
        const selectedOptions = newValue as T[];
        setValue(selectedOptions);
        onSelected(selectedOptions);
      }}
      limitTags={limitTags ?? 2}
      value={value}
      options={options}
      disableCloseOnSelect
      getOptionLabel={(option) => String(option[optionLabel])}
      renderOption={(props, option, { selected }) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {String(option[optionLabel])}
          </li>
        );
      }}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label={title ?? "Checkboxes"} placeholder={placeholder ?? "Select options"} />
      )}
    />
  );
}
