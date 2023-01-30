import Checkbox from "@/forms/components/Checkbox";
import NumberInput from "@/forms/components/NumberInput";
import TextInput from "@/forms/components/TextInput";
import { createTsForm } from "@ts-react/form";
import { ReactNode } from "react";
import { z } from "zod";

const mapping = [
  [z.string(), TextInput],
  [z.boolean(), Checkbox],
  [z.number(), NumberInput],
] as const;

function SimpleFormWrapper({
  children,
  onSubmit,
  sendText
}: {
  children: ReactNode;
  onSubmit: () => void;
  sendText: string
}) {
  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
    >
      {children}
      <input type="submit" style={{paddingTop: "0.5rem", paddingBottom: "0.5rem"}} value={sendText} />
    </form>
  );
}

export const SimpleForm = createTsForm(mapping, {
  FormComponent: SimpleFormWrapper,
});
