import React from "react";
import { Employee } from "../../../../../types/Employee";
import Modal from "./components/editEmployeeModal/Modal";
import TextInput from "./components/editEmployeeModal/TextInput";
import SelectInput from "./components/editEmployeeModal/SelectInput";
import RadioInput from "./components/editEmployeeModal/RadioInput";
import CheckboxGroup from "./components/editEmployeeModal/CheckboxGroup";
import { updateEmployeeApi } from "../../../../../services/employeeService";

interface EditEmployeeModalProps {
  employee: Employee;
  onClose: () => void;
  onSave: (updatedEmployee: Employee) => void;
}

const EditEmployeeModal: React.FC<EditEmployeeModalProps> = ({
  employee,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = React.useState<Employee>({
    ...employee,
    courses: employee.courses || [], 
  });
  const [error, setError] = React.useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (course: string) => {
    const updatedCourses = formData.courses.includes(course)
      ? formData.courses.filter((c) => c !== course)
      : [...formData.courses, course];
    setFormData({ ...formData, courses: updatedCourses });
  };

  const handleSubmit = async () => {
    try {
      const updatedEmployee = await updateEmployeeApi(formData._id, formData);
      onSave(updatedEmployee); 
      onClose();
    } catch (err) {
      setError("Failed to update employee. Please try again.");
      console.error(err);
    }
  };

  return (
    <Modal onClose={onClose}>
      <h2 className="text-xl font-bold text-yellow-400 mb-4">Edit Employee</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="space-y-4">
        <TextInput
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <TextInput
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          type="email"
        />
        <TextInput
          label="Mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleInputChange}
        />
        <SelectInput
          label="Role"
          name="role"
          value={formData.role}
          onChange={handleInputChange}
          options={[
            { value: "HR", label: "HR" },
            { value: "Manager", label: "Manager" },
            { value: "Sales", label: "Sales" },
          ]}
        />
        <RadioInput
          label="Gender"
          name="gender"
          selectedValue={formData.gender}
          onChange={handleInputChange}
          options={[
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
          ]}
        />
        <CheckboxGroup
          label="Courses"
          options={["MCA", "BCA", "BSC"]}
          selectedValues={formData.courses}
          onChange={handleCheckboxChange}
        />
        <TextInput
          label="Image"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
        />
        <TextInput
          label="Create Date"
          name="createDate"
          value={formData.createDate}
          onChange={handleInputChange}
          type="date"
        />
      </div>
      <div className="mt-6 flex justify-end space-x-4">
        <button
          onClick={onClose}
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md shadow transition-all duration-200"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-md shadow transition-all duration-200"
        >
          Save
        </button>
      </div>
    </Modal>
  );
};

export default EditEmployeeModal;
