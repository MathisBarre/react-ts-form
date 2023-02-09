import { useDescription, useTsController } from "@ts-react/form";
import React from "react";

interface TextInputProps {}

const TextInput = ({}: TextInputProps) => {
  const {
    field: { value, onChange },
    error,
  } = useTsController<string>();

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
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>

      {error && <div style={{ color: "red" }}>{error.errorMessage}</div>}
    </div>
  );
};

export default TextInput;
