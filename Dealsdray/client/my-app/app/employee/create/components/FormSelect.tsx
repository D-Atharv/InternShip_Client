interface FormSelectProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
  }
  
  const FormSelect: React.FC<FormSelectProps> = ({ label, name, value, onChange, options }) => (
    <label className="block">
      <span className="block text-sm font-semibold text-gray-300">{label}</span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full mt-1 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
  
  export default FormSelect;
  