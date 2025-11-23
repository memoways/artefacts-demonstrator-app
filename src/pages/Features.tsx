import { CheckCircle2, Clock, Database, Brain, Zap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
    const levels = [
        {
            id: 1,
            title: "Niveau 1 : L'Essentiel",
            description: "Fonctionnalités de base pour remplacer un document statique.",
            icon: CheckCircle2,
            color: "bg-green-100 text-green-600",
            borderColor: "border-green-200",
            complexity: "Faible",
            time: "1-2 jours",
            features: [
                "Formulaires sur mesure (champs conditionnels)",
                "Calculs automatiques temps réel",
                "Validation de données basique",
                "Export PDF standardisé",
                "Interface responsive mobile/desktop"
            ]
        },
        {
            id: 2,
            title: "Niveau 2 : L'Intermédiaire",
            description: "Ajout de persistance et de logique métier avancée.",
            icon: Database,
            color: "bg-blue-100 text-blue-600",
            borderColor: "border-blue-200",
            complexity: "Moyenne",
            time: "3-5 jours",
            features: [
                "Sauvegarde des données (comptes utilisateurs)",
                "Tableaux de bord et visualisation de données",
                "Logique métier complexe (règles sectorielles)",
                "Upload et gestion de fichiers",
                "Historique des versions"
            ]
        },
        {
            id: 3,
            title: "Niveau 3 : L'Avancé",
            description: "Intelligence artificielle et collaboration temps réel.",
            icon: Brain,
            color: "bg-purple-100 text-purple-600",
            borderColor: "border-purple-200",
            complexity: "Élevée",
            time: "5-10+ jours",
            features: [
                "Intégration IA réelle (analyse, génération de texte)",
                "Collaboration temps réel (multi-utilisateurs type Google Docs)",
                "Connexions API externes (CRM, ERP)",
                "Workflows de validation complexes",
                "Analytique avancée et reporting"
            ]
        }
    ];

    return (
        <div className="max-w-4xl mx-auto pb-10">
            <Link to="/" className="inline-flex items-center gap-2 text-skyline hover:text-whale-skin mb-8 transition-colors">
                <ArrowLeft size={20} />
                Retour à l'accueil
            </Link>

            <div className="mb-12 text-center">
                <h1 className="font-headings text-4xl font-bold text-dark-knight mb-4">
                    Fonctionnalités Possibles
                </h1>
                <p className="text-xl text-skyline max-w-2xl mx-auto">
                    Ce que vous pouvez attendre d'un artefact, classé par complexité de mise en œuvre.
                </p>
            </div>

            <div className="space-y-8">
                {levels.map((level) => (
                    <div key={level.id} className={`bg-white rounded-xl border-2 ${level.borderColor} overflow-hidden shadow-sm hover:shadow-md transition-shadow`}>
                        <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
                            <div className="shrink-0 flex flex-col items-center text-center md:w-48">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${level.color}`}>
                                    <level.icon size={32} />
                                </div>
                                <div className="space-y-2 w-full">
                                    <div className="flex items-center justify-between md:justify-center gap-2 text-sm text-dark-knight bg-gray-50 px-3 py-1.5 rounded-lg">
                                        <Zap size={14} className="text-autumn-landscape" />
                                        <span className="font-bold">{level.complexity}</span>
                                    </div>
                                    <div className="flex items-center justify-between md:justify-center gap-2 text-sm text-dark-knight bg-gray-50 px-3 py-1.5 rounded-lg">
                                        <Clock size={14} className="text-skyline" />
                                        <span>{level.time}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1">
                                <h2 className="font-headings text-2xl font-bold text-dark-knight mb-2">{level.title}</h2>
                                <p className="text-skyline mb-6">{level.description}</p>

                                <h3 className="font-bold text-sm text-dark-knight uppercase tracking-wider mb-3">Fonctionnalités clés</h3>
                                <ul className="grid sm:grid-cols-2 gap-3">
                                    {level.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-dark-knight text-sm">
                                            <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${level.color.split(' ')[0].replace('bg-', 'bg-')}`}></div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 p-8 bg-coast-cream/50 rounded-2xl border border-desert-field text-center">
                <h3 className="font-headings text-xl font-bold text-dark-knight mb-2">Vous avez un besoin spécifique ?</h3>
                <p className="text-skyline mb-6">
                    Chaque artefact est construit sur mesure. La complexité s'ajuste à vos contraintes de temps et de budget.
                </p>
                <button className="px-6 py-3 bg-whale-skin hover:bg-dark-knight text-white rounded-lg font-bold transition-colors">
                    Discuter de votre projet
                </button>
            </div>
        </div>
    );
};

export default Features;
