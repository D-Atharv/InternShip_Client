import Link from "next/link";

export default function DashboardMenu() {
  const menuItems = [
    { href: "/employee/list", label: "Employee List", description: "View and manage the list of all employees in the system." },
    { href: "/employee/create", label: "Add Employee", description: "Easily add new employees and their details to the system." },
    { href: "/settings", label: "Settings", description: "Customize your preferences and manage account settings." },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {menuItems.map((item, index) => (
        <Link key={index} href={item.href} className="block">
          <div className="p-6 bg-gray-800 hover:bg-gray-700 rounded-lg shadow-lg transition transform hover:-translate-y-1">
            <h2 className="text-xl font-semibold text-yellow-400">{item.label}</h2>
            <p className="mt-2 text-gray-300 text-sm">{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}