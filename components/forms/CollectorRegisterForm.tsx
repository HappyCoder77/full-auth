"use client";

import { useRegisterCollector } from "@/hooks";
import { Form } from "@/components/forms";

export default function DealerRegisterForm() {
  const { register, isLoading, onSubmit, errors } = useRegisterCollector();

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
  ];

  return (
    <Form
      config={config}
      register={register}
      isLoading={isLoading}
      btnText="Crear perfil"
      onFormSubmit={onSubmit}
      errors={errors}
    />
  );
}
