'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signupUser } from "../../../services/authService";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/SubmitButton";
import ErrorMessage from "../components/ErrorMessage";

export default function SignInForm() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);

    if (inputPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
    } else {
      setPasswordError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (passwordError) {
      setError("Please fix the errors in the form.");
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      const data = await signupUser(username, email, password);
      localStorage.setItem("authToken", data.token);
      router.push("/login");
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
        Sign In
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
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          helperText="Password must be at least 8 characters long."
        />
        {passwordError && <ErrorMessage message={passwordError} />}
        <SubmitButton isLoading={isLoading} text="Sign In" />
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-600"></div>
          <span className="text-sm text-gray-400 px-4">or</span>
          <div className="flex-grow h-px bg-gray-600"></div>
        </div>
        <p className="text-center text-sm text-gray-300 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-yellow-400 hover:text-yellow-300 font-medium transition"
          >
            Login Here
          </Link>
        </p>
      </form>
    </div>
  );
}
