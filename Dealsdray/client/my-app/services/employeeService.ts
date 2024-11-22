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