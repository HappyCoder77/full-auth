"use client";

import { useEffect } from "react";
import { useActivationMutation } from "@/redux/features/authApiSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface Props {
  params: {
    uid: string;
    token: string;
  };
}
export default function Page({ params }: Props) {
  const router = useRouter();
  const [activation] = useActivationMutation();
  useEffect(() => {
    const { uid, token } = params;
    activation({ uid, token })
      .unwrap()
      .then(() => {
        toast.success("Tu cuenta ha sido activada exitosamente. ¡Bienvenido!");
      })
      .catch(() => {
        toast.error(
          "Ha ocurrido un error durante el proceso de activacion de tu cuenta"
        );
      })
      .finally(() => {
        router.push("/auth/login");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Activando tu cuenta...
        </h1>
      </div>
    </div>
  );
}
