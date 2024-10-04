"use client";

import { LocalManagerList } from "@/components/common";

export default function Page() {
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Gerentes locales{" "}
            <a
              href="/local-manager/register/"
              className="text-white bg-blue-700
                 hover:bg-blue-800 focus:ring-4
                 focus:ring-blue-300 font-medium 
                 rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 
                 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              +Nuevo
            </a>
          </h1>
        </div>
      </header>
      <main className="mx-auto max-w-7xl py-6 my-8 sm:px-6 lg:px-8">
        <LocalManagerList />
      </main>
    </>
  );
}
