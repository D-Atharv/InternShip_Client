import EmployeeList from "./EmployeeList";

export default function EmployeeListPage() {
  return (
    <div className="p-6">
      <header className="bg-teal-500 text-white text-lg font-bold p-3 rounded-t-lg shadow-md">
        Employee List
      </header>
      <EmployeeList />
    </div>
  );
}
