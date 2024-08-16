"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useResetPasswordMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify";

export default function useResetPassword() {
  const [resetPasword, { isLoading }] = useResetPasswordMutation();
  const [email, setEmail] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    resetPasword(email)
      .unwrap()
      .then(() => {
        toast.success("Request sent. Check your email for reset link");
      })
      .catch(() => {
        toast.error("Failed to send request");
      });
  };

  return {
    email,
    isLoading,
    onChange,
    onSubmit,
  };
}
