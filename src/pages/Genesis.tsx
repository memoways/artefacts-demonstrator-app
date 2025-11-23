import { ExternalLink } from 'lucide-react';

const Genesis = () => {
    const sources = [
        {
            title: "The New AI Operating System of Work",
            author: "Nate Sweletter",
            url: "https://natesweletter.substack.com/p/the-new-ai-operating-system-of-work-goodbye",
            icon: "🏗️",
            summary: "Imagine un 'AI operating system of work' où les documents statiques sont remplacés par des instruments exécutables. Ces artefacts encapsulent la logique, la décision et l'action, rendant le reporting passif obsolète.",
            keyPoints: [
                "Artefacts exécutables vs documents statiques",
                "Centré sur la décision et l'action",
                "Audit trail immédiat et traçabilité",
                "Fin du reporting passif et des réunions de suivi"
            ]
        },
        {
            title: "Generative UI: LLMs are Effective UI Generators",
            author: "Google Research",
            url: "#",
            icon: "🧪",
            summary: "Démontre que les LLM peuvent générer des interfaces riches (web apps, jeux, simulateurs) à la volée. L'étude révèle une préférence utilisateur de 83% pour ces UI génératives par rapport au texte brut.",
            keyPoints: [
                "Pipeline complet (Prompt + Outils + UI)",
                "Préférence utilisateur forte (83%)",
                "Interfaces riches (Apps, Jeux, Simulateurs)",
                "Architecture serveur nécessaire pour les outils"
            ]
        },
        {
            title: "Designing Systems, Not Prompts",
            author: "Ben Davies Romano",
            url: "https://bendaviesromano.medium.com/designing-systems-not-prompts-a-complete-guide-to-making-ai-actually-work-with-systems-thinking-8f5395192a2",
            icon: "⚙️",
            summary: "L'IA n'est pas une boîte noire magique. Il faut concevoir des systèmes explicites en 6 blocs (scope, inputs, process, rules, output, evaluation) pour garantir robustesse et fiabilité.",
            keyPoints: [
                "Modèle en 6 blocs explicites",
                "Design Artefact réutilisable",
                "Contraintes et validation rigoureuses",
                "IA comme composant du système, pas le tout"
            ]
        },
        {
            title: "Malleable Software",
            author: "Ink & Switch",
            url: "https://www.inkandswitch.com/essay/malleable-software/",
            icon: "🧩",
            summary: "Défend la vision d'un logiciel malléable où l'utilisateur peut reconfigurer ses outils à la volée. Une 'pente douce' (gentle slope) permet de passer progressivement d'utilisateur à créateur.",
            keyPoints: [
                "Adaptation locale sans ingénieurs",
                "Gentle slope : utilisateur → créateur",
                "Reconfiguration à la volée selon le besoin",
                "Outils génériques mais usages spécifiques"
            ]
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
        </div>
    );
};

export default Genesis;
