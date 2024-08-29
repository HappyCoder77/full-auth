import Link from "next/link";
import { ChangeHandler, RefCallBack, UseFormRegister } from "react-hook-form";

/**
 * Componente de entrada reutilizable para formularios.
 *
 * Este componente renderiza una etiqueta y un campo de entrada, con soporte opcional para un enlace.
 * Utiliza `react-hook-form` para la gestión de formularios y validación.
 *
 * @component
 * @param {string} labelId - El ID del campo de entrada y la etiqueta.
 * @param {string} type - El tipo de entrada (por ejemplo, "text", "password").
 * @param {Object} register - Objeto de registro proporcionado por `react-hook-form` que contiene los manejadores de eventos y la referencia.
 * @param {ChangeHandler} register.onChange - Manejador de cambio para el campo de entrada.
 * @param {ChangeHandler} register.onBlur - Manejador de desenfoque para el campo de entrada.
 * @param {RefCallBack} register.ref - Callback de referencia para el campo de entrada.
 * @param {string} register.name - Nombre del campo de entrada.
 * @param {React.ReactNode} children - El contenido de la etiqueta.
 * @param {Object} [link] - Objeto opcional que contiene el texto y la URL del enlace.
 * @param {string} link.linkText - El texto del enlace.
 * @param {string} link.linkUrl - La URL del enlace.
 */

interface Props {
  labelId: string;
  type: string;
  register: {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: RefCallBack;
    name: string;
  };
  children: React.ReactNode;
  link?: {
    linkText: string;
    linkUrl: string;
  };
}

export default function Input({
  labelId,
  type,
  register,
  children,
  link,
}: Props) {
  return (
    <div>
      <div className="flex justify-between align-center">
        <label
          htmlFor={labelId}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {children}
        </label>
        {link && (
          <div className="block text-sm font-medium leading-6 text-gray-900">
            <Link
              className="font-semibold text-indigo-600 hover:text-indigo-500"
              href={link.linkUrl}
            >
              {link.linkText}
            </Link>
          </div>
        )}
      </div>
      <div className="mt-2">
        <input
          id={labelId}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type={type}
          {...register}
        />
      </div>
    </div>
  );
}
