import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function EmployeeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex overflow-hidden ">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden mx-2 ">
        <Header />
        <main className="flex-1 px-6 overflow-y-auto ">{children}</main>
      </div>
    </div>
  );
}
