// components/CheckboxGroup.tsx
interface CheckboxGroupProps {
    label: string;
    options: string[];
    selectedValues: string[];
    onChange: (option: string) => void;
  }
  
  const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
    label,
    options,
    selectedValues,
    onChange,
  }) => (
    <div>
      <label className="block text-sm font-medium text-gray-300">{label}</label>
      <div className="flex space-x-4">
        {options.map((option) => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedValues.includes(option)}
              onChange={() => onChange(option)}
              className="text-teal-500"
            />
            <span className="text-gray-300">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
  
  export default CheckboxGroup;
  