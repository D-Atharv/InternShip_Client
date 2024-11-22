import './globals.css';

export const metadata = {
  title: 'Admin Panel',
  description: 'A modern dark-themed admin panel',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen bg-gray-900 text-white">
        {children}
      </body>
    </html>
  );
}
