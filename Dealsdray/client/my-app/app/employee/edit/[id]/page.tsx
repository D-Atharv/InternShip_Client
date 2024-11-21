import EditEmployeeForm from "./EditEmployeeForm";

export default function EditEmployeePage() {
  return (
    <div className="flex flex-col p-6">
      <div className="bg-yellow-500 text-black p-2 font-bold">Edit Employee</div>
      <EditEmployeeForm />
    </div>
  );
}
