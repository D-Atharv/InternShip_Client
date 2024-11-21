interface GenderRadioGroupProps {
    selectedGender: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  export const GenderRadioGroup = ({ selectedGender, onChange }: GenderRadioGroupProps) => (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Gender</label>
      <div className="flex items-center space-x-4">
        {["Male", "Female"].map((gender) => (
          <label key={gender}>
            <input
              type="radio"
              name="gender"
              value={gender}
              checked={selectedGender === gender}
              onChange={onChange}
              className="mr-2"
            />
            {gender}
          </label>
        ))}
      </div>
    </div>
  );
  