import { SidebarProvider } from '@/Context/SideBarContext';
import './globals.css';
import { AuthUserProvider } from '@/Context/userContext';

export const metadata = {
  title: 'Admin Panel',
  description: 'A modern dark-themed admin panel',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthUserProvider>
      <SidebarProvider>
        <html lang="en">
          <body className="h-screen bg-[#0A0A0A] text-white">
            {children}
          </body>
        </html>
      </SidebarProvider>
    </AuthUserProvider>
  );
}
