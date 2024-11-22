// components/SelectInput.tsx
interface SelectInputProps {
    label: string;
    name: string;
    value: string;
    options: { value: string; label: string }[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  }
  
  const SelectInput: React.FC<SelectInputProps> = ({
    label,
    name,
    value,
    options,
    onChange,
  }) => (
    <div>
      <label className="block text-sm font-medium text-gray-300">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:ring focus:ring-teal-500"
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
  
  export default SelectInput;
  