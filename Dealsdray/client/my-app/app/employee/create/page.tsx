'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CreateEmployeeForm from "./CreateEmployeeForm";

export default function CreateEmployeePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      router.replace("/login");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return null;
  }

  return (
    <div className="flex flex-col p-6 pt-0 bg-gradient-to-br bg-[#0A0A0A] to-black h-full max-h-screen">
      <main className="mt-6 flex justify-center">
        <CreateEmployeeForm />
      </main>
    </div>
  );
}
