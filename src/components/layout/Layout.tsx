import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="min-h-screen bg-coast-cream font-body flex flex-col">
            <div className="flex flex-1">
                <Sidebar />
                <main className="ml-[280px] p-10 flex-1">
                    <Outlet />
                </main>
            </div>
            <div className="ml-[280px]">
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
