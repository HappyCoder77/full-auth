"use client";

import { useDealerListQuery } from "@/redux/features/dealerApiSlice";
import { Spinner } from "@/components/common";

interface Dealer {
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
export default function LocalManagerList() {
  const { data: Dealers, isLoading, isError, error } = useDealerListQuery();

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
        {error instanceof Error
          ? error.message
          : "Ha ocurrido un error interno"}
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
          {Dealers?.map((dealer: Dealer, index: number) => (
            <tr
              key={dealer.email}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="py-3 px-4">
                {`${dealer.first_name} ${dealer.last_name} `}
              </td>
              <td className="py-3 px-4">{dealer.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
