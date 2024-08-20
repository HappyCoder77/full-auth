"use client";

import { Form } from "@/components/forms";
import { useResetPasswordConfirm } from "@/hooks";

interface Props {
  uid: string;
  token: string;
}
export default function PasswordResetConfirmForm({ uid, token }: Props) {
  // const { uid, token } = params;
  const { new_password, re_new_password, isLoading, onChange, onSubmit } =
    useResetPasswordConfirm(uid, token);

  const config = [
    {
      labelText: "Escribe tu nueva contraseña",
      labelId: "new_password",
      type: "password",
      value: new_password,
      required: true,
    },
    {
      labelText: "Confirma tu nueva contraseña",
      labelId: "re_new_password",
      type: "password",
      value: re_new_password,
      required: true,
    },
  ];
  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText="Establecer nueva contraseña"
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}
