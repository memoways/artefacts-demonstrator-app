import { useState } from 'react';
import { Search, FileText, Code, Rocket, ChevronRight, Lightbulb, PenTool, Layers } from 'lucide-react';

const WorkflowSchema = () => {
    const [activeStep, setActiveStep] = useState<number | null>(null);

    const steps = [
        {
            id: 1,
            title: "Recherche & Curation",
            icon: Search,
            color: "bg-blue-100 text-blue-600",
            borderColor: "border-blue-200",
            duration: "1h",
            details: {
                method: "Veille ciblée sur Substack et arXiv. Sélection de 4 sources clés.",
                tips: "Chercher des concepts complémentaires (vision + technique + méthode).",
                tools: "Substack, Google Scholar, Claude pour la synthèse."
            }
        },
        {
            id: 2,
            title: "Documentation",
            icon: FileText,
            color: "bg-purple-100 text-purple-600",
            borderColor: "border-purple-200",
            duration: "1.5h",
            details: {
                method: "Rédaction de 4 docs markdown : Contexte, Specs Fonctionnelles, Specs Techniques, Guide UI/UX.",
                tips: "Plus le contexte est structuré, meilleure sera la génération.",
                tools: "Markdown, ASCII art pour wireframes."
            }
        },
        {
            id: 3,
            title: "Vibe Coding",
            icon: Code,
            color: "bg-orange-100 text-orange-600",
            borderColor: "border-orange-200",
            duration: "1h",
            details: {
                method: "Injection des docs dans l'IA. Prompts itératifs : Structure -> Style -> Contenu -> Interactivité.",
                tips: "Demander à l'IA de corriger ses propres erreurs ('Self-correction').",
                tools: "Antigravity / Cursor / Replit."
            }
        },
        {
            id: 4,
            title: "Déploiement",
            icon: Rocket,
            color: "bg-green-100 text-green-600",
            borderColor: "border-green-200",
            duration: "0.5h",
            details: {
                method: "Export du code, initialisation Git, push sur GitHub, activation GitHub Pages.",
                tips: "Utiliser des chemins relatifs pour les assets pour éviter les erreurs 404.",
                tools: "Git, GitHub Pages."
            }
        }
    ];

    return (
        <div className="my-10">
            <h3 className="text-center font-headings text-2xl font-bold text-dark-knight mb-8">
                Workflow de création (4 heures chrono)
            </h3>

            {/* Desktop Horizontal Flow */}
            <div className="hidden md:flex justify-between items-start gap-4 relative">
                {/* Connecting Line */}
                <div className="absolute top-8 left-0 w-full h-1 bg-gray-100 -z-10"></div>

                {steps.map((step, index) => (
                    <div key={step.id} className="flex-1 relative group">
                        <button
                            onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                            className={`w-full flex flex-col items-center transition-all duration-300 ${activeStep === step.id ? 'scale-105' : 'hover:scale-105'}`}
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 border-4 shadow-sm transition-colors ${step.color} ${activeStep === step.id ? 'border-current ring-4 ring-opacity-20 ring-current bg-white' : 'border-white'}`}>
                                <step.icon size={28} />
                            </div>
                            <h4 className={`font-bold text-sm mb-1 ${activeStep === step.id ? 'text-dark-knight' : 'text-skyline group-hover:text-dark-knight'}`}>
                                {step.title}
                            </h4>
                            <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-500">
                                {step.duration}
                            </span>
                        </button>

                        {/* Arrow */}
                        {index < steps.length - 1 && (
                            <div className="absolute top-6 -right-1/2 w-full flex justify-center pointer-events-none">
                                <ChevronRight className="text-gray-300" />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Mobile Vertical Flow */}
            <div className="md:hidden space-y-4">
                {steps.map((step) => (
                    <button
                        key={step.id}
                        onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                        className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all ${activeStep === step.id ? `bg-white border-current ring-1 ring-current ${step.color.split(' ')[1]}` : 'bg-white border-gray-100'}`}
                    >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${step.color}`}>
                            <step.icon size={20} />
                        </div>
                        <div className="text-left flex-1">
                            <h4 className="font-bold text-dark-knight">{step.title}</h4>
                            <span className="text-xs text-skyline">{step.duration}</span>
                        </div>
                    </button>
                ))}
            </div>

            {/* Details Panel */}
            <div className={`mt-8 transition-all duration-500 overflow-hidden ${activeStep ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {activeStep && (
                    <div className="bg-white rounded-2xl border border-desert-field shadow-lg p-8 relative">
                        <div className={`absolute top-0 left-0 w-2 h-full rounded-l-2xl ${steps[activeStep - 1].color.replace('text-', 'bg-').split(' ')[1]}`}></div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <div className="flex items-center gap-2 mb-3 text-whale-skin">
                                    <Layers size={20} />
                                    <h4 className="font-bold uppercase text-xs tracking-wider">Méthode</h4>
                                </div>
                                <p className="text-dark-knight text-sm leading-relaxed">
                                    {steps[activeStep - 1].details.method}
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-3 text-autumn-landscape">
                                    <Lightbulb size={20} />
                                    <h4 className="font-bold uppercase text-xs tracking-wider">Astuce</h4>
                                </div>
                                <p className="text-dark-knight text-sm leading-relaxed">
                                    {steps[activeStep - 1].details.tips}
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-3 text-skyline">
                                    <PenTool size={20} />
                                    <h4 className="font-bold uppercase text-xs tracking-wider">Outils</h4>
                                </div>
                                <p className="text-dark-knight text-sm leading-relaxed">
                                    {steps[activeStep - 1].details.tools}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {!activeStep && (
                <p className="text-center text-skyline text-sm mt-8 animate-pulse">
                    👆 Cliquez sur une étape pour voir les détails techniques
                </p>
            )}
        </div>
    );
};

export default WorkflowSchema;
