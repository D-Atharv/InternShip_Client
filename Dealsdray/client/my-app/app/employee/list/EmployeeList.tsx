'use client'
import { useState } from "react";

export default function EmployeeList() {
  const [searchQuery, setSearchQuery] = useState("");

  const employees = [
    {
      id: 1,
      name: "Hukum",
      email: "hukum@cstech.in",
      mobile: "954010044",
      role: "HR",
      gender: "Male",
      courses: "MCA",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john.doe@example.com",
      mobile: "1234567890",
      role: "Manager",
      gender: "Male",
      courses: "BCA",
    },
    {
      id: 3,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      mobile: "9876543210",
      role: "Sales",
      gender: "Female",
      courses: "BSC",
    },
  ];

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 bg-gray-900 rounded-lg shadow-lg">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 space-y-4 sm:space-y-0">
        <div className="text-gray-400">
          <p>
            Total Employees: <span className="font-bold">{employees.length}</span>
          </p>
        </div>
        <input
          type="text"
          placeholder="Search by name or email"
          className="w-full sm:w-1/2 px-4 py-2 rounded-md border border-gray-500 focus:ring-2 focus:ring-teal-500 transition bg-gray-800 text-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 text-white rounded-lg shadow">
          <thead>
            <tr className="bg-gray-700 text-left text-xs uppercase font-semibold text-gray-300">
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Mobile</th>
              <th className="p-3">Role</th>
              <th className="p-3">Gender</th>
              <th className="p-3">Courses</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((employee) => (
                <tr
                  key={employee.id}
                  className="hover:bg-gray-700 bg-gray-800 even:bg-gray-850 transition duration-300 text-xs sm:text-sm border-b border-gray-700"
                >
                  <td className="p-3">{employee.id}</td>
                  <td className="p-3">{employee.name}</td>
                  <td className="p-3">{employee.email}</td>
                  <td className="p-3">{employee.mobile}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        employee.role === "HR"
                          ? "bg-teal-500 text-white"
                          : employee.role === "Manager"
                          ? "bg-purple-500 text-white"
                          : "bg-yellow-500 text-white"
                      }`}
                    >
                      {employee.role}
                    </span>
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        employee.gender === "Male"
                          ? "bg-blue-500 text-white"
                          : "bg-pink-500 text-white"
                      }`}
                    >
                      {employee.gender}
                    </span>
                  </td>
                  <td className="p-3">{employee.courses}</td>
                  <td className="p-3 flex justify-center space-x-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md text-xs transition">
                      Edit
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md text-xs transition">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={8}
                  className="text-center p-6 text-gray-400 font-semibold"
                >
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
