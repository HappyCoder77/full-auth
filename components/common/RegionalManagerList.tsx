"use client";

import { useRegionalManagerListQuery } from "@/redux/features/regionalManagerApiSlice";
import { Spinner } from "@/components/common";

interface RegionalManager {
  user: number;
  first_name: string;
  middle_name: string;
  first_last_name: string;
  second_last_name: string;
  sex: string;
  birthdate: string;
  email: string;
  created_by: number;
}
export default function RegionalManagerTable() {
  const {
    data: regionalManagers,
    isLoading,
    isError,
    error,
  } = useRegionalManagerListQuery();

  if (isLoading) {
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
        {error instanceof Error ? error.message : "An unknown error occurred"}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-primary text-white">
          <tr>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Email</th>
            <th className="py-3 px-4 text-left">Sex</th>
            <th className="py-3 px-4 text-left">Birthdate</th>
          </tr>
        </thead>
        <tbody>
          {regionalManagers?.map((manager: RegionalManager, index: number) => (
            <tr
              key={manager.email}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="py-3 px-4">
                {`${manager.first_name} ${manager.middle_name} ${manager.first_last_name} ${manager.second_last_name}`}
              </td>
              <td className="py-3 px-4">{manager.email}</td>
              <td className="py-3 px-4">{manager.sex}</td>
              <td className="py-3 px-4">
                {new Date(manager.birthdate).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
