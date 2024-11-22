// components/TextInput.tsx
interface TextInputProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    placeholder?: string;
  }
  
  const TextInput: React.FC<TextInputProps> = ({
    label,
    name,
    value,
    onChange,
    type = "text",
    placeholder = "",
  }) => (
    <div>
      <label className="block text-sm font-medium text-gray-300">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 rounded-md bg-black/30 text-white border border-gray-500 placeholder-gray-400 focus:ring focus:ring-yellow-400 focus:outline-none transition"
      />
    </div>
  );
  
  export default TextInput;

  
  