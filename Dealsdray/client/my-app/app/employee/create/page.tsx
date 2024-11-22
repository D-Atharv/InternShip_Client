import CreateEmployeeForm from "./CreateEmployeeForm";

export default function CreateEmployeePage() {
  return (
    <div className="flex flex-col p-6 bg-gray-900 min-h-screen">
      <header className="bg-yellow-500 text-black p-3 font-bold rounded-t-lg shadow-md">
        Create Employee
      </header>
      <main className="mt-6">
        <CreateEmployeeForm />
      </main>
    </div>
  );
}
