import { RefreshCw, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react';

const AIArgumentaire = () => {
    const argumentaire = {
        pointsForts: [
            {
                title: "Ancrage territorial",
                description: "Votre réseau local (12 clients récurrents) démontre une implantation forte."
            },
            {
                title: "Cohérence avec la mission",
                description: "Votre projet s'aligne parfaitement avec les priorités du CNAP (soutien à la création contemporaine)."
            },
            {
                title: "Budget réaliste",
                description: "Le ratio honoraires/production (60/40) correspond aux standards du secteur."
            }
        ],
        risques: [
            {
                title: "Calendrier serré",
                description: "3 mois de production. Prévoir un plan B pour les délais de livraison."
            }
        ],
        suggestions: [
            "Ajouter 2-3 lettres de soutien d'institutions partenaires",
            "Détailler les retombées attendues (visibilité, emplois créés)",
            "Inclure un échéancier détaillé des livrables"
        ]
    };

    return (
        <div className="bg-gradient-to-br from-coast-cream to-white rounded-xl p-6 border-2 border-desert-field h-full">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="text-2xl">💡</div>
                    <h3 className="font-headings text-lg font-bold text-dark-knight">Argumentaire IA</h3>
                </div>
                <button className="flex items-center gap-2 px-3 py-1.5 bg-white border-2 border-whale-skin text-whale-skin rounded-lg text-xs font-bold hover:bg-whale-skin hover:text-white transition-colors">
                    <RefreshCw size={14} />
                    Régénérer
                </button>
            </div>

            <div className="space-y-6">
                <div>
                    <h4 className="font-bold text-dark-knight mb-3 flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        Points forts
                    </h4>
                    <div className="space-y-3">
                        {argumentaire.pointsForts.map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg border-l-4 border-whale-skin shadow-sm">
                                <div className="font-bold text-dark-knight text-sm mb-1">{item.title}</div>
                                <div className="text-xs text-skyline leading-relaxed">{item.description}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-dark-knight mb-3 flex items-center gap-2">
                        <AlertTriangle size={16} className="text-autumn-landscape" />
                        Risques à expliciter
                    </h4>
                    <div className="space-y-3">
                        {argumentaire.risques.map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg border-l-4 border-autumn-landscape shadow-sm">
                                <div className="font-bold text-dark-knight text-sm mb-1">{item.title}</div>
                                <div className="text-xs text-skyline leading-relaxed">{item.description}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-dark-knight mb-3 flex items-center gap-2">
                        <Lightbulb size={16} className="text-pizazz" />
                        Suggestions
                    </h4>
                    <ul className="space-y-2">
                        {argumentaire.suggestions.map((suggestion, index) => (
                            <li key={index} className="bg-white p-3 rounded-lg text-sm text-dark-knight pl-8 relative shadow-sm">
                                <span className="absolute left-3 top-3 text-autumn-landscape font-bold">→</span>
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AIArgumentaire;
