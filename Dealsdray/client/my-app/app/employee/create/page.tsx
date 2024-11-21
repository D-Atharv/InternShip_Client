import CreateEmployeeForm from "./CreateEmployeeForm";

export default function CreateEmployeePage() {
  return (
    <div className="flex flex-col p-6">
      <div className="bg-yellow-500 text-black p-2 font-bold">Create Employee</div>
      <CreateEmployeeForm />
    </div>
  );
}
