import Card from './Card';

export default function ContentGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      <Card
        title="Employee List"
        description="View and manage the list of all employees in the system."
        icon="📋"
      />
      <Card
        title="Add Employee"
        description="Easily add new employees and their details to the system."
        icon="➕"
      />
      <Card
        title="Settings"
        description="Customize your preferences and manage account settings."
        icon="⚙️"
      />
    </div>
  );
}
