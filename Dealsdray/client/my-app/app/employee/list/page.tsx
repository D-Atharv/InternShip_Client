'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import EmployeeHeader from "./components/EmployeeHeader";
import SearchBar from "./components/SearchBar";
import EmployeeTable from "./components/EmployeeTable";
import EditEmployeeModal from "./components/modal/EditEmployeeModal";
import DeleteEmployeeModal from "./components/modal/DeleteEmployeeModal";
import { Employee } from "../../../types/Employee";
import { deleteEmployeeApi, fetchEmployees } from "../../../services/employeeService";

export default function EmployeeListPage() {
    const router = useRouter();
    const [isLoadingAuth, setIsLoadingAuth] = useState(true);
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [sortKey, setSortKey] = useState<string>("_id");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
    const [editModal, setEditModal] = useState<Employee | null>(null);
    const [deleteModal, setDeleteModal] = useState<Employee | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("authToken");

        if (!token) {
            router.replace("/login");
        } else {
            setIsLoadingAuth(false);
        }
    }, [router]);

    useEffect(() => {
        if (!isLoadingAuth) {
            const loadEmployees = async () => {
                try {
                    setLoading(true);
                    const data = await fetchEmployees();
                    console.log("Loaded Employees:", data);
                    setEmployees(data);
                } catch (err) {
                    if (err instanceof Error) setError(err.message);
                } finally {
                    setLoading(false);
                }
            };

            loadEmployees();
        }
    }, [isLoadingAuth]);

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
        const newDirection = sortKey === key && sortDirection === "asc" ? "desc" : "asc";
        setSortKey(key);
        setSortDirection(newDirection);
    };

    const handleEdit = (_id: string) => {
        const employee = employees.find((emp) => emp._id === _id);
        if (employee) setEditModal(employee);
    };

    const handleDelete = (_id: string) => {
        const employee = employees.find((emp) => emp._id === _id);
        if (employee) {
            setDeleteModal(employee);
        } else {
            throw new Error("Employee not found");
        }
    };

    const handleSaveEdit = (updatedEmployee: Employee) => {
        setEmployees((prev) =>
            prev.map((emp) => (emp._id === updatedEmployee._id ? updatedEmployee : emp))
        );
    };

    const handleConfirmDelete = async (_id: string | undefined) => {
        if (!_id) {
            return;
        }
        try {
            await deleteEmployeeApi(_id);
            setEmployees((prev) => prev.filter((emp) => emp._id !== _id));
            setDeleteModal(null);
        } catch (error) {
            throw error;
        }
    };

    if (isLoadingAuth) {
        return null;
    }

    return (
        <div className="p-6 bg-[#0A0A0A] backdrop-blur-lg h-full text-white">
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
                    onEdit={(id) => handleEdit(id)}
                    onDelete={(id) => handleDelete(id)}
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
                    onConfirm={() => handleConfirmDelete(deleteModal._id)}
                />
            )}
        </div>
    );
}
