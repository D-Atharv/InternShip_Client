import Link from "next/link";

export default function DashboardMenu() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/employee/list">Employee List</Link>
        </li>
        <li>
          <Link href="/employee/create">Create Employee</Link>
        </li>
      </ul>
    </nav>
  );
}
