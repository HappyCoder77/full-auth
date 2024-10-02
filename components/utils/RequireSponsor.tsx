"use client";

import { useAppSelector } from "@/redux/hooks";
import { redirect } from "next/navigation";
import { Spinner } from "@/components/common";
import { useEffect, useState } from "react";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";

interface Props {
  children: React.ReactNode;
}

export default function RequireLocalManager({ children }: Props) {
  const { isLoading, user } = useAppSelector((state) => state.auth);
  const [isChecking, setIsChecking] = useState(true);
  const { refetch } = useRetrieveUserQuery();

  useEffect(() => {
    const checkAuth = async () => {
      if (!user) {
        await refetch();
      }
      setIsChecking(false);
    };
    checkAuth();
  }, [user, refetch]);

  if (isLoading || isChecking) {
    return (
      <div className="flex justify-center my-8">
        <Spinner lg />
      </div>
    );
  }

  if (!user?.is_sponsor) {
    redirect("/unauthorized");
  }

  return <>{children}</>;
}
