// components/RadioInput.tsx
interface RadioInputProps {
    label: string;
    name: string;
    options: { value: string; label: string }[];
    selectedValue: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const RadioInput: React.FC<RadioInputProps> = ({
    label,
    name,
    options,
    selectedValue,
    onChange,
  }) => (
    <div>
      <label className="block text-sm font-medium text-gray-300">{label}</label>
      <div className="flex space-x-4">
        {options.map((option) => (
          <label key={option.value} className="flex items-center space-x-2">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={onChange}
              className="text-teal-500"
            />
            <span className="text-gray-300">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
  
  export default RadioInput;
  