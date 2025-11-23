import { ExternalLink, ChevronDown, ChevronUp, Zap, Table, Users, Monitor, FlaskConical } from 'lucide-react';
import { useState } from 'react';

const Genesis = () => {
    const [expandedCase, setExpandedCase] = useState<number | null>(null);

    const sources = [
        {
            title: "The New AI Operating System of Work",
            author: "Nate Sweletter",
            url: "https://natesweletter.substack.com/p/the-new-ai-operating-system-of-work-goodbye",
            icon: "🏗️",
            summary: "Introduit le concept d'instruments exécutables remplaçant les documents statiques. Ces artefacts intègrent la logique décisionnelle, fournissent un audit trail immédiat et éliminent les boucles de feedback inutiles.",
            keyPoints: [
                "Intégration de la logique décisionnelle dans l'interface",
                "Audit trail immédiat et traçabilité",
                "Élimination des réunions de suivi",
                "Évolution itérative de l'outil"
            ]
        },
        {
            title: "Generative UI: LLMs are Effective UI Generators",
            author: "Google Research",
            url: "#",
            icon: "🧪",
            summary: "Démontre que les LLM modernes peuvent générer des interfaces utilisateur complètes et fonctionnelles. L'étude révèle une préférence utilisateur de 83% pour les UI génératives par rapport au markdown standard.",
            keyPoints: [
                "83% de préférence pour les UI génératives",
                "44% de comparabilité avec des experts humains",
                "Nécessité d'un prompt engineering rigoureux",
                "Architecture serveur exposant des outils"
            ]
        },
        {
            title: "Designing Systems, Not Prompts",
            author: "Ben Davies Romano",
            url: "https://bendaviesromano.medium.com/designing-systems-not-prompts-a-complete-guide-to-making-ai-actually-work-with-systems-thinking-8f5395192a2",
            icon: "⚙️",
            summary: "Plaide pour une pensée systémique. L'IA n'est pas une boîte magique mais un composant d'un système plus large qui nécessite contraintes, validation et boucles de feedback.",
            keyPoints: [
                "Définir d'abord les contraintes du système",
                "Concevoir pour la robustesse, pas la perfection",
                "Itérer sur le système complet end-to-end",
                "Instrumenter pour apprendre des échecs"
            ]
        },
        {
            title: "Malleable Software",
            author: "Ink & Switch",
            url: "https://www.inkandswitch.com/essay/malleable-software/",
            icon: "🧩",
            summary: "Explore le concept de logiciel malléable : des applications que les utilisateurs peuvent modifier et adapter sans être développeurs. Les artefacts générés par LLM incarnent cette vision.",
            keyPoints: [
                "Inspectabilité du fonctionnement",
                "Modifiabilité progressive par l'utilisateur",
                "Partageabilité des modifications",
                "Pérennité face aux mises à jour"
            ]
        }
    ];

    const useCases = [
        {
            id: 1,
            title: "Mini-app de cadrage ponctuel (Decision Brief Studio)",
            icon: Zap,
            color: "text-pizazz",
            bg: "bg-pizazz/10",
            usage: "Préparer un 'brief de décision' pour un sujet unique (lancement d'offre, choix partenaire, roadmap Q) en 2–3 h.",
            stack: "Google Doc/Notion (base de vérité) + Claude/Perplexity (synthèse) + Export PDF.",
            features: [
                "Formulaire léger pour forcer la complétude du contexte",
                "Comparaison d'options selon critères générée par IA",
                "Section 'hypothèses à tester' pré-remplie"
            ],
            friction: "Remplace les allers-retours mails/slides par un doc unique structuré et augmenté."
        },
        {
            id: 2,
            title: "Tableau collaboratif d'exploration (Scenario Sheet)",
            icon: Table,
            color: "text-blue-600",
            bg: "bg-blue-50",
            usage: "Explorer quelques scénarios (prix, staffing, roadmap) sans construire un modèle financier complet.",
            stack: "Google Sheets/Airtable (table unique) + Claude (génération de variantes).",
            features: [
                "Génération de 5 scénarios contrastés à partir d'hypothèses",
                "Colonne 'commentaire IA' régénérable",
                "Vue filtrée pour micro-expérimentations"
            ],
            friction: "Évite la multiplication des versions de fichiers Excel. Centralise l'exploration."
        },
        {
            id: 3,
            title: "Atelier d'idéation structuré (Collaborative Workshop Canvas)",
            icon: Users,
            color: "text-purple-600",
            bg: "bg-purple-50",
            usage: "Conduire un atelier de 2–3 h où la sortie est un artefact exploitable directement.",
            stack: "Notion/Doc structuré + Claude (co-facilitateur).",
            features: [
                "Saisie directe par les participants",
                "Clustering et synthèse des idées par IA en temps réel",
                "Génération automatique d'un plan d'expérimentation"
            ],
            friction: "Plus de compte-rendu à rédiger post-atelier. L'artefact est la sortie."
        },
        {
            id: 4,
            title: "Explorable Explainer (Sujet unique)",
            icon: Monitor,
            color: "text-green-600",
            bg: "bg-green-50",
            usage: "Créer une petite web-app pédagogique sur un sujet précis, jetable mais partageable.",
            stack: "Claude Artifacts (HTML/JS) + Doc source.",
            features: [
                "Sections interactives (mini simulateurs)",
                "Quiz léger de vérification",
                "Export PDF linéaire pour archivage"
            ],
            friction: "Rend la documentation vivante et engageante. Meilleure rétention qu'un PDF."
        },
        {
            id: 5,
            title: "Micro-app de validation (Hypothesis Lab)",
            icon: FlaskConical,
            color: "text-autumn-landscape",
            bg: "bg-autumn-landscape/10",
            usage: "Aider à formuler, croiser et tester les hypothèses pour un problème précis.",
            stack: "Airtable/Notion DB + Perplexity (design d'expériences).",
            features: [
                "Suggestion d'expériences rapides par l'IA",
                "Simulation de scénarios basés sur les premiers résultats",
                "Mémo de validation auto-généré"
            ],
            friction: "Structure la démarche scientifique souvent brouillonne dans les projets."
        }
    ];

    return (
        <div className="max-w-4xl mx-auto pb-20 animate-in fade-in duration-500">
            {/* Header */}
            <div className="mb-16">
                <h1 className="font-headings text-4xl font-bold text-dark-knight mb-4">Genèse du projet</h1>
                <p className="text-xl text-skyline">
                    Les sources et inspirations qui ont façonné la vision des Artefacts Vivants.
                </p>
            </div>

            {/* Sources Grid */}
            <div className="grid gap-8 mb-20">
                {sources.map((source, index) => (
                    <div key={index} className="bg-white rounded-xl p-8 border border-desert-field shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-coast-cream flex items-center justify-center text-2xl">
                                    {source.icon}
                                </div>
                                <div>
                                    <h2 className="font-headings text-xl font-bold text-whale-skin">{source.title}</h2>
                                    <p className="text-sm text-skyline font-medium">par {source.author}</p>
                                </div>
                            </div>
                            {source.url !== "#" && (
                                <a
                                    href={source.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-autumn-landscape hover:text-pizazz transition-colors"
                                >
                                    <ExternalLink size={20} />
                                </a>
                            )}
                        </div>

                        <div className="mb-6 bg-gray-50 p-4 rounded-lg border-l-4 border-whale-skin">
                            <p className="text-dark-knight italic leading-relaxed">
                                "{source.summary}"
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-sm text-skyline uppercase tracking-wider mb-3">Enseignements clés</h3>
                            <ul className="grid sm:grid-cols-2 gap-3">
                                {source.keyPoints.map((point, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-dark-knight text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-autumn-landscape shrink-0"></div>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {/* Use Cases Section */}
            <div className="mb-12">
                <h2 className="font-headings text-3xl font-bold text-dark-knight mb-8 flex items-center gap-3">
                    <Zap className="text-autumn-landscape" />
                    Exemples d'Usage No-Code
                </h2>
                <div className="space-y-4">
                    {useCases.map((useCase) => (
                        <div
                            key={useCase.id}
                            className={`border-2 rounded-xl transition-all duration-300 overflow-hidden ${expandedCase === useCase.id
                                    ? 'border-whale-skin shadow-md bg-white'
                                    : 'border-desert-field hover:border-skyline bg-white/50'
                                }`}
                        >
                            <button
                                onClick={() => setExpandedCase(expandedCase === useCase.id ? null : useCase.id)}
                                className="w-full p-6 flex items-center justify-between text-left"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${useCase.bg} ${useCase.color}`}>
                                        <useCase.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dark-knight text-lg">{useCase.title}</h3>
                                        <p className="text-sm text-skyline hidden sm:block">{useCase.usage}</p>
                                    </div>
                                </div>
                                {expandedCase === useCase.id ? <ChevronUp size={24} className="text-whale-skin" /> : <ChevronDown size={24} className="text-skyline" />}
                            </button>

                            <div className={`transition-all duration-300 ease-in-out ${expandedCase === useCase.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="p-6 pt-0 border-t border-desert-field/30 mt-2">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-bold text-sm text-skyline uppercase tracking-wider mb-2">Stack Technique</h4>
                                            <p className="text-sm text-dark-knight font-medium bg-gray-50 p-3 rounded-lg border border-gray-100">
                                                {useCase.stack}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-skyline uppercase tracking-wider mb-2">Friction Adressée</h4>
                                            <p className="text-sm text-dark-knight font-medium bg-gray-50 p-3 rounded-lg border border-gray-100">
                                                {useCase.friction}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <h4 className="font-bold text-sm text-skyline uppercase tracking-wider mb-3">Fonctionnalités Clés</h4>
                                        <ul className="space-y-2">
                                            {useCase.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-dark-knight">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-autumn-landscape shrink-0 mt-1.5"></div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Genesis;
