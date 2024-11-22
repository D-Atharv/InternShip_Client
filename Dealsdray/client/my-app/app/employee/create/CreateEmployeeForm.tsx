'use client';
import { useState } from "react";
import FormInput from "./components/FormInput";
import FormSelect from "./components/FormSelect";
import FormRadioGroup from "./components/FormRadioGroup";
import FormCheckboxGroup from "./components/FormCheckBoxGroup";
import FormFileInput from "./components/FormFileInput";

interface EmployeeFormData {
  name: string;
  email: string;
  mobile: string;
  designation: string;
  gender: string;
  courses: string[];
  image: File | null;
}

export default function CreateEmployeeForm() {
  const [formData, setFormData] = useState<EmployeeFormData>({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    gender: "",
    courses: [],
    image: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (course: string) => {
    const updatedCourses = formData.courses.includes(course)
      ? formData.courses.filter((c) => c !== course)
      : [...formData.courses, course];
    setFormData({ ...formData, courses: updatedCourses });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform validation and submit logic here
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-2xl text-white space-y-6"
    >
      <h2 className="text-2xl font-extrabold text-center text-teal-400">
        Fill in Employee Details
      </h2>

      <FormInput
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />

      <FormInput
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />

      <FormInput
        label="Mobile No"
        type="text"
        name="mobile"
        value={formData.mobile}
        onChange={handleInputChange}
      />

      <FormSelect
        label="Designation"
        name="designation"
        value={formData.designation}
        onChange={handleInputChange}
        options={["HR", "Manager", "Sales"]}
      />

      <FormRadioGroup
        label="Gender"
        name="gender"
        options={["Male", "Female"]}
        selectedValue={formData.gender}
        onChange={handleInputChange}
      />

      <FormCheckboxGroup
        label="Courses"
        options={["MCA", "BCA", "BSC"]}
        selectedValues={formData.courses}
        onChange={handleCheckboxChange}
      />

      <FormFileInput
        label="Image Upload"
        onChange={handleFileChange}
        accept="image/png, image/jpeg"
      />

     <button
        type="submit"
        className="w-full bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-400 hover:to-green-400 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
      >
        Submit
      </button>
    </form>
  );
}
