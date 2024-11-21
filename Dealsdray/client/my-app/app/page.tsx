import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import WelcomeSection from './components/ui/WelcomeSection';
import ContentGrid from './components/ui/ContentGrid';

export default function HomePage() {
  return (
    <div className="h-screen flex flex-col lg:flex-row bg-gray-900 text-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8 bg-gray-800 rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg shadow-lg overflow-y-auto">
          <WelcomeSection />
          <section className="mt-8">
            <ContentGrid />
          </section>
        </main>
      </div>
    </div>
  );
}

