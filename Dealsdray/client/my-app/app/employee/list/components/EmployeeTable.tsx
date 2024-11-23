import Image from "next/image";
import { Employee } from "../../../../types/Employee";

const EmployeeTable = ({
  employees,
  onSort,
  sortKey,
  sortDirection,
  onEdit,
  onDelete,
}: {
  employees: Employee[];
  onSort: (key: string) => void;
  sortKey: string;
  sortDirection: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}) => {
  const getSortIcon = (key: string) => {
    if (sortKey === key) {
      return sortDirection === "asc" ? "▲" : "▼";
    }
    return "";
  };

  return (
    <div className="overflow-x-auto rounded-lg shadow-md border border-gray-600">
      <table className="w-full bg-black/80 backdrop-blur-3xl text-white rounded-lg ">
        <thead>
          <tr className="bg-white/1 text-sm uppercase font-bold text-black border-b border-gray-500 bg-gradient-to-r from-yellow-600 to-yellow-500">
            <th
              className="p-4 text-left cursor-pointer hover:underline"
              onClick={() => onSort("id")}
            >
              ID {getSortIcon("id")}
            </th>
            <th className="p-4">Image</th>
            <th
              className="p-4 text-left cursor-pointer hover:underline"
              onClick={() => onSort("name")}
            >
              Name {getSortIcon("name")}
            </th>
            <th
              className="p-4 text-left cursor-pointer hover:underline"
              onClick={() => onSort("email")}
            >
              Email {getSortIcon("email")}
            </th>
            <th className="p-4 text-left">Mobile</th>
            <th className="p-4 text-left">Role</th>
            <th className="p-4 text-left">Gender</th>
            <th className="p-4 text-left">Courses</th>
            <th
              className="p-4 text-left cursor-pointer hover:underline"
              onClick={() => onSort("createDate")}
            >
              Create Date {getSortIcon("createDate")}
            </th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr
              key={`${employee._id}-${index}`} 
              className={`hover:bg-white/5 ${
                index % 2 === 0 ? "bg-white/10" : "bg-white/20"
              } transition duration-200`}
            >
              <td className="p-4">{employee._id}</td>
              <td className="p-4">
                {employee.image ? (
                  <Image
                    src={employee.image || "/images/placeholder.png"}
                    alt={employee.name || "No Name"}
                    className="w-10 h-10 rounded-full border border-gray-500"
                    width={40}
                    height={40}
                  />
                ) : (
                  <span>No Image</span>
                )}
              </td>
              <td className="p-4">{employee.name}</td>
              <td className="p-4">{employee.email}</td>
              <td className="p-4">{employee.mobile}</td>
              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    employee.role === "HR"
                      ? "bg-teal-500/90 text-white"
                      : employee.role === "Manager"
                      ? "bg-purple-500/90 text-white"
                      : "bg-yellow-500/90 text-white"
                  }`}
                >
                  {employee.role}
                </span>
              </td>
              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    employee.gender === "Male"
                      ? "bg-blue-500/90 text-white"
                      : "bg-pink-500/90 text-white"
                  }`}
                >
                  {employee.gender}
                </span>
              </td>
              <td className="p-4">
                {Array.isArray(employee.courses)
                  ? employee.courses.join(", ")
                  : "N/A"}
              </td>
              <td className="p-4">{employee.createDate}</td>
              <td className="p-4 flex justify-center gap-2">
                <button
                  onClick={() => onEdit(employee._id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-lg shadow-sm text-xs transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(employee._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg shadow-sm text-xs transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
