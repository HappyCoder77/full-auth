import { Metadata } from "next";
import { CollectorRegisterForm } from "@/components/forms";

export const metadata: Metadata = {
  title: "Mis Barajitas | Creacion de perfil de coleccionista",
  description: "Mis Barajitas Collector Register Page",
};

export default function Page() {
  // return method
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      {/* form image */}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Mis Barajitas"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Creación de perfil
        </h2>
      </div>
      {/* form container */}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {/* form */}
        <CollectorRegisterForm />
      </div>
    </div>
  );
}
