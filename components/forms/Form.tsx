import { BaseSyntheticEvent } from "react";
import { Input } from "@/components/forms";
import { Spinner } from "@/components/common";
import { FieldErrors, UseFormRegister, ValidationRule } from "react-hook-form";

/**
 * Form Component
 * 
 * Este componente renderiza un formulario dinámico basado en la configuración proporcionada.
 * Utiliza `react-hook-form` para la gestión de formularios y validación.
 * 
 * @param {Config[]} config - Array de objetos de configuración para cada campo del formulario.
 * @param {UseFormRegister<FormValues>} register - Función de registro de `react-hook-form` para conectar los inputs con el formulario.
 * @param {boolean} isLoading - Indica si el formulario está en estado de carga.
 * @param {Function} onFormSubmit - Función que se ejecuta al enviar el formulario.
 * @param {FieldErrors<FormValues>} errors - Objeto que contiene los errores de validación de los campos del formulario.
 * @param {string} btnText - Texto que se muestra en el botón de envío del formulario.
 * 
 * @returns {JSX.Element} El componente del formulario.
   pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Invalid email address" }
 */

interface FormValues {
  email: string;
  password: string;
}

interface Config {
  labelText: string;
  labelId: string;
  type: string;
  link?: {
    linkText: string;
    linkUrl: string;
  };
  required?: {
    value: boolean;
    message: string;
  };
  pattern?: ValidationRule<RegExp>;
}

interface Props {
  config: Config[];
  register: UseFormRegister<FormValues>;
  isLoading: boolean;
  onFormSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
  errors: FieldErrors<FormValues>;
  btnText: string;
}

export default function Form({
  config,
  register,
  isLoading,
  onFormSubmit,
  errors,
  btnText,
}: Props) {
  const errorClassname: string = "text-red-600 text-xs";

  return (
    <form className="space-y-6" onSubmit={onFormSubmit}>
      {config.map((input) => (
        <div key={input.labelId}>
          <Input
            labelId={input.labelId}
            type={input.type}
            link={input.link}
            register={register(input.labelId as keyof FormValues, {
              required: input.required ?? false,
              pattern: input.pattern ?? undefined
            })}
          >
            {input.labelText}
          </Input>
          <span className={errorClassname}>
            {errors[input.labelId as keyof FormValues]?.message}
          </span>
        </div>
      ))}
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          disabled={isLoading}
        >
          {isLoading ? <Spinner sm /> : `${btnText}`}
        </button>
      </div>
    </form>
  );
}
