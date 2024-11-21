import DashboardMenu from "./DashboardMenu";
import WelcomeSection from "../components/ui/WelcomeSection";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <WelcomeSection />
      <DashboardMenu />
    </div>
  );
}
