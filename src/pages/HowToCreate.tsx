import { useState } from 'react';
import { FileText, Download, ChevronDown, ChevronUp, Zap, Users, Brain, Rocket, ExternalLink, Palette, Code, Bot } from 'lucide-react';

const HowToCreate = () => {
    const [expandedSection, setExpandedSection] = useState<number | null>(0);

    const sections = [
        {
            id: 0,
            title: "1. Design & Prototype",
            icon: Palette,
            color: "text-pizazz",
            bg: "bg-pizazz/10",
            content: "Utilisez des outils comme Figma pour le design visuel, ou V0 par Vercel pour générer des interfaces React directement par prompt. L'objectif est de valider l'expérience utilisateur avant tout code complexe."
        },
        {
            id: 1,
            title: "2. Logique & Développement",
            icon: Code,
            color: "text-autumn-landscape",
            bg: "bg-autumn-landscape/10",
            content: "Des environnements comme Replit ou Cursor permettent d'assembler la logique métier rapidement. Le 'Vibe Coding' consiste à décrire le comportement souhaité en langage naturel et laisser l'IA générer le code boilerplate."
        },
        {
            id: 2,
            title: "3. Intelligence Embarquée",
            icon: Bot,
            color: "text-whale-skin",
            bg: "bg-whale-skin/10",
            content: "Intégrez les modèles frontières (Gemini 3, ChatGPT 5.1) via API pour traiter les données non structurées. Ne codez pas de règles rigides, laissez le LLM gérer la variabilité des entrées utilisateur."
        },
        {
            id: 3,
            title: "4. Déploiement & Itération",
            icon: Rocket,
            color: "text-blue-600",
            bg: "bg-blue-100",
            content: "Déployez en un clic sur Vercel ou Netlify. Recueillez les retours utilisateurs immédiatement et itérez. Un artefact n'est jamais fini, il évolue avec les besoins de l'équipe."
        }
    ];

    return (
        <div className="max-w-6xl mx-auto pb-20 animate-in fade-in duration-500">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="font-headings text-4xl font-bold text-dark-knight mb-6">
                    Comment créer des <span className="text-transparent bg-clip-text bg-gradient-to-r from-autumn-landscape to-pizazz">Artefacts</span> ?
                </h1>
                <p className="text-xl font-medium text-whale-skin max-w-3xl mx-auto leading-relaxed">
                    Synthèse de l'étude Perplexity sur les artefacts interactifs no-code.
                    Découvrez les clés pour transformer vos idées en outils vivants.
                </p>
            </div>

            {/* Interactive Synthesis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                <div className="space-y-6">
                    <h2 className="font-headings text-2xl font-bold text-dark-knight mb-6 flex items-center gap-3">
                        <FileText className="text-autumn-landscape" />
                        Les Étapes de Production
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
                                    <div className="p-4 pt-0 text-dark-knight font-medium leading-relaxed border-t border-desert-field/30 mt-2">
                                        {section.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Context/Quote */}
                <div className="flex flex-col gap-6">
                    <div className="bg-gradient-to-br from-dark-knight to-whale-skin rounded-2xl p-8 text-white shadow-xl relative overflow-hidden flex-1 flex flex-col justify-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
                        <div className="relative z-10 text-center">
                            <p className="text-lg font-medium leading-relaxed italic opacity-90">
                                "L'avenir n'est pas aux applications monolithiques, mais aux micro-outils sur mesure, créés par ceux qui en ont besoin, pour résoudre des problèmes spécifiques."
                            </p>
                        </div>
                    </div>

                    {/* Google Research Link */}
                    <a
                        href="https://research.google/blog/generative-ui-a-rich-custom-visual-interactive-user-experience-for-any-prompt/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white border border-desert-field rounded-xl p-6 hover:shadow-md transition-all group flex items-start gap-4"
                    >
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                            <ExternalLink className="text-blue-600" size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-dark-knight mb-1 group-hover:text-blue-600 transition-colors">Google Research: Generative UI</h3>
                            <p className="text-sm text-skyline">Découvrez comment l'IA générative permet de créer des interfaces utilisateur riches et interactives à la volée.</p>
                        </div>
                    </a>
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
