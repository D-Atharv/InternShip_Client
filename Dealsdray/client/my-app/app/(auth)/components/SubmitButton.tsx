interface SubmitButtonProps {
  isLoading: boolean;
  text: string;
}

export default function SubmitButton({ isLoading, text }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
      disabled={isLoading}
    >
      {isLoading ? `${text}...` : text}
    </button>
  );
}
