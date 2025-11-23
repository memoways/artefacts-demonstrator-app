import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
    return (
        <div className="min-h-screen bg-coast-cream font-body">
            <Sidebar />
            <main className="ml-[280px] p-10 min-h-screen">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
