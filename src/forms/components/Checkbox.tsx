import { useDescription, useTsController } from "@ts-react/form";
import React from "react";

interface CheckboxProps {}

const Checkbox = ({}: CheckboxProps) => {
  const {
    field: { value },
    error,
  } = useTsController<boolean>();

  const { label } = useDescription();

  return (
    <>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "0.25rem",
          marginBottom: "0.25rem",
        }}
      >
        <input
          type="checkbox"
          id="horns"
          name="horns"
          style={{ marginRight: "0.5rem" }}
          checked={value}
        ></input>
        <span>{label}</span>
      </label>

      {error && <div style={{ color: "red" }}>{error.errorMessage}</div>}
    </>
  );
};

export default Checkbox;
