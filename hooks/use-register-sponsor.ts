"use client";

import { useSponsorRegisterMutation } from "@/redux/features/sponsorApiSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

interface RegisterFormData {
  first_name: string;
  middle_name: string;
  first_last_name: string;
  second_last_name: string;
  gender: string;
  birthdate: string;
  email: string;
}

export default function useRegisterSponsor() {
  const [emailValidationErrors, setEmailValidationErrors] = useState<string[]>(
    []
  );

  const router = useRouter();
  const [sponsorRegister, { isLoading }] = useSponsorRegisterMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormData>({
    defaultValues: {
      first_name: "",
      middle_name: "",
      first_last_name: "",
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

  const submit = (data: RegisterFormData) => {
    sponsorRegister(data)
      .unwrap()
      .then(() => {
        toast.success("Sponsor creado exitosamente", {
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
