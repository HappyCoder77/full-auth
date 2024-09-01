import { useResetPasswordConfirmMutation } from "@/redux/features/authApiSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

interface ResetPasswordConfirmFormData {
  new_password: string;
  re_new_password: string;
}

export default function useResetPasswordConfirm(uid: string, token: string) {
  const router = useRouter();

  const [resetPasswordConfirm, { isLoading }] =
    useResetPasswordConfirmMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ResetPasswordConfirmFormData>({
    defaultValues: {
      new_password: "",
      re_new_password: "",
    },
  });

  const submit = (data: ResetPasswordConfirmFormData) => {
    resetPasswordConfirm({ uid, token, ...data })
      .unwrap()
      .then(() => {
        toast.success("Contraseña cambiado con éxito");
        router.push("/auth/login");
      })
      .catch(() => {
        toast.error("Ha ocurrido un error al cambiar la contraseña");
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
