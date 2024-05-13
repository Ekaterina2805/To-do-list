import { ChangeEvent, useState } from "react";

export const useInput = (
  trim = true,
  initialValue = "",
  pattern = "/.*/",
  onUpdate?: (value: string) => void
): [string, (event: ChangeEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = trim ? event.target.value.trim() : event.target.value;

    setValue(value);
    onUpdate && onUpdate(value);
  };

  return [value, handleChange];
};