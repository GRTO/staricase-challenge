import { FC, useState } from "react";
import { Checkbox as PrettyCheckBox } from "pretty-checkbox-react";
import { CheckboxProps } from "./types";

const CheckBox: FC<CheckboxProps> = ({
  label,
  initialValue = false,
  onChange,
}) => {
  const [checked, setChecked] = useState(initialValue);
  return (
    <PrettyCheckBox
      name={label}
      checked={checked}
      onChange={() => {
        setChecked((prevState) => !prevState);
        onChange?.(checked);
      }}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      {label}
    </PrettyCheckBox>
  );
};

export default CheckBox;
