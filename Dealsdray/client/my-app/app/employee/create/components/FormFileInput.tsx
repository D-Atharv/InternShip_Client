interface FormFileInputProps {
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    accept?: string;
  }
  
  const FormFileInput: React.FC<FormFileInputProps> = ({ label, onChange, accept }) => (
    <label className="block">
      <span className="block text-sm font-semibold text-gray-300">{label}</span>
      <input
        type="file"
        onChange={onChange}
        accept={accept}
        className="w-full mt-1 px-4 py-2 bg-black/60 backdrop-blur-sm border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
    </label>
  );
  
  export default FormFileInput;
  