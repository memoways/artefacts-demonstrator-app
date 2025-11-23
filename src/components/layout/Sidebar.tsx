import { Link, useLocation } from 'react-router-dom';
import { Home, Theater, Briefcase, Building2, Lightbulb, MessageSquare, BookOpen, Settings, Hammer } from 'lucide-react';

const Sidebar = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    const menuItems = [
        { icon: Home, label: 'Accueil', path: '/' },
        { icon: Lightbulb, label: 'Opportunités', path: '/opportunities' },
        { icon: Hammer, label: 'Comment créer', path: '/how-to-create' },
        { icon: BookOpen, label: 'Genèse du projet', path: '/genesis' },
        { icon: Settings, label: 'Coulisses', path: '/process' },
    ];

    const demos = [
        { icon: Theater, label: 'Théâtre', path: '/theater' },
        { icon: Briefcase, label: 'Freelance', path: '/freelance' },
        { icon: Building2, label: 'PME', path: '/pme' },
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
                className="flex items-center gap-3 px-4 py-3 text-skyline hover:text-white w-full transition-colors mt-auto"
            >
                <MessageSquare size={20} />
                <span className="font-body text-sm">Contacter l'équipe</span>
            </a>
        </div >
    );
};

export default Sidebar;
