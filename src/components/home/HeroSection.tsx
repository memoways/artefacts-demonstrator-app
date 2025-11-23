import { ClipboardList, Coins, PartyPopper, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
    onSelectObjective: (objective: string) => void;
    onSkip: () => void;
}

const HeroSection = ({ onSelectObjective, onSkip }: HeroSectionProps) => {
    return (
        <section className="min-h-[80vh] flex flex-col items-center justify-center animate-in fade-in duration-700">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <div className="mb-6 inline-block p-3 bg-yellow-100 rounded-full">
                    <span className="text-4xl">💡</span>
                </div>
                <h1 className="font-headings text-4xl md:text-5xl font-bold text-dark-knight mb-6 leading-tight">
                    Simulez l'impact des <span className="text-transparent bg-clip-text bg-gradient-to-r from-autumn-landscape to-pizazz">artefacts interactifs</span>
                </h1>
                <p className="text-xl font-medium text-whale-skin leading-relaxed mb-8">
                    Choisissez un scénario ci-dessous pour découvrir concrètement ce que vous allez apprendre et gagner en transformant vos méthodes de travail.
                </p>

                <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-whale-skin bg-white/50 p-4 rounded-xl border border-desert-field/30 inline-flex">
                    <span className="flex items-center gap-2"><span className="text-green-500">✓</span> Gagner 50% de temps</span>
                    <span className="flex items-center gap-2"><span className="text-green-500">✓</span> Réduire les emails par 3</span>
                    <span className="flex items-center gap-2"><span className="text-green-500">✓</span> Éliminer le stress</span>
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
                        Découvrir comment →
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
                        Découvrir comment →
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
                        Découvrir comment →
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
