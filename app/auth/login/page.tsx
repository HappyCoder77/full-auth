import Link from "next/link";
import { LoginForm } from "@/components/forms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mis Barajitas | Entrar",
  description: "Página de inicio de sesión de Mis Barajitas",
};
export default function Page() {
  // return method
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      {/* form image */}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Full Auth"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Ingresa a tu cuenta
        </h2>
      </div>

      {/* form container */}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {/* form */}
        <LoginForm />
        {/* <SocialButtons /> */}

        {/* register link */}
        <p className="mt-10 text-center text-sm text-gray-500">
          ¿No tienes una cuenta?{" "}
          <Link
            href="/auth/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}
