'use client';
import { useState } from "react";
import FormInput from "./components/FormInput";
import FormSelect from "./components/FormSelect";
import FormRadioGroup from "./components/FormRadioGroup";
import FormCheckboxGroup from "./components/FormCheckBoxGroup";
import FormFileInput from "./components/FormFileInput";
import { createEmployee } from "../../../services/employeeService";

interface EmployeeFormData {
    name: string;
    email: string;
    mobile: string;
    role: string;
    gender: string;
    courses: string[];
    image: File | null;
}

export default function CreateEmployeeForm() {
    const [formData, setFormData] = useState<EmployeeFormData>({
        name: "",
        email: "",
        mobile: "",
        role: "",
        gender: "",
        courses: [],
        image: null,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccessMessage(null);
        setIsSubmitting(true);

        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("mobile", formData.mobile);
        formDataToSend.append("role", formData.role);
        formDataToSend.append("gender", formData.gender);
        formDataToSend.append("courses", JSON.stringify(formData.courses));
        if (formData.image) {
            formDataToSend.append("image", formData.image);
        }

        try {
            await createEmployee(formDataToSend);

            setSuccessMessage("Employee created successfully!");
            setFormData({
                name: "",
                email: "",
                mobile: "",
                role: "",
                gender: "",
                courses: [],
                image: null,
            });
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message || "An unexpected error occurred.");
            } else {
                setError("An unexpected error occurred.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };


    return (

        <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 md:py-2 md:pb-4 rounded-lg w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:w-2/5 shadow-2xl text-white space-y-6 max-h-screen overflow-y-auto mx-auto"
        >
            <h2 className="text-xl md:text-2xl font-extrabold text-center text-yellow-500 ">
                Fill in Employee Details
            </h2>

            <div className=" w-full h-10">
                {error && <p className="text-red-500 text-sm">{error}</p>}
                {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
            </div>

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
                label="Role"
                name="role"
                value={formData.role}
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
                disabled={isSubmitting}
                className={`w-full ${isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-yellow-400 to-yellow-600 hover:shadow-xl"
                    } text-black font-bold py-3 rounded-lg shadow-lg transition-all duration-300`}
            >
                {isSubmitting ? "Submitting..." : "Submit"}
            </button>
        </form>
    );
}
