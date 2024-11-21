interface EmployeeHeaderProps {
    totalEmployees: number;
  }
  
  const EmployeeHeader: React.FC<EmployeeHeaderProps> = ({ totalEmployees }) => {
    return (
      <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 space-y-4 sm:space-y-0">
        <div className="text-gray-400">
          <p>
            Total Employees: <span className="font-bold">{totalEmployees}</span>
          </p>
        </div>
      </header>
    );
  };
  
  export default EmployeeHeader;
  