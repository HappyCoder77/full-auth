import { useAppDispatch } from "@/redux/hooks";
import { useLoginMutation } from "@/redux/features/authApiSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { setAuth } from "@/redux/features/authSlice";
import { useForm } from "react-hook-form";

/**
 * Hook personalizado para manejar el inicio de sesión de usuarios.
 *
 * Este hook utiliza `react-hook-form` para la gestión de formularios y validación,
 * y `redux` para manejar el estado de autenticación. También utiliza `next/router`
 * para la navegación y `react-toastify` para mostrar notificaciones.
 *
 * @hook
 * @returns {Object} - Retorna un objeto con las propiedades y funciones necesarias para el formulario de inicio de sesión.
 * @returns {UseFormRegister<FormValues>} register - Función de registro para los campos del formulario.
 * @returns {boolean} isLoading - Indica si la solicitud de inicio de sesión está en curso.
 * @returns {Function} onFormSubmit - Función para manejar el envío del formulario.
 * @returns {Object} errors - Objeto que contiene los errores de validación del formulario.
 */

interface FormValues {
  email: string;
  password: string;
}
export default function useLogin() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    login(data)
      .unwrap()
      .then(() => {
        dispatch(setAuth());
        toast.success("Sesion iniciada con éxito");
        router.push("/dashboard");
      })
      .catch(() => {
        toast.error("Ha ocurrido un error al iniciar sesión");
      });
  };

  const onFormSubmit = handleSubmit(onSubmit);

  return {
    register,
    isLoading,
    onFormSubmit,
    errors,
  };
}
