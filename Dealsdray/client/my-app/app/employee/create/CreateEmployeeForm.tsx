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
        console.log(formData); // Simulate form submission
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-lg w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:w-2/5 shadow-2xl text-white space-y-6 max-h-screen overflow-y-auto mx-auto"
        >
            <h2 className="text-xl md:text-2xl font-extrabold text-center text-yellow-500 ">
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
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
                Submit
            </button>
        </form>
    );
}
