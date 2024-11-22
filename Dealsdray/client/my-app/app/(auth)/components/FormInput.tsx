interface FormInputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  helperText?: string; 
}

export default function FormInput({
  label,
  type,
  placeholder,
  value,
  onChange,
  helperText,
}: FormInputProps) {
  return (
    <label className="block mb-4">
      <span className="text-sm font-medium text-gray-300">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full mt-1 px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-500 placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
      />
      {helperText && <p className="text-xs text-gray-400 mt-1">{helperText}</p>}
    </label>
  );
}
