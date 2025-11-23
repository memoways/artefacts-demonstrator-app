import { BookOpen, Lightbulb, Target, AlertTriangle, ArrowRight, Quote, Layers, Cpu, Puzzle, Zap } from 'lucide-react';
import { useState } from 'react';

const Genesis = () => {
    const [activeTab, setActiveTab] = useState<'takeaway' | 'ideas' | 'opportunities' | 'limits'>('takeaway');

    const synthesis = {
        takeaway: {
            icon: Quote,
            title: "Le Grand Basculement",
            content: "Toutes les références convergent vers une même idée : on passe des « documents » figés à des artefacts exécutables. Ce sont des surfaces interactives, générées ou augmentées par l'IA, qui encapsulent à la fois le contexte, la logique et le workflow.",
            color: "text-pizazz",
            bg: "bg-pizazz/10"
        },
        ideas: {
            icon: Lightbulb,
            title: "Idées Clés",
            items: [
                "Système en 6 blocs (Scope, Inputs, Process, Rules, Outputs, Evaluation)",
                "Logiciel Malléable : adaptation locale sans ingénieurs",
                "L'Artefact comme unité de travail (Données + Logique + IA)",
                "Generative UI : Pipeline complet (Prompt → Outils → UI)"
            ],
            color: "text-autumn-landscape",
            bg: "bg-autumn-landscape/10"
        },
        opportunities: {
            icon: Target,
            title: "Opportunités",
            items: [
                "Micro-apps ultra ciblées créées par des non-ingénieurs",
                "Projets « one-shot » transformés en artefacts pérennes",
                "Générateurs d'UI légers et no-code"
            ],
            color: "text-green-600",
            bg: "bg-green-100"
        },
        limits: {
            icon: AlertTriangle,
            title: "Points de Vigilance",
            items: [
                "Coût cognitif de la malléabilité (besoin de bons gabarits)",
                "Lourdeur technique des « vraies » Generative UI (serveur, modèles)",
                "Piège de la généralisation excessive (rester spécifique)"
            ],
            color: "text-red-500",
            bg: "bg-red-100"
        }
    };

    const sources = [
        {
            title: "The New AI Operating System of Work",
            author: "Nate Sweletter",
            url: "https://natesweletter.substack.com/p/the-new-ai-operating-system-of-work-goodbye",
            icon: Cpu,
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
            icon: Zap,
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
            icon: Layers,
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
            icon: Puzzle,
            summary: "Défend la vision d'un logiciel malléable où l'utilisateur peut reconfigurer ses outils à la volée. Une 'pente douce' (gentle slope) permet de passer progressivement d'utilisateur à créateur.",
            keyPoints: [
                "Adaptation locale sans ingénieurs",
                "Gentle slope : utilisateur → créateur",
                "Reconfiguration à la volée selon le besoin",
                "Outils génériques but usages spécifiques"
            ]
        }
    ];

    return (
        <div className="max-w-6xl mx-auto pb-20 px-4">
            {/* Header */}
            <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="inline-flex items-center justify-center p-3 bg-pizazz/10 rounded-full mb-6">
                    <BookOpen className="text-pizazz" size={32} />
                </div>
                <h1 className="font-headings text-4xl md:text-5xl font-bold text-dark-knight mb-6">
                    Genèse du projet
                </h1>
                <p className="text-xl text-whale-skin max-w-3xl mx-auto leading-relaxed">
                    Ce démonstrateur est né de la convergence de plusieurs recherches récentes sur l'avenir du travail et des interfaces IA.
                    Voici la synthèse de ces travaux fondateurs.
                </p>
            </div>

            {/* Strategic Synthesis Section */}
            <div className="mb-20">
                <h2 className="font-headings text-2xl font-bold text-dark-knight mb-8 flex items-center gap-3">
                    <span className="bg-dark-knight text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">1</span>
                    Synthèse Stratégique
                </h2>

                <div className="bg-white rounded-2xl shadow-sm border border-desert-field overflow-hidden">
                    <div className="flex border-b border-desert-field overflow-x-auto">
                        {(Object.keys(synthesis) as Array<keyof typeof synthesis>).map((key) => {
                            const item = synthesis[key];
                            const Icon = item.icon;
                            const isActive = activeTab === key;
                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`flex-1 min-w-[150px] p-4 flex items-center justify-center gap-2 font-bold transition-colors ${isActive ? 'bg-coast-cream text-dark-knight border-b-2 border-pizazz' : 'text-skyline hover:bg-gray-50'
                                        }`}
                                >
                                    <Icon size={20} className={isActive ? item.color : ''} />
                                    {item.title}
                                </button>
                            );
                        })}
                    </div>

                    <div className="p-8 min-h-[300px] flex items-center justify-center bg-coast-cream/30">
                        <div className="max-w-3xl text-center animate-in fade-in duration-300 key={activeTab}">
                            <div className={`inline-flex p-4 rounded-full mb-6 ${synthesis[activeTab].bg}`}>
                                {(() => {
                                    const Icon = synthesis[activeTab].icon;
                                    return <Icon size={48} className={synthesis[activeTab].color} />;
                                })()}
                            </div>
                            <h3 className={`text-2xl font-bold mb-6 ${synthesis[activeTab].color}`}>
                                {synthesis[activeTab].title}
                            </h3>

                            {'content' in synthesis[activeTab] ? (
                                <p className="text-xl text-dark-knight leading-relaxed font-medium">
                                    {(synthesis[activeTab] as any).content}
                                </p>
                            ) : (
                                <ul className="text-left inline-block space-y-4">
                                    {(synthesis[activeTab] as any).items.map((item: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-3 text-lg text-dark-knight">
                                            <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${synthesis[activeTab].color.replace('text-', 'bg-')}`} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Deep Dive Sources Section */}
            <div>
                <h2 className="font-headings text-2xl font-bold text-dark-knight mb-8 flex items-center gap-3">
                    <span className="bg-dark-knight text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">2</span>
                    Références Fondamentales
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sources.map((source, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-8 border border-desert-field hover:shadow-lg hover:border-pizazz/30 transition-all duration-300 flex flex-col"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-coast-cream rounded-xl group-hover:bg-pizazz/10 transition-colors">
                                        <source.icon className="text-dark-knight group-hover:text-pizazz transition-colors" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-dark-knight leading-tight mb-1">
                                            {source.title}
                                        </h3>
                                        <p className="text-sm text-autumn-landscape font-medium">
                                            {source.author}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-whale-skin mb-6 leading-relaxed flex-grow">
                                {source.summary}
                            </p>

                            <div className="bg-gray-50 rounded-xl p-5 mb-6">
                                <h4 className="text-xs font-bold text-skyline uppercase tracking-wider mb-3">
                                    Points Clés
                                </h4>
                                <ul className="space-y-2">
                                    {source.keyPoints.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-dark-knight">
                                            <span className="text-pizazz mt-1">•</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href={source.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm font-bold text-dark-knight hover:text-pizazz transition-colors mt-auto"
                            >
                                Lire la source originale <ArrowRight size={16} className="ml-2" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Full Report Embed */}
            <div className="mt-20 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                <h2 className="font-headings text-2xl font-bold text-dark-knight mb-8 flex items-center gap-3">
                    <span className="bg-dark-knight text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">3</span>
                    Rapport Complet
                </h2>
                <div className="bg-white rounded-2xl shadow-lg border border-desert-field overflow-hidden h-[800px]">
                    <iframe
                        src="https://docs.google.com/document/d/1sQIYjLrFCQMYsJcTSzRhVjuhSB1wLkbG1DjOWQJ4q4w/preview"
                        className="w-full h-full border-0"
                        title="Rapport Complet - Little Helpers"
                        allow="autoplay"
                    ></iframe>
                </div>
            </div>
        </div >
    );
};

export default Genesis;
