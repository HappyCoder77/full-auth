import { useResetPasswordMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

interface RequestPasswordFormData {
  email: string;
}

export default function useResetPassword() {
  const [resetPasword, { isLoading }] = useResetPasswordMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestPasswordFormData>({
    defaultValues: {
      email: "",
    },
  });

  const submit = (data: RequestPasswordFormData) => {
    resetPasword(data)
      .unwrap()
      .then(() => {
        toast.success(
          "Te hemos enviado un link con instrucciones para el cambio de contraseña al correo que ingresaste"
        );
      })
      .catch(() => {
        toast.error("Ha ocurrido un error con tu solicitud");
      });
  };

  const onSubmit = handleSubmit(submit);

  return {
    register,
    isLoading,
    onSubmit,
    errors,
  };
}
