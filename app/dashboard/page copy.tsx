"use client";

import {
  List,
  Spinner,
  RegionalManagerList,
  LocalManagerList,
  SponsorList,
  DealerList,
} from "@/components/common";

import { CollectorRegisterForm } from "@/components/forms";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { SuperUserDashboard } from "@/components/common";

export default function Page() {
  const { data: user, isLoading, isFetching } = useRetrieveUserQuery();

  const config = [
    {
      label: "Email Address",
      value: user?.email,
    },
  ];

  if (isLoading || isFetching) {
    return (
      <div className="flex justify-center my-8">
        <Spinner lg />
      </div>
    );
  }

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard: {user && user.is_superuser && "Super Usuario"}
            {user && user.is_regionalmanager && "Gerente Regional"}
            {user && user.is_localmanager && "Gerente Local"}
            {user && user.is_sponsor && "Sponsor"}
            {user && user.is_dealer && "Dealer"}
            {user?.is_collector && "Coleccionista"}
          </h1>
        </div>
      </header>
      <main className="mx-auto max-w-7xl py-6 my-8 sm:px-6 lg:px-8">
        <List config={config} />
        {user && user.is_regionalmanager && <LocalManagerList />}
        {user && user.is_localmanager && <SponsorList />}
        {user && user.is_sponsor && <DealerList />}
        {user?.is_collector && !user.has_profile && (
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            {/* form image */}
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Para continuar debes completar tu perfil
              </h2>
            </div>
            {/* form container */}
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              {/* form */}
              <CollectorRegisterForm />
            </div>
          </div>
        )}
      </main>
    </>
  );
}
