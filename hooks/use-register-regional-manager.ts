"use client";

import { useRegisterRegionalManagerMutation } from "@/redux/features/regionalManagerApiSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { RegisterRegionalManagerParams } from "@/types/interfaces";

export default function useRegisterRegionalManager() {
  const [emailValidationErrors, setEmailValidationErrors] = useState<string[]>(
    []
  );

  const router = useRouter();
  const [regionalManagerRegister, { isLoading }] =
    useRegisterRegionalManagerMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterRegionalManagerParams>({
    defaultValues: {
      first_name: "",
      middle_name: "",
      last_name: "",
      second_last_name: "",
      gender: "",
      birthdate: "",
      email: "",
    },
  });

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "email" && emailValidationErrors.length > 0) {
        setEmailValidationErrors([]);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, emailValidationErrors]);

  const submit = (data: RegisterRegionalManagerParams) => {
    regionalManagerRegister(data)
      .unwrap()
      .then(() => {
        toast.success("Gerente regional creado exitosamente", {
          autoClose: 3000,
        });
        router.push("/dashboard");
      })
      .catch((error) => {
        if (error.data && error.data.email) {
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
    emailValidationErrors,
    watch,
  };
}
