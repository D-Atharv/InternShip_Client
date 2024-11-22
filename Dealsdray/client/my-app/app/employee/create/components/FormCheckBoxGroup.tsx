interface FormCheckboxGroupProps {
  label: string;
  options: string[];
  selectedValues: string[];
  onChange: (value: string) => void;
}

const FormCheckboxGroup: React.FC<FormCheckboxGroupProps> = ({
  label,
  options,
  selectedValues,
  onChange,
}) => (
  <fieldset>
    <legend className="block text-sm font-semibold text-gray-300 mb-2">{label}</legend>
    <div className="flex flex-wrap gap-4">
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
  </fieldset>
);

export default FormCheckboxGroup;
