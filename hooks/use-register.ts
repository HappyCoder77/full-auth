import { useState, ChangeEvent, FormEvent } from "react";
import { useRegisterMutation } from "@/redux/features/authApiSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function useRegister() {
  const router = useRouter();
  const [register, { isLoading }] = useRegisterMutation();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { first_name, last_name, email, password, re_password } = formData;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    register({ first_name, last_name, email, password, re_password })
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

  return {
    first_name,
    last_name,
    email,
    password,
    re_password,
    isLoading,
    onChange,
    onSubmit,
  };
}
