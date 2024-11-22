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
        className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:ring focus:ring-teal-500"
      />
    </div>
  );
  
  export default TextInput;
  