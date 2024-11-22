'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "../../../services/authService";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/SubmitButton";
import ErrorMessage from "../components/ErrorMessage";

export default function LogInForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      const data = await loginUser(username, password);
      localStorage.setItem("authToken", data.token);
      router.push("/dashboard");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-black p-8 rounded-lg shadow-lg max-w-sm mx-auto bg-white/10 backdrop-blur-md border border-white/20">
      <h2 className="text-yellow-400 text-3xl font-extrabold mb-6 text-center">
        Welcome Back!
      </h2>
      <form onSubmit={handleSubmit}>
        {error && <ErrorMessage message={error} />}
        <FormInput
          label="Username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <FormInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          helperText="Enter the password associated with your account."
        />
        <SubmitButton isLoading={isLoading} text="Login" />
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-600"></div>
          <span className="text-sm text-gray-400 px-4">or</span>
          <div className="flex-grow h-px bg-gray-600"></div>
        </div>
        <p className="text-center text-sm text-gray-300 mt-6">
          Don’t have an account?{" "}
          <Link
            href="/signIn"
            className="text-yellow-400 hover:text-yellow-300 font-medium transition"
          >
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
}
