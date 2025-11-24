import { ClipboardList, Coins, PartyPopper, ArrowDown, ChevronDown, ChevronUp, ArrowRight, Rocket, Palette } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
    onSelectObjective: (objective: string) => void;
    onSkip: () => void;
}

const HeroSection = ({ onSelectObjective, onSkip }: HeroSectionProps) => {
    const [isInfoExpanded, setIsInfoExpanded] = useState(false);

    return (
        <section className="min-h-[80vh] flex flex-col items-center justify-center animate-in fade-in duration-700 py-12">
            <div className="text-center mb-16 max-w-3xl mx-auto px-4">
                <div className="mb-6 inline-block p-3 bg-yellow-100 rounded-full">
                    <span className="text-4xl">💡</span>
                </div>
                <h1 className="font-headings text-3xl md:text-5xl font-bold text-dark-knight mb-6 leading-tight">
                    Simulez l'impact des <span className="text-transparent bg-clip-text bg-gradient-to-r from-autumn-landscape to-pizazz">artefacts interactifs</span>
                </h1>
                <p className="text-lg md:text-xl font-medium text-whale-skin leading-relaxed mb-8">
                    Choisissez un scénario ci-dessous pour découvrir concrètement ce que vous allez apprendre et gagner en transformant vos méthodes de travail.
                </p>
                <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 text-sm font-medium text-whale-skin bg-white/50 p-4 rounded-xl border border-desert-field/30 inline-flex">
                    <span className="flex items-center gap-2"><span className="text-green-500">✓</span> Gagner 50% de temps</span>
                    <span className="flex items-center gap-2"><span className="text-green-500">✓</span> Réduire les emails par 3</span>
                    <span className="flex items-center gap-2"><span className="text-green-500">✓</span> Éliminer le stress</span>
                </div>
            </div>

            {/* Expandable Info Section */}
            <div className="w-full max-w-3xl mb-16">
                <button
                    onClick={() => setIsInfoExpanded(!isInfoExpanded)}
                    className="w-full bg-coast-cream border border-autumn-landscape/30 rounded-xl p-4 flex items-center justify-center gap-3 text-autumn-landscape font-bold hover:bg-autumn-landscape/10 transition-colors mb-4"
                >
                    {isInfoExpanded ? (
                        <>Masquer les détails <ChevronUp size={20} /></>
                    ) : (
                        <>Qu'est-ce qu'un artefact interactif ? <ChevronDown size={20} /></>
                    )}
                </button>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isInfoExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-white border border-desert-field rounded-xl p-8 shadow-sm">
                        <p className="text-lg text-dark-knight leading-relaxed mb-6">
                            Un artefact interactif est un <strong>micro-outil sur mesure</strong> qui remplace les documents statiques (PDF, Slides, Excel).
                            Au lieu de lire passivement, vous interagissez avec le contenu : vous simulez des décisions, vous explorez des données, et vous générez des résultats concrets.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-4">
                            <Link to="/opportunities" className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group text-center">
                                <span className="text-2xl mb-2">🚀</span>
                                <span className="font-bold text-dark-knight group-hover:text-blue-600">Opportunités</span>
                                <span className="text-xs text-skyline mt-1">Pourquoi maintenant ?</span>
                            </Link>
                            <Link to="/how-to-create" className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-autumn-landscape/10 transition-colors group text-center">
                                <span className="text-2xl mb-2">🛠️</span>
                                <span className="font-bold text-dark-knight group-hover:text-autumn-landscape">Comment créer</span>
                                <span className="text-xs text-skyline mt-1">Méthode & Outils</span>
                            </Link>
                            <Link to="/genesis" className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-pizazz/10 transition-colors group text-center">
                                <span className="text-2xl mb-2">🧠</span>
                                <span className="font-bold text-dark-knight group-hover:text-pizazz">Genèse</span>
                                <span className="text-xs text-skyline mt-1">La vision</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-16 px-4">
                <button
                    onClick={() => onSelectObjective('dossier')}
                    className="group relative bg-gradient-to-br from-coast-cream to-white border-2 border-desert-field rounded-2xl p-8 text-left hover:-translate-y-2 hover:shadow-xl hover:border-whale-skin transition-all duration-300 overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-whale-skin/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                        <ClipboardList className="text-whale-skin" size={32} />
                    </div>
                    <h3 className="font-headings text-xl font-bold text-dark-knight mb-2 group-hover:text-whale-skin transition-colors">Faire un dossier</h3>
                    <p className="text-skyline text-sm mb-6">Dossier de subvention, appel d'offres, ou candidature institutionnelle</p>
                    <div className="flex items-center text-autumn-landscape font-bold text-sm group-hover:translate-x-1 transition-transform">
                        Découvrir comment <ArrowRight size={16} className="ml-1" />
                    </div>
                </button>

                <button
                    onClick={() => onSelectObjective('financement')}
                    className="group relative bg-gradient-to-br from-coast-cream to-white border-2 border-desert-field rounded-2xl p-8 text-left hover:-translate-y-2 hover:shadow-xl hover:border-whale-skin transition-all duration-300 overflow-hidden"
                >
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                        <Coins className="text-autumn-landscape" size={32} />
                    </div>
                    <h3 className="font-headings text-xl font-bold text-dark-knight mb-2 group-hover:text-whale-skin transition-colors">Financer un projet</h3>
                    <p className="text-skyline text-sm mb-6">Levée de fonds, recherche de partenaires, plan budgétaire</p>
                    <div className="flex items-center text-autumn-landscape font-bold text-sm group-hover:translate-x-1 transition-transform">
                        Découvrir comment <ArrowRight size={16} className="ml-1" />
                    </div>
                </button>

                <button
                    onClick={() => onSelectObjective('evenement')}
                    className="group relative bg-gradient-to-br from-coast-cream to-white border-2 border-desert-field rounded-2xl p-8 text-left hover:-translate-y-2 hover:shadow-xl hover:border-whale-skin transition-all duration-300 overflow-hidden"
                >
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                        <PartyPopper className="text-pizazz" size={32} />
                    </div>
                    <h3 className="font-headings text-xl font-bold text-dark-knight mb-2 group-hover:text-whale-skin transition-colors">Organiser une soirée</h3>
                    <p className="text-skyline text-sm mb-6">Soirée client, événement culturel, ou vernissage</p>
                    <div className="flex items-center text-autumn-landscape font-bold text-sm group-hover:translate-x-1 transition-transform">
                        Découvrir comment <ArrowRight size={16} className="ml-1" />
                    </div>
                </button>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-6 w-full max-w-4xl px-4 mb-16">
                <button
                    onClick={() => onSelectObjective('productivity')}
                    className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-desert-field hover:border-pizazz transition-all duration-300 text-left flex-1"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-autumn-landscape to-pizazz rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-autumn-landscape/10 text-autumn-landscape rounded-xl group-hover:bg-pizazz group-hover:text-white transition-colors">
                            <Rocket size={32} />
                        </div>
                        <ArrowRight className="text-desert-field group-hover:text-pizazz transition-colors" />
                    </div>
                    <h3 className="font-headings text-xl font-bold text-dark-knight mb-2">Je veux produire plus vite</h3>
                    <p className="text-whale-skin text-sm">Découvrez comment automatiser la création de livrables complexes.</p>
                </button>

                <button
                    onClick={() => onSelectObjective('creativity')}
                    className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-desert-field hover:border-pizazz transition-all duration-300 text-left flex-1"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pizazz to-autumn-landscape rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-pizazz/10 text-pizazz rounded-xl group-hover:bg-pizazz group-hover:text-white transition-colors">
                            <Palette size={32} />
                        </div>
                        <ArrowRight className="text-desert-field group-hover:text-pizazz transition-colors" />
                    </div>
                    <h3 className="font-headings text-xl font-bold text-dark-knight mb-2">Je veux innover mieux</h3>
                    <p className="text-whale-skin text-sm">Explorez de nouvelles pistes créatives assistées par l'IA.</p>
                </button>
            </div>

            <button
                onClick={onSkip}
                className="text-skyline hover:text-whale-skin transition-colors flex flex-col items-center gap-2 text-sm font-medium animate-bounce"
            >
                Ou explorez librement les différences
                <ArrowDown size={16} />
            </button>
        </section>
    );
};

export default HeroSection;
