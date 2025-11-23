import { ClipboardList, Coins, PartyPopper, ArrowDown, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
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
            <div className="text-center mb-12 max-w-4xl mx-auto">
                <div className="mb-6 inline-block p-3 bg-yellow-100 rounded-full">
                    <span className="text-4xl">💡</span>
                </div>
                <h1 className="font-headings text-4xl md:text-6xl font-bold text-dark-knight mb-8 leading-tight">
                    Découvrez les possibilités des <span className="text-transparent bg-clip-text bg-gradient-to-r from-autumn-landscape to-pizazz">artefacts interactifs</span>
                </h1>
                <p className="text-2xl font-medium text-whale-skin leading-relaxed mb-10 max-w-3xl mx-auto">
                    Choisissez un scénario ci-dessous pour découvrir ce que sont ces artefacts interactifs et découvrir ce que vous allez gagner en transformant vos méthodes de travail.
                </p>

                <div className="flex flex-wrap justify-center gap-6 text-lg font-bold text-dark-knight bg-white p-6 rounded-2xl border-2 border-desert-field shadow-lg inline-flex transform hover:scale-105 transition-transform duration-300">
                    <span className="flex items-center gap-2"><span className="text-green-500 text-2xl">✓</span> Gagner 50% de temps</span>
                    <span className="w-px h-8 bg-desert-field hidden sm:block"></span>
                    <span className="flex items-center gap-2"><span className="text-green-500 text-2xl">✓</span> Réduire les emails par 3</span>
                    <span className="w-px h-8 bg-desert-field hidden sm:block"></span>
                    <span className="flex items-center gap-2"><span className="text-green-500 text-2xl">✓</span> Éliminer le stress</span>
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
