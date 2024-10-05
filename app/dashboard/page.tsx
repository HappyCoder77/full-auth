"use client";

import {
  SuperUserDashboard,
  RegionalManagerDashboard,
} from "@/components/common";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";

export default function Page() {
  const { data: user } = useRetrieveUserQuery();

  return (
    <>
      <main className="mx-auto max-w-7xl py-6 my-8 sm:px-6 lg:px-8">
        {user && user.is_superuser && <SuperUserDashboard user={user} />}
        {user && user.is_regionalmanager && (
          <RegionalManagerDashboard user={user} />
        )}
      </main>
    </>
  );
}
