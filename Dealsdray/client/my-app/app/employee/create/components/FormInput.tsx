interface FormInputProps {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const FormInput: React.FC<FormInputProps> = ({ label, type, name, value, onChange }) => (
    <label className="block">
      <span className="block text-sm font-semibold text-gray-300">{label}</span>
      <input
        type={type}
        name={name}
        value={value || ""}
        onChange={onChange}
        className="w-full mt-1 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
    </label>
  );
  
  export default FormInput;
  