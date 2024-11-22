interface ErrorMessageProps {
  message: string | null;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) return null;
  return <p className="text-red-500 text-sm mb-4">{message}</p>;
}
