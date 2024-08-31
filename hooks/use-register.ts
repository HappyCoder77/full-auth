import { useRegisterMutation as useUserRegisterMutation } from "@/redux/features/authApiSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

interface RegisterFormData {
  email: string;
  password: string;
  re_password: string;
}

export default function useRegister() {
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
      .catch(() => {
        toast.error("Ha ocurrido un error durante el proceso de registro");
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
