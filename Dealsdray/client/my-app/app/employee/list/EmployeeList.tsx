export default function EmployeeList() {
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
      // Add more employees here
    ];
  
    return (
      <table className="w-full bg-gray-800 text-white rounded-lg overflow-hidden mt-4">
        <thead>
          <tr className="bg-gray-700">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Mobile</th>
            <th className="p-2">Role</th>
            <th className="p-2">Gender</th>
            <th className="p-2">Courses</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="hover:bg-gray-600">
              <td className="p-2">{employee.id}</td>
              <td className="p-2">{employee.name}</td>
              <td className="p-2">{employee.email}</td>
              <td className="p-2">{employee.mobile}</td>
              <td className="p-2">{employee.role}</td>
              <td className="p-2">{employee.gender}</td>
              <td className="p-2">{employee.courses}</td>
              <td className="p-2">
                <button className="bg-blue-500 px-2 py-1 rounded">Edit</button>
                <button className="bg-red-500 px-2 py-1 rounded ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  