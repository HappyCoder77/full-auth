"use client";

import {
  List,
  Spinner,
  RegionalManagerList,
  LocalManagerList,
  SponsorList,
  DealerList,
} from "@/components/common";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";

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
          </h1>
        </div>
      </header>
      <main className="mx-auto max-w-7xl py-6 my-8 sm:px-6 lg:px-8">
        <List config={config} />
        {user && user.is_superuser && <RegionalManagerList />}
        {user && user.is_superuser && <LocalManagerList />}
        {user && user.is_superuser && <SponsorList />}
        {user && user.is_regionalmanager && <LocalManagerList />}
        {user && user.is_localmanager && <SponsorList />}
        {user && user.is_sponsor && <DealerList />}
      </main>
    </>
  );
}
