"use client";

import { useRegionalManagerListQuery } from "@/redux/features/regionalManagerApiSlice";
import { Spinner } from "@/components/common";

interface RegionalManager {
  user: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  second_last_name: string;
  gender: string;
  birthdate: string;
  email: string;
  created_by: number;
}
export default function RegionalManagerList() {
  const {
    data: regionalManagers,
    isLoading,
    isFetching,
    isError,
    error,
  } = useRegionalManagerListQuery();

  if (isLoading || isFetching) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner sm />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500">
        Error:{" "}
        {error instanceof Error
          ? error.message
          : "ha ocurrido un error interno al consultar los datos"}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-primary text-black">
          <tr>
            <th className="py-3 px-4 text-left">Nombre</th>
            <th className="py-3 px-4 text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          {regionalManagers?.map((manager: RegionalManager, index: number) => (
            <tr
              key={manager.email}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="py-3 px-4">
                {`${manager.first_name} ${manager.last_name} `}
              </td>
              <td className="py-3 px-4">{manager.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
