"use client";

import { useRegisterCollectorMutation } from "@/redux/features/collectorApiSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Collector } from "@/types/interfaces";

export default function useRegisterDealer() {
  const router = useRouter();
  const [registerCollector, { isLoading }] = useRegisterCollectorMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Collector>({
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

  const submit = (data: Collector) => {
    registerCollector(data)
      .unwrap()
      .then(() => {
        toast.success("Perfil creado exitosamente", {
          autoClose: 3000,
        });
        router.push("/dashboard");
        window.location.reload();
      })
      .catch((error) => {
        if (error.data && error.data.email) {
          console.log(error);
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
    watch,
  };
}
