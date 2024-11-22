'use client'

import { useState, useEffect } from "react";
import EmployeeHeader from "./components/EmployeeHeader";
import SearchBar from "./components/SearchBar";
import EmployeeTable from "./components/EmployeeTable";
import EditEmployeeModal from "./components/modal/EditEmployeeModal";
import DeleteEmployeeModal from "./components/modal/DeleteEmployeeModal";
import { Employee } from "../../../types/Employee";
import { fetchEmployees } from "../../../services/employeeService";

export default function EmployeeListPage() {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [sortKey, setSortKey] = useState<string>("id");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
    const [editModal, setEditModal] = useState<Employee | null>(null);
    const [deleteModal, setDeleteModal] = useState<Employee | null>(null);
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadEmployees = async () => {
            try {
                setLoading(true);
                const data = await fetchEmployees();
                setEmployees(data);
            } catch (err) {
                if (err instanceof Error) setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadEmployees();
    }, []);

    const filteredEmployees = (employees || [])
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
        const employee = employees.find((emp) => emp.id === id);
        if (employee) setEditModal(employee);
    };

    const handleDelete = (id: number) => {
        const employee = employees.find((emp) => emp.id === id);
        if (employee) setDeleteModal(employee);
    };

    const handleSaveEdit = (updatedEmployee: Employee) => {
        setEmployees((prev) =>
            prev.map((emp) => (emp.id === updatedEmployee.id ? updatedEmployee : emp))
        );
    };

    const handleConfirmDelete = (id: number) => {
        setEmployees((prev) => prev.filter((emp) => emp.id !== id));
        setDeleteModal(null);
    };

    return (
        <div className="p-6 bg-[#0A0A0A]/100 backdrop-blur-lg h-full text-white">
            <EmployeeHeader totalEmployees={employees.length} />
            <div className="mb-4">
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </div>
            {loading ? (
                <p className="text-center text-gray-400">Loading employees...</p>
            ) : error ? (
                <p className="text-center text-red-400">{error}</p>
            ) : (
                <EmployeeTable
                    employees={filteredEmployees}
                    onSort={handleSort}
                    sortKey={sortKey}
                    sortDirection={sortDirection}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            )}
            {editModal && (
                <EditEmployeeModal
                    employee={editModal}
                    onClose={() => setEditModal(null)}
                    onSave={handleSaveEdit}
                />
            )}
            {deleteModal && (
                <DeleteEmployeeModal
                    employeeName={deleteModal.name}
                    onClose={() => setDeleteModal(null)}
                    onConfirm={() => handleConfirmDelete(deleteModal.id)}
                />
            )}
        </div>
    );
}