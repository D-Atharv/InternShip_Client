interface InputFieldProps {
    label: string;
    name: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  }
  
  export const InputField = ({ label, name, type, value, onChange }: InputFieldProps) => (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 rounded bg-gray-700 border border-gray-600"
      />
    </div>
  );
  
  interface SelectFieldProps {
    label: string;
    name: string;
    value: string;
    options: string[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  }
  
  export const SelectField = ({ label, name, value, options, onChange }: SelectFieldProps) => (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 rounded bg-gray-700 border border-gray-600"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
  