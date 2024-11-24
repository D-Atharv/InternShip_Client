"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface User {
  username: string;
  email: string;
}

interface UserContextValue {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

export const AuthUserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
        const token  = localStorage.getItem("authToken");
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/api/auth/me`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user information");
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuthUser = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error("useAuthUser must be used within a UserProvider");
    }
    return context;
  };
