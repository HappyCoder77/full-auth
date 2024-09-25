"use client";

import { useRegisterMutation as useUserRegisterMutation } from "@/redux/features/authApiSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

interface RegisterFormData {
  email: string;
  password: string;
  re_password: string;
}

export default function useRegister() {
  const [passwordValidationErrors, setPasswordValidationErrors] = useState<
    string[]
  >([]);
  const [emailValidationErrors, setEmailValidationErrors] = useState<string[]>(
    []
  );

  const router = useRouter();
  const [userRegister, { isLoading }] = useUserRegisterMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormData>({
    defaultValues: {
      email: "",
      password: "",
      re_password: "",
    },
  });

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "email" && emailValidationErrors.length > 0) {
        setEmailValidationErrors([]);
      }
      if (name === "password" && passwordValidationErrors.length > 0) {
        setPasswordValidationErrors([]);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, emailValidationErrors, passwordValidationErrors]);

  const submit = (data: RegisterFormData) => {
    userRegister(data)
      .unwrap()
      .then(() => {
        toast.success(
          "Registro exitoso. Te hemos enviado un link al correo que nos has proporcionado para completar el proceso de activación de tu cuenta",
          {
            autoClose: 7000,
          }
        );
        router.push("/auth/login");
      })
      .catch((error) => {
        if (error.data && error.data.password) {
          setPasswordValidationErrors(error.data.password);
        } else if (error.data && error.data.email) {
          console.log(error);
          setEmailValidationErrors(error.data.email);
        } else {
          toast.error(
            "Ha ocurrido un error interno durante el proceso de registro"
          );
        }
      });
  };

  const onSubmit = handleSubmit(submit);

  return {
    register,
    isLoading,
    onSubmit,
    errors,
    passwordValidationErrors,
    emailValidationErrors,
    watch,
  };
}
