"use client";

import { useRegisterLocalManager } from "@/hooks";
import { Form } from "@/components/forms";

export default function LocalManagerRegisterForm() {
  const {
    register,
    isLoading,
    onSubmit,
    errors,
    emailValidationErrors,
    watch,
  } = useRegisterLocalManager();

  const config = [
    {
      labelText: "Primer Nombre",
      labelId: "first_name",
      type: "text",
      required: {
        value: true,
        message: "El primer nombre es requerido",
      },
    },
    {
      labelText: "Segundo Nombre (opcional)",
      labelId: "middle_name",
      type: "text",
    },
    {
      labelText: "Primer Apellido",
      labelId: "last_name",
      type: "text",
      required: {
        value: true,
        message: "El primer apellido es requerido",
      },
    },
    {
      labelText: "Segundo Apellido (opcional)",
      labelId: "second_last_name",
      type: "text",
    },
    {
      labelText: "Sexo",
      labelId: "gender",
      type: "select",
      required: {
        value: true,
        message: "El sexo es requerido",
      },
      options: [
        { value: "M", label: "Masculino" },
        { value: "F", label: "Femenino" },
      ],
    },
    {
      labelText: "Fecha de nacimiento",
      labelId: "birthdate",
      type: "date",
      required: {
        value: true,
        message: "La fecha de nacimiento es requerida",
      },
    },
    {
      labelText: "Dirección de correo electrónico",
      labelId: "email",
      type: "email",
      required: {
        value: true,
        message: "El correo es requerido",
      },
      pattern: {
        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        message: "El formato del correo es inválido",
      },
    },
  ];

  return (
    <Form
      config={config}
      register={register}
      isLoading={isLoading}
      btnText="Crear registro"
      onFormSubmit={onSubmit}
      errors={errors}
      emailValidationErrors={emailValidationErrors}
    />
  );
}
