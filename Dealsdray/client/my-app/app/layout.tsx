import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Admin Panel",
  description: "A modern dark-themed admin panel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen bg-gray-900 text-white flex overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
