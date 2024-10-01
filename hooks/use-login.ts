import { useAppDispatch } from "@/redux/hooks";
import { useLoginMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify";
import { setAuth, setUser } from "@/redux/features/authSlice";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

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
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();

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
      .then((user) => {
        dispatch(setAuth());
        dispatch(setUser(user));
        toast.success("Sesion iniciada con éxito", {
          autoClose: 3000,
        });
        window.location.href = "/dashboard";
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
