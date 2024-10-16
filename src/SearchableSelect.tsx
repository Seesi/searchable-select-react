import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export type Props<T> = {
  title?: string;
  optionLabel: keyof T;
  options: T[];
  onSelected: (selectedItems: T) => void;
  placeholder?: string;
  limitTags?: number;
  value: T;
  onChange: (value: T) => void;
};

export function SearchableSelect<T>({
  title,
  optionLabel,
  options,
  onSelected,
  placeholder,
  limitTags,
  value,
  onChange,
}: Props<T>) {
  return (
    <Autocomplete
      id="checkboxes-tags-demo"
      onChange={(_, newValue) => {
        if (newValue !== null) {
          onChange(newValue);
          const selectedOptions = newValue as T;
          onSelected(selectedOptions);
        }
      }}
      limitTags={limitTags ?? 2}
      value={value}
      options={options}
      disableCloseOnSelect
      getOptionLabel={(option) => String(option[optionLabel])}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            {String(option[optionLabel])}
          </li>
        );
      }}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={title ?? "Checkboxes"}
          placeholder={placeholder ?? "Select options"}
        />
      )}
    />
  );
}
