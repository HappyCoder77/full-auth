// "use client";

// import { useState, ChangeEvent, FormEvent } from "react";
import { useResetPasswordConfirmMutation } from "@/redux/features/authApiSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

interface ResetPasswordConfirmFormData {
  password: string;
  re_password: string;
}

export default function useResetPasswordConfirm(uid: string, token: string) {
  const router = useRouter();

  const [resetPasswordConfirm, { isLoading }] =
    useResetPasswordConfirmMutation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetPasswordConfirmFormData>({
    defaultValues: {
      password: "",
      re_password: "",
    },
  });

  // const { new_password, re_new_password } = formData;
  // const onChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const submit = (data: ResetPasswordConfirmFormData) => {
    // event.preventDefault();
    resetPasswordConfirm({ uid, token, ...data })
      .unwrap()
      .then(() => {
        toast.success("Contraseña cambiado con éxito");
        router.push("/auth/login");
      })
      .catch(() => {
        toast.error("Ha ocurrido un error al cambiar la conaseña");
      });
  };

  const onSubmit = handleSubmit(submit);

  return {
    register,
    isLoading,
    onSubmit,
    watch,
    errors,
  };
}
