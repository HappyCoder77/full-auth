"use client";

import { useLogin } from "@/hooks";
import { Form } from "@/components/forms";

/**
 * Componente de formulario de inicio de sesión.
 *
 * Este componente utiliza el hook `useLogin` para manejar el registro de campos,
 * la validación del formulario y el envío de datos. El formulario incluye campos
 * para la dirección de correo electrónico y la contraseña, con validaciones
 * específicas para cada uno.
 *
 * Configuración de los campos del formulario:
 * - Dirección de correo electrónico:
 *   - Tipo: email
 *   - Requerido: Sí, con mensaje "El correo es requerido"
 *   - Patrón: Expresión regular para validar el formato del correo, con mensaje "El formato del correo es inválido"
 * - Contraseña:
 *   - Tipo: password
 *   - Requerido: Sí, con mensaje "La contraseña es requerida"
 *   - Enlace: "Olvidaste tu contraseña?" que redirige a "/password-reset"
 *
 * @returns {JSX.Element} El formulario de inicio de sesión.
 */

export default function LoginForm() {
  const { register, isLoading, onFormSubmit, errors } = useLogin();

  const config = [                        
    {
      labelText: "Direccion de correo electrónico",
      labelId: "email",
      type: "email",
      required: {
        value: true,
        message: "El correo es requerido",
      },
      pattern: {
        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        message: "El formato del correo es inválido",
      }
    },
    {
      labelText: "Contraseña",
      labelId: "password",
      type: "password",
      link: {
        linkText: "Olvidaste tu contraseña?",
        linkUrl: "/password-reset",
      },
      required: {
        value: true,
        message: "La contraseña es requerida",
      },
    },
  ];
  return (
    <Form
      config={config}
      register={register}
      isLoading={isLoading}
      onFormSubmit={onFormSubmit}
      errors={errors}
      btnText="Entrar"
    />
  );
}
