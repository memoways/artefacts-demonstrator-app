import { ArrowLeft, FileText, Sparkles, Check, FileSpreadsheet, Mail } from 'lucide-react';

interface ForkScreenProps {
    objective: string;
    onSelectRoute: (route: 'classic' | 'artefact') => void;
    onBack: () => void;
    onCompare: () => void;
}

const ForkScreen = ({ objective, onSelectRoute, onBack, onCompare }: ForkScreenProps) => {
    const content = {
        dossier: {
            intro: "Pour créer un dossier de subvention, vous avez deux approches possibles.",
            label: "Dossier",
            classicDesc: "Word pour le texte, Excel pour le budget, emails pour la collaboration...",
            artefactDesc: "Une interface interactive qui centralise tout et génère le PDF final."
        },
        financement: {
            intro: "Pour préparer un dossier de financement, deux chemins s'offrent à vous.",
            label: "Financement",
            classicDesc: "PowerPoint pour les slides, tableaux Excel, documents Word séparés...",
            artefactDesc: "Un espace collaboratif unifié avec simulations en temps réel."
        },
        evenement: {
            intro: "Pour organiser votre soirée client, vous pouvez procéder de deux façons.",
            label: "Événement",
            classicDesc: "Emails, fichiers Excel partagés, documents Word pour les prestataires...",
            artefactDesc: "Un tableau de bord interactif avec simulateur budgétaire temps réel."
        }
    }[objective] || { // Default fallback
        intro: "Pour réaliser votre projet, vous avez deux approches possibles.",
        label: "Projet",
        classicDesc: "Outils bureautiques classiques dispersés.",
        artefactDesc: "Interface unifiée et interactive."
    };

    return (
        <section className="min-h-[80vh] py-10 animate-in slide-in-from-bottom-8 duration-500">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-4 mb-12 text-sm">
                <button onClick={onBack} className="flex items-center gap-1 text-skyline hover:text-whale-skin transition-colors">
                    <ArrowLeft size={16} /> Retour
                </button>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-whale-skin text-whale-skin font-bold shadow-sm">
                    <Check size={14} />
                    {content.label}
                </div>
                <span className="text-desert-field">→</span>
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-autumn-landscape to-pizazz text-white rounded-full font-bold shadow-md">
                    <span>🔀</span>
                    Choix de méthode
                </div>
            </div>

            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="font-headings text-3xl font-bold text-dark-knight leading-tight">
                    {content.intro}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4 mb-16">
                {/* Route A: Classique */}
                <div className="bg-white rounded-2xl border-2 border-desert-field p-8 hover:border-skyline transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                            <FileText size={20} />
                        </div>
                        <h3 className="font-bold text-skyline uppercase tracking-wider text-sm">Route A</h3>
                    </div>

                    <h4 className="font-headings text-2xl font-bold text-dark-knight mb-4">Méthode Classique</h4>
                    <p className="text-skyline mb-8 min-h-[3rem]">{content.classicDesc}</p>

                    <div className="grid grid-cols-2 gap-3 mb-8">
                        <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 p-2 rounded">
                            <FileText size={14} /> Word
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 p-2 rounded">
                            <FileSpreadsheet size={14} /> Excel
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 p-2 rounded">
                            <Mail size={14} /> Emails
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 p-2 rounded">
                            <FileText size={14} /> PDF
                        </div>
                    </div>

                    <button
                        onClick={() => onSelectRoute('classic')}
                        className="w-full py-4 rounded-xl border-2 border-gray-200 text-gray-600 font-bold hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-2"
                    >
                        Explorer cette route <ArrowLeft className="rotate-180" size={18} />
                    </button>
                </div>

                {/* Route B: Artefacts */}
                <div className="relative bg-gradient-to-br from-white to-coast-cream/30 rounded-2xl border-2 border-autumn-landscape p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                    <div className="absolute top-4 right-4 bg-autumn-landscape text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                        ✨ Nouveau
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-autumn-landscape/10 rounded-lg flex items-center justify-center text-autumn-landscape">
                            <Sparkles size={20} />
                        </div>
                        <h3 className="font-bold text-autumn-landscape uppercase tracking-wider text-sm">Route B</h3>
                    </div>

                    <h4 className="font-headings text-2xl font-bold text-dark-knight mb-4">Artefacts Interactifs</h4>
                    <p className="text-skyline mb-8 min-h-[3rem]">{content.artefactDesc}</p>

                    <div className="grid grid-cols-2 gap-3 mb-8">
                        <div className="flex items-center gap-2 text-xs text-whale-skin bg-white border border-whale-skin/10 p-2 rounded shadow-sm">
                            <Sparkles size={14} className="text-autumn-landscape" /> Interface unifiée
                        </div>
                        <div className="flex items-center gap-2 text-xs text-whale-skin bg-white border border-whale-skin/10 p-2 rounded shadow-sm">
                            <Sparkles size={14} className="text-autumn-landscape" /> Temps réel
                        </div>
                        <div className="flex items-center gap-2 text-xs text-whale-skin bg-white border border-whale-skin/10 p-2 rounded shadow-sm">
                            <Sparkles size={14} className="text-autumn-landscape" /> Collab intégrée
                        </div>
                        <div className="flex items-center gap-2 text-xs text-whale-skin bg-white border border-whale-skin/10 p-2 rounded shadow-sm">
                            <Sparkles size={14} className="text-autumn-landscape" /> Export auto
                        </div>
                    </div>

                    <button
                        onClick={() => onSelectRoute('artefact')}
                        className="w-full py-4 rounded-xl bg-whale-skin text-white font-bold hover:bg-dark-knight shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                        Explorer cette route <ArrowLeft className="rotate-180" size={18} />
                    </button>
                </div>
            </div>

            <div className="text-center">
                <p className="text-skyline mb-4 text-sm">
                    💡 <strong>Conseil :</strong> Explorez les deux routes pour comparer les approches
                </p>
                <button
                    onClick={onCompare}
                    className="text-autumn-landscape font-bold hover:text-pizazz transition-colors border-b-2 border-autumn-landscape/20 hover:border-autumn-landscape"
                >
                    Je préfère comparer directement
                </button>
            </div>
        </section>
    );
};

export default ForkScreen;
