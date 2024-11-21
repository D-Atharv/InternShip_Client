'use client';
import { useState } from "react";
import EmployeeHeader from "./components/EmployeeHeader";
import SearchBar from "./components/SearchBar";
import EmployeeTable from "./components/EmployeeTable";

interface Employee {
  id: number;
  name: string;
  email: string;
  mobile: string;
  role: string;
  gender: string;
  courses: string;
  image: string;
  createDate: string;
}

export default function EmployeeListPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortKey, setSortKey] = useState<string>("id");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const employees: Employee[] = [
    {
      id: 1,
      name: "Hukum",
      email: "hukum@cstech.in",
      mobile: "954010044",
      role: "HR",
      gender: "Male",
      courses: "MCA",
      image: "/images/placeholder.png",
      createDate: "2023-11-01",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john.doe@example.com",
      mobile: "1234567890",
      role: "Manager",
      gender: "Male",
      courses: "BCA",
      image: "/images/placeholder.png",
      createDate: "2023-11-02",
    },
    {
      id: 3,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      mobile: "9876543210",
      role: "Sales",
      gender: "Female",
      courses: "BSC",
      image: "/images/placeholder.png",
      createDate: "2023-11-03",
    },
  ];

  const filteredEmployees = employees
    .filter(
      (employee) =>
        employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const aValue = a[sortKey as keyof Employee];
      const bValue = b[sortKey as keyof Employee];
      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

  const handleSort = (key: string) => {
    const newDirection =
      sortKey === key && sortDirection === "asc" ? "desc" : "asc";
    setSortKey(key);
    setSortDirection(newDirection);
  };

  const handleEdit = (id: number) => {
    console.log(`Edit employee with ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Delete employee with ID: ${id}`);
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <header className="bg-yellow-500 text-black text-lg font-bold p-3 mb-2 rounded-t-lg shadow-md">
        Employee List
      </header>
      <EmployeeHeader totalEmployees={employees.length} />
      <div className="mb-4">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <EmployeeTable
        employees={filteredEmployees}
        onSort={handleSort}
        sortKey={sortKey}
        sortDirection={sortDirection}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
