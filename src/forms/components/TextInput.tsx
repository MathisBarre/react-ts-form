import { useTsController } from "@ts-react/form";
import React from "react";

interface TextInputProps {
  label: string;
}

const TextInput = ({ label }: TextInputProps) => {
  const {
    field: { value, onChange },
    error,
  } = useTsController<string>();

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
