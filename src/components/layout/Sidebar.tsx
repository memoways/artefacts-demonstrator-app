import { Link, useLocation } from 'react-router-dom';
import { Home, Theater, Briefcase, Building2, Lightbulb, Bell, MessageSquare, FileText, CheckCircle, BookOpen, Settings, Hammer } from 'lucide-react';
import { useState } from 'react';

const Sidebar = () => {
    const location = useLocation();
    const [showNotifications, setShowNotifications] = useState(false);

    const isActive = (path: string) => location.pathname === path;

    const menuItems = [
        { icon: Home, label: 'Accueil', path: '/' },
        { icon: BookOpen, label: 'Genèse du projet', path: '/genesis' },
        { icon: Settings, label: 'Coulisses', path: '/process' },
        { icon: Lightbulb, label: 'Opportunités', path: '/opportunities' },
        { icon: Hammer, label: 'Comment créer', path: '/how-to-create' },
    ];

    const demos = [
        { icon: Theater, label: 'Théâtre', path: '/theater' },
        { icon: Briefcase, label: 'Freelance', path: '/freelance' },
        { icon: Building2, label: 'PME', path: '/pme' },
    ];

    const notifications = [
        {
            id: 1,
            user: "Sophie Martin",
            action: "a commenté",
            target: "Budget prévisionnel",
            time: "Il y a 2 min",
            icon: MessageSquare,
            color: "text-blue-500",
            bg: "bg-blue-50"
        },
        {
            id: 2,
            user: "Marc Dubois",
            action: "a validé",
            target: "Section Artistique",
            time: "Il y a 15 min",
            icon: CheckCircle,
            color: "text-green-500",
            bg: "bg-green-50"
        },
        {
            id: 3,
            user: "IA Assistant",
            action: "a généré",
            target: "3 nouvelles suggestions",
            time: "Il y a 1h",
            icon: FileText,
            color: "text-purple-500",
            bg: "bg-purple-50"
        }
    ];

    return (
        <div className="w-[280px] h-screen fixed left-0 top-0 bg-gradient-to-b from-royal-curtsy to-dark-knight text-coast-cream flex flex-col p-6 z-50">
            <div className="mb-8">
                <h1 className="font-headings text-xl font-bold text-white">Little Helpers</h1>
                <p className="text-xs text-skyline mt-1">Generative UI Prototype</p>
            </div>

            <nav className="flex-1 space-y-8">
                <div>
                    <ul className="space-y-2">
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    state={item.path === '/' ? { reset: true } : undefined}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive(item.path)
                                        ? 'bg-whale-skin/20 border-l-4 border-autumn-landscape text-white'
                                        : 'hover:bg-whale-skin/10 text-skyline hover:text-white'
                                        }`}
                                >
                                    <item.icon size={20} />
                                    <span className="font-body text-sm">{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-xs font-bold text-skyline uppercase tracking-wider mb-4 px-4">Démos Sectorielles</h3>
                    <ul className="space-y-2">
                        {demos.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive(item.path)
                                        ? 'bg-whale-skin/20 border-l-4 border-autumn-landscape text-white'
                                        : 'hover:bg-whale-skin/10 text-skyline hover:text-white'
                                        }`}
                                >
                                    <item.icon size={20} />
                                    <span className="font-body text-sm">{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            <a
                href="https://memoways.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 text-skyline hover:text-white w-full transition-colors"
            >
                <MessageSquare size={20} />
                <span className="font-body text-sm">Contacter l'équipe</span>
            </a>


            {/* Notifications at bottom */}
            <div className="pt-2 border-t border-white/10 relative">
                <button
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="flex items-center gap-3 px-4 py-3 text-skyline hover:text-white w-full transition-colors relative"
                >
                    <div className="relative">
                        <Bell size={20} />
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-autumn-landscape rounded-full border border-dark-knight"></span>
                    </div>
                    <span className="font-body text-sm">Notifications</span>
                </button>

                {showNotifications && (
                    <div className="absolute bottom-16 left-4 w-80 bg-white rounded-xl shadow-lg border border-desert-field overflow-hidden animate-in fade-in zoom-in-95 duration-200 z-50">
                        <div className="p-4 border-b border-desert-field/30 flex justify-between items-center bg-coast-cream/30">
                            <h3 className="font-bold text-dark-knight text-sm">Notifications</h3>
                            <span className="text-xs text-autumn-landscape font-bold cursor-pointer hover:underline">Tout marquer comme lu</span>
                        </div>
                        <div className="max-h-[300px] overflow-y-auto">
                            {notifications.map((notif) => (
                                <div key={notif.id} className="p-4 border-b border-desert-field/10 hover:bg-coast-cream/20 transition-colors cursor-pointer flex gap-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${notif.bg} ${notif.color}`}>
                                        <notif.icon size={14} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-dark-knight leading-snug">
                                            <span className="font-bold">{notif.user}</span> {notif.action} <span className="font-medium text-whale-skin">{notif.target}</span>
                                        </p>
                                        <span className="text-[10px] text-skyline mt-1 block">{notif.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
};

export default Sidebar;
