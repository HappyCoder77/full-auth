"use client";

import { Form } from "@/components/forms";
import { useResetPasswordConfirm } from "@/hooks";

interface Props {
  uid: string;
  token: string;
}
export default function PasswordResetConfirmForm({ uid, token }: Props) {
  // const { uid, token } = params;
  const { register, isLoading, onSubmit, watch, errors } =
    useResetPasswordConfirm(uid, token);

  const config = [
    {
      labelText: "Escribe tu nueva contraseña",
      labelId: "new_password",
      type: "password",
      required: {
        value: true,
        message: "La contraseña es requerida",
      },
    },
    {
      labelText: "Confirma tu nueva contraseña",
      labelId: "re_new_password",
      type: "password",
      required: {
        value: true,
        message: "La confirmación de la contraseña es requerida",
      },
      validate: {
        passwordsNotEqual: (fieldValue: string) => {
          return (
            fieldValue === watch("password") || "Las contraseñas no coinciden"
          );
        },
      },
    },
  ];
  return (
    <Form
      config={config}
      register={register}
      isLoading={isLoading}
      btnText="Establecer nueva contraseña"
      onFormSubmit={onSubmit}
      errors={errors}
    />
  );
}
