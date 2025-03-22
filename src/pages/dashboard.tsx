import { Home, Package, Users, ShoppingCart } from "lucide-react";

const Sidebar = () => {
    return (
        <div className="h-screen w-64 bg-gray-900 text-white flex flex-col">
            <div className="p-5 text-xl font-bold">Factory Management</div>
            <nav className="mt-5 flex flex-col gap-4 px-4">
                <SidebarItem icon={<Home size={20} />} text="Dashboard" />
                <SidebarItem icon={<Package size={20} />} text="Inventory" />
                <SidebarItem icon={<Users size={20} />} text="Employees" />
                <SidebarItem icon={<ShoppingCart size={20} />} text="Orders" />
            </nav>
        </div>
    );
};

const SidebarItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
    return (
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer">
            {icon}
            <span>{text}</span>
        </div>
    );
};

const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-6">
                <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
            </div>
        </div>
    );
};

export default Dashboard;
