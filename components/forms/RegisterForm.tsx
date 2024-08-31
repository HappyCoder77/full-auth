"use client";

import { useRegister } from "@/hooks";
import { Form } from "@/components/forms";

export default function RegisterForm() {
  const { register, isLoading, onSubmit, errors, watch } = useRegister();

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
    {
      labelText: "Crea tu Contraseña",
      labelId: "password",
      type: "password",
      required: {
        value: true,
        message: "La contraseña es requerida",
      },
    },
    {
      labelText: "Confirma tu contraseña",
      labelId: "re_password",
      type: "password",
      required: {
        value: true,
        message: "La confirmación de la contraseña es requerida",
      },
      validate: {
        passwordsNotEqual: (fieldValue: string) => {
          return fieldValue === watch("password") || "Las contraseñas no coinciden"
        }
      }
    },
  ];

  return (
    <Form
      config={config}
      register={register}
      isLoading={isLoading}
      btnText="Registrarme"
      onFormSubmit={onSubmit}
      errors={errors}
    />
  );
}
