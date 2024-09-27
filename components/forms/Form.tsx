import { BaseSyntheticEvent, ReactNode } from "react";
import { Input } from "@/components/forms";
import { Spinner } from "@/components/common";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
  Validate,
  ValidationRule,
} from "react-hook-form";

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

interface Config<T> {
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
  validate?:
    | Validate<string, T>
    | Record<string, Validate<string, T>>
    | undefined;
  options?: { value: string; label: string }[];
}

interface Props<T extends FieldValues> {
  config: Config<T>[];
  register: UseFormRegister<T>;
  isLoading: boolean;
  onFormSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
  errors: FieldErrors<T>;
  passwordValidationErrors?: string[];
  emailValidationErrors?: string[];

  btnText: string;
}

export default function Form<T extends FieldValues>({
  config,
  register,
  isLoading,
  onFormSubmit,
  errors,
  passwordValidationErrors,
  emailValidationErrors,
  btnText,
}: Props<T>) {
  const errorClassname: string = "text-red-600 text-xs";

  return (
    <form className="space-y-6" onSubmit={onFormSubmit}>
      {passwordValidationErrors && passwordValidationErrors.length > 0 && (
        <div>
          <h4 className={errorClassname}>
            Errores de validación de contraseña:
          </h4>
          <ul>
            {passwordValidationErrors?.map((error, index) => (
              <li key={index} className={errorClassname}>
                *{error}
              </li>
            ))}
          </ul>
        </div>
      )}
      {emailValidationErrors && emailValidationErrors.length > 0 && (
        <div>
          <h4 className={errorClassname}>Errores de validación de email:</h4>
          <ul>
            {emailValidationErrors?.map((error, index) => (
              <li key={index} className={errorClassname}>
                *{error}
              </li>
            ))}
          </ul>
        </div>
      )}
      {config.map((input) => (
        <div key={input.labelId}>
          <Input
            labelId={input.labelId}
            type={input.type}
            link={input.link}
            register={register(input.labelId as Path<T>, {
              required: input.required ?? false,
              pattern: input.pattern ?? undefined,
              validate: input.validate ?? undefined,
            })}
            options={input.options}
          >
            {input.labelText}
          </Input>
          <span className={errorClassname}>
            {errors[input.labelId as keyof T]?.message as ReactNode}
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
