import { useState } from 'react';
import { FileText, Download, ChevronDown, ChevronUp, Zap, Users, Brain, Rocket } from 'lucide-react';

const HowToCreate = () => {
    const [expandedSection, setExpandedSection] = useState<number | null>(0);

    const sections = [
        {
            id: 0,
            title: "La Révolution No-Code",
            icon: Zap,
            color: "text-pizazz",
            bg: "bg-pizazz/10",
            content: "L'émergence des outils no-code permet désormais de créer des applications complexes sans écrire une seule ligne de code. Cette démocratisation rend la création d'artefacts accessible aux experts métier, pas seulement aux développeurs."
        },
        {
            id: 1,
            title: "Méthodologie Agile",
            icon: Users,
            color: "text-autumn-landscape",
            bg: "bg-autumn-landscape/10",
            content: "La création d'artefacts repose sur des cycles courts d'itération. On commence par un prototype simple, on le teste avec les utilisateurs, et on l'améliore en continu. C'est la fin de l'effet tunnel des projets informatiques classiques."
        },
        {
            id: 2,
            title: "Intelligence Artificielle",
            icon: Brain,
            color: "text-whale-skin",
            bg: "bg-whale-skin/10",
            content: "L'IA n'est pas juste un gadget, c'est le moteur de l'artefact. Elle permet d'analyser les données, de générer du contenu et de guider l'utilisateur. L'intégration de modèles comme GPT-4 est devenue triviale via API."
        },
        {
            id: 3,
            title: "Futur du Travail",
            icon: Rocket,
            color: "text-blue-600",
            bg: "bg-blue-100",
            content: "Les artefacts interactifs préfigurent l'avenir des outils de bureau. Ils sont contextuels, intelligents et collaboratifs par défaut. Ils remplacent progressivement les documents statiques pour les processus métier critiques."
        }
    ];

    return (
        <div className="max-w-6xl mx-auto pb-20 animate-in fade-in duration-500">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="font-headings text-4xl font-bold text-dark-knight mb-6">
                    Comment créer des <span className="text-transparent bg-clip-text bg-gradient-to-r from-autumn-landscape to-pizazz">Artefacts</span> ?
                </h1>
                <p className="text-xl text-skyline max-w-3xl mx-auto leading-relaxed">
                    Synthèse de l'étude Perplexity sur les artefacts interactifs no-code.
                    Découvrez les clés pour transformer vos idées en outils vivants.
                </p>
            </div>

            {/* Interactive Synthesis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                <div className="space-y-6">
                    <h2 className="font-headings text-2xl font-bold text-dark-knight mb-6 flex items-center gap-3">
                        <FileText className="text-autumn-landscape" />
                        Points Clés de l'Étude
                    </h2>
                    <div className="space-y-4">
                        {sections.map((section) => (
                            <div
                                key={section.id}
                                className={`border-2 rounded-xl transition-all duration-300 overflow-hidden ${expandedSection === section.id
                                        ? 'border-whale-skin shadow-md bg-white'
                                        : 'border-desert-field hover:border-skyline bg-white/50'
                                    }`}
                            >
                                <button
                                    onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                                    className="w-full p-4 flex items-center justify-between text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${section.bg} ${section.color}`}>
                                            <section.icon size={20} />
                                        </div>
                                        <h3 className="font-bold text-dark-knight text-lg">{section.title}</h3>
                                    </div>
                                    {expandedSection === section.id ? <ChevronUp size={20} className="text-whale-skin" /> : <ChevronDown size={20} className="text-skyline" />}
                                </button>

                                <div className={`transition-all duration-300 ease-in-out ${expandedSection === section.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-4 pt-0 text-skyline leading-relaxed border-t border-desert-field/30 mt-2">
                                        {section.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Context/Quote */}
                <div className="bg-gradient-to-br from-dark-knight to-whale-skin rounded-2xl p-8 text-white shadow-xl flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
                    <div className="relative z-10">
                        <div className="text-6xl text-autumn-landscape opacity-50 font-serif mb-4">"</div>
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 italic">
                            L'avenir n'est pas aux applications monolithiques, mais aux micro-outils sur mesure, créés par ceux qui en ont besoin, pour résoudre des problèmes spécifiques.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold text-autumn-landscape">
                                P
                            </div>
                            <div>
                                <p className="font-bold">Perplexity AI</p>
                                <p className="text-sm text-coast-cream/60">Analyse de marché 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PDF Viewer Section */}
            <div className="bg-white rounded-2xl border border-desert-field shadow-lg overflow-hidden">
                <div className="p-6 border-b border-desert-field flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-50">
                    <h2 className="font-headings text-xl font-bold text-dark-knight flex items-center gap-2">
                        <FileText size={24} className="text-whale-skin" />
                        Rapport Complet
                    </h2>
                    <a
                        href="/etude-artefacts-perplexity.pdf"
                        download
                        className="flex items-center gap-2 px-4 py-2 bg-autumn-landscape text-white rounded-lg hover:bg-pizazz transition-colors font-bold text-sm shadow-sm"
                    >
                        <Download size={16} />
                        Télécharger le PDF
                    </a>
                </div>
                <div className="w-full h-[800px] bg-gray-100">
                    <iframe
                        src="/etude-artefacts-perplexity.pdf"
                        className="w-full h-full"
                        title="Etude artefacts interactifs no-code par Perplexity"
                    />
                </div>
            </div>
        </div>
    );
};

export default HowToCreate;
