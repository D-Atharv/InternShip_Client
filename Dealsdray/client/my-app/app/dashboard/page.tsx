'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardMenu from "./DashboardMenu";
import WelcomeSection from "../components/ui/WelcomeSection";

export default function DashboardPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      router.replace("/login");
    } else {
      setIsAuthenticated(true);
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="p-6 space-y-6">
      <WelcomeSection />
      <DashboardMenu />
    </div>
  );
}
