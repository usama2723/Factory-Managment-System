
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

const Dashboard = () => {
    return (
        <SidebarProvider>
            <AppSidebar>
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p>Welcome to your dashboard!</p>
            </AppSidebar>
        </SidebarProvider>
    );
};

export default Dashboard;
