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
      labelText: "Set new password",
      labelId: "new_password",
      type: "password",
      value: new_password,
      required: true,
    },
    {
      labelText: "Confirm new password",
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
      btnText="Set new pasword"
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}
