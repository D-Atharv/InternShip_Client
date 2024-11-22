interface FormRadioGroupProps {
    label: string;
    name: string;
    options: string[];
    selectedValue: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const FormRadioGroup: React.FC<FormRadioGroupProps> = ({
    label,
    name,
    options,
    selectedValue,
    onChange,
  }) => (
    <fieldset>
      <legend className="block text-sm font-semibold text-gray-300 mb-2">{label}</legend>
      <div className="flex space-x-6">
        {options.map((option) => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="radio"
              name={name}
              value={option}
              checked={selectedValue === option}
              onChange={onChange}
              className="text-teal-500"
            />
            <span className="text-gray-300">{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
  
  export default FormRadioGroup;
  