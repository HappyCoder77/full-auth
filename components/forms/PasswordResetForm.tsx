"use client";

import { Form } from "@/components/forms";
import { useResetPassword } from "@/hooks";

export default function PasswordResetForm() {
  const { register, isLoading, onSubmit, errors } = useResetPassword();
  const config = [
    {
      labelText: "Dirección de correo electrónico",
      labelId: "email",
      type: "email",
      required: {
        value: true,
        message: "El correo es requerido",
      },
      pattern: {
        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        message: "El formato del correo es inválido",
      },
    },
  ];
  return (
    <Form
      config={config}
      register={register}
      isLoading={isLoading}
      btnText="Enviar link de activación"
      onFormSubmit={onSubmit}
      errors={errors}
    />
  );
}
