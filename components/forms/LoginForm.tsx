"use client";

import { useLogin } from "@/hooks";
import { Form } from "@/components/forms";

export default function LoginForm() {
  const { email, password, isLoading, onChange, onSubmit } = useLogin();

  const config = [
    {
      labelText: "Direccion de correo elctrónico",
      labelId: "email",
      type: "email",
      value: email,
      required: true,
    },
    {
      labelText: "Contraseña",
      labelId: "password",
      type: "password",
      value: password,
      link: {
        linkText: "Olvidaste tu contraseña?",
        linkUrl: "/password-reset",
      },
      required: true,
    },
  ];
  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText="Entrar"
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}
