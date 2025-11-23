import { ExternalLink } from 'lucide-react';

const Genesis = () => {
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

    return (
        <div className="max-w-4xl mx-auto pb-10">
            <div className="mb-12">
                <h1 className="font-headings text-4xl font-bold text-dark-knight mb-4">Genèse du projet</h1>
                <p className="text-xl text-skyline">
                    Les sources et inspirations qui ont façonné la vision des Artefacts Vivants.
                </p>
            </div>

            <div className="grid gap-8">
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
