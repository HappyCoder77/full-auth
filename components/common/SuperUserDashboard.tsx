"use client";

import { List } from "@/components/common";
import Link from "next/link";
import { useRegionalManagerCountQuery } from "@/redux/features/regionalManagerApiSlice";

interface SuperUserDashboardProps {
  email: string;
}
export default function SuperUserDashboard({ email }: SuperUserDashboardProps) {
  const { data: total, isLoading, isFetching } = useRegionalManagerCountQuery();

  const config = [
    {
      label: "Email Address",
      value: email,
    },
  ];

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard: Super Usuario
          </h1>
        </div>
      </header>
      <main className="mx-auto max-w-7xl py-6 my-8 sm:px-6 lg:px-8">
        <List config={config} />
        <Link href="/regional-manager/list/">
          <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <h3 className="text-3xl font-bold tracking-tight text-blue-600">
                Gerentes regionales {"("}
                {total?.total}
                {")"}
              </h3>
            </div>
          </header>
        </Link>
      </main>
    </>
  );
}
