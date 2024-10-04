"use client";

import { List, Spinner } from "@/components/common";
import Link from "next/link";
import { useRegionalManagerCountQuery } from "@/redux/features/regionalManagerApiSlice";
import { useLocalManagerCountQuery } from "@/redux/features/localManagerApiSlice";
import { User } from "@/types/interfaces";

interface Props {
  user: User;
}
export default function SuperUserDashboard({ user }: Props) {
  const {
    data: totalRegionalManagers,
    isLoading: isLoadingRegionalManagers,
    isFetching: isFetchingRegionalmanagers,
  } = useRegionalManagerCountQuery();

  const {
    data: totalLocalManagers,
    isLoading: isLoadingLocalManagers,
    isFetching: isFetchingLocalManagers,
  } = useLocalManagerCountQuery();

  const config = [
    {
      label: "Email Address",
      value: user?.email,
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
                {isLoadingRegionalManagers || isFetchingRegionalmanagers ? (
                  <span
                    style={{ display: "inline-flex", alignItems: "center" }}
                  >
                    <Spinner sm />
                  </span>
                ) : (
                  totalRegionalManagers?.total ?? "No data"
                )}
                {")"}
              </h3>
            </div>
          </header>
        </Link>
        <Link href="/local-manager/list/">
          <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <h3 className="text-3xl font-bold tracking-tight text-blue-600">
                Gerentes locales {"("}
                {isLoadingLocalManagers || isFetchingLocalManagers ? (
                  <span
                    style={{ display: "inline-flex", alignItems: "center" }}
                  >
                    <Spinner sm />
                  </span>
                ) : (
                  totalLocalManagers?.total ?? "No data"
                )}
                {")"}
              </h3>
            </div>
          </header>
        </Link>
      </main>
    </>
  );
}
