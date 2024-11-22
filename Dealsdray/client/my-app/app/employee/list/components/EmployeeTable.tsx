import Image from "next/image";
import { Employee } from '../../../../types/Employee';
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
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}) => {
  const getSortIcon = (key: string) => {
    if (sortKey === key) {
      return sortDirection === "asc" ? "▲" : "▼";
    }
    return "";
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white/10 backdrop-blur-lg text-white rounded-lg shadow-lg border border-white/20">
        <thead>
          <tr className="bg-white/20 text-left text-xs uppercase font-semibold text-gray-300 backdrop-blur-md">
            <th className="p-3 cursor-pointer" onClick={() => onSort("id")}>
              ID {getSortIcon("id")}
            </th>
            <th className="p-3">Image</th>
            <th className="p-3 cursor-pointer" onClick={() => onSort("name")}>
              Name {getSortIcon("name")}
            </th>
            <th className="p-3 cursor-pointer" onClick={() => onSort("email")}>
              Email {getSortIcon("email")}
            </th>
            <th className="p-3">Mobile</th>
            <th className="p-3">Role</th>
            <th className="p-3">Gender</th>
            <th className="p-3">Courses</th>
            <th className="p-3 cursor-pointer" onClick={() => onSort("createDate")}>
              Create Date {getSortIcon("createDate")}
            </th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr
              key={employee.id}
              className="hover:bg-black/60 bg-white/2 even:bg-white/10  transition duration-300 text-xs sm:text-sm border-b  rounded-lg"
            >
              <td className="p-3">{employee.id}</td>
              <td className="p-3">
                <Image
                  src={employee.image}
                  alt={employee.name}
                  className="w-10 h-10 rounded-full border border-white/30"
                  width={40}
                  height={40}
                />
              </td>
              <td className="p-3">{employee.name}</td>
              <td className="p-3">{employee.email}</td>
              <td className="p-3">{employee.mobile}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${employee.role === "HR"
                      ? "bg-teal-500/90 text-white"
                      : employee.role === "Manager"
                        ? "bg-purple-500/90 text-white"
                        : "bg-yellow-500/90 text-white"
                    }`}
                >
                  {employee.role}
                </span>
              </td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${employee.gender === "Male"
                      ? "bg-blue-500/90 text-white"
                      : "bg-pink-500/90 text-white"
                    }`}
                >
                  {employee.gender}
                </span>
              </td>
              <td className="p-3">{employee.courses.join(", ")}</td>
              <td className="p-3">{employee.createDate}</td>
              <td className="p-3 flex justify-center space-x-2">
                <button
                  onClick={() => onEdit(employee.id)}
                  className="bg-blue-500/90 hover:bg-blue-600/90 text-white px-4 py-1 rounded-md text-xs transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(employee.id)}
                  className="bg-red-500/90 hover:bg-red-600/90 text-white px-4 py-1 rounded-md text-xs transition"
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
