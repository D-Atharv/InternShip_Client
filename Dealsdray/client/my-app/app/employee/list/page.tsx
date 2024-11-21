import EmployeeList from "./EmployeeList";

export default function EmployeeListPage() {
  return (
    <div className="flex flex-col p-6">
      <div className="bg-yellow-500 text-black p-2 font-bold">Employee List</div>
      <EmployeeList />
    </div>
  );
}
