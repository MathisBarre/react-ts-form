import { useDescription, useTsController } from "@ts-react/form";
import React from "react";

interface NumberInputProps {}

const NumberInput = ({}: NumberInputProps) => {
  const {
    field: { value, onChange },
    error,
  } = useTsController<number>();

  const { label } = useDescription();

  return (
    <div>
      <label
        style={{
          fontSize: 16,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {label}
        <input
          style={{ padding: "0.25rem" }}
          type="number"
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
        />
      </label>

      {error && <div style={{ color: "red" }}>{error.errorMessage}</div>}
    </div>
  );
};

export default NumberInput;
