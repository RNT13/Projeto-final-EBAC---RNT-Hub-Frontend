"use client";

import { useField } from "formik";
import { BaseMaskedInput } from "./BaseMaskedInput";

type FormikMaskedInputProps = { name: string; } & Omit<React.ComponentProps<typeof BaseMaskedInput>,
  "value" | "onChange" | "error" | "touched"
>;

export const FormikMaskedInput = ({
  name,
  ...props
}: FormikMaskedInputProps) => {
  const [field, meta, helpers] = useField(name);

  return (
    <BaseMaskedInput
      {...props}
      value={field.value}
      onChange={helpers.setValue}
      error={meta.error}
      touched={meta.touched}
    />
  );
};
