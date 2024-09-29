"use client";

import { useAppSelector } from "@/redux/hooks";
import { redirect } from "next/navigation";
import { Spinner } from "@/components/common";

interface Props {
  children: React.ReactNode;
}

export default function RequireSuperuser({ children }: Props) {
  const { isLoading, user } = useAppSelector((state) => state.auth);

  if (isLoading) {
    return (
      <div className="flex justify-center my-8">
        <Spinner lg />
      </div>
    );
  }

  if (!user?.is_superuser) {
    redirect("/unauthorized");
  }

  return <>{children}</>;
}
