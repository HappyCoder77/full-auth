"use client";

import { Spinner } from "@/components/common";
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
      <main className="mx-auto max-w-7xl py-6 my-8 sm:px-6 lg:px-8">
        {user && user.is_superuser && <SuperUserDashboard email={user.email} />}
      </main>
    </>
  );
}
