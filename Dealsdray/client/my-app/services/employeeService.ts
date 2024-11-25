import { Employee } from "../types/Employee";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchEmployees = async (): Promise<Employee[]> => {
  const token = localStorage.getItem("authToken");

  const response = await fetch(`${BASE_URL}/api/employees`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to fetch employees");
  }

  const data = await response.json();
  console.log("API Response:", data);
  return data.employees;
};

export const createEmployee = async (employeeData: FormData): Promise<Employee> => {
  const token = localStorage.getItem("authToken");

  const response = await fetch(`${BASE_URL}/api/employees`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: employeeData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to create employee");
  }

  const data = await response.json();
  return data.employee || [];
};

export const deleteEmployeeApi = async (id: string): Promise<void> => {
  const token = localStorage.getItem("authToken");

  const response = await fetch(`${BASE_URL}/api/employees/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to delete employee with _id ${id}`);
  }
};

export const updateEmployeeApi = async (id: string, updatedData: Partial<Employee>): Promise<Employee> => {
  const token = localStorage.getItem("authToken");
  const response = await fetch(`${BASE_URL}/api/employees/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updatedData),
  });

  if (!response.ok) {
    throw new Error(`Failed to update employee with ID ${id}`);
  }

  return response.json();
};
