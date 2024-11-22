import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { SidebarProvider } from "@/Context/SideBarContext";

export default function EmployeeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-full flex overflow-hidden   ">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden mx-4 mb-2 ">
                <Header />
                <main className="flex-1 px-6 py-4 bg-white/2 backdrop-blur-lg rounded-lg shadow-lg overflow-y-auto mt-2 border border-white/2">
                    <SidebarProvider>{children}</SidebarProvider>
                </main>
            </div>
        </div>
    );
}
