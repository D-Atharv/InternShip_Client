"use client";

import { useAuthUser } from "@/Context/userContext";

export default function WelcomeSection() {
  const { user, loading } = useAuthUser();

  return (
    <div className="p-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-lg shadow-lg">
      {loading ? (
        <h1 className="text-3xl font-extrabold">Loading...</h1>
      ) : (
        <>
          <h1 className="text-3xl font-extrabold">
            Welcome {user?.username || "User"} to the Admin Panel
          </h1>
          <p className="mt-4 text-lg font-medium">
            Use the menu to navigate through the admin functionalities and
            manage the system effectively.
          </p>
        </>
      )}
    </div>
  );
}
