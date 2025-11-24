import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="min-h-screen bg-coast-cream font-body flex flex-col">
            <div className="flex flex-1 flex-col md:flex-row">
                <Sidebar />
                <main className="md:ml-[280px] p-4 md:p-10 flex-1 pt-20 md:pt-10">
                    <Outlet />
                </main>
            </div>
            <div className="md:ml-[280px]">
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
