// CreateEmployeePage.tsx
import CreateEmployeeForm from "./CreateEmployeeForm";

export default function CreateEmployeePage() {
  return (
    <div className="flex flex-col p-6 pt-2 bg-gradient-to-br bg-[#0A0A0A] to-black h-full max-h-screen ">
      <main className="mt-6 flex justify-center">
        <CreateEmployeeForm />
      </main>
    </div>
  );
}
