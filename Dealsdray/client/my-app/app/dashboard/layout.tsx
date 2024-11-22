import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function EmployeeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 ">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden mx-4 mb-2 ">
        <Header />
        <main className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg overflow-y-auto mt-2">
          {children}
        </main>
      </div>
    </div>
  );
}
