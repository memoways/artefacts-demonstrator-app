import { useState, useEffect } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp, Clock, Mail, FileText, Smile, RefreshCw, AlertTriangle, Sparkles, Users, Target, Calendar } from 'lucide-react';

interface ExplorationScreenProps {
    route: 'classic' | 'artefact';
    onBack: () => void;
    onCompare: () => void;
}

const ExplorationScreen = ({ route, onBack, onCompare }: ExplorationScreenProps) => {
    const [collabCount, setCollabCount] = useState(3);
    const [complexity, setComplexity] = useState(3);
    const [deadline, setDeadline] = useState(2);
    const [expandedStep, setExpandedStep] = useState<number | null>(1);
    const [metrics, setMetrics] = useState({
        time: 0,
        emails: 0,
        versions: 0,
        stress: '',
        contextSwitch: 0,
        errors: 0
    });

    useEffect(() => {
        calculateMetrics();
    }, [collabCount, complexity, deadline, route]);

    const calculateMetrics = () => {
        // Base calculations
        const baseTime = 10;
        const timePerCollab = 2;
        const timePerComplexity = 3;

        let totalTime, totalEmails, totalVersions, stressLevel, contextSwitches, errors;

        if (route === 'classic') {
            totalTime = baseTime + (collabCount * timePerCollab) + (complexity * timePerComplexity);
            totalEmails = 20 + (collabCount * 8);
            totalVersions = 5 + (collabCount * 2);

            const stressIndex = Math.min(4, Math.floor((collabCount / 3) + (complexity / 2) + (1 / (deadline / 4))));
            stressLevel = ['Faible', 'Modéré', 'Moyen', 'Élevé', 'Très élevé'][stressIndex];

            contextSwitches = Math.floor(totalTime * 1.5);
            errors = Math.floor(2 + (complexity * 1.2) + (collabCount * 0.5));
        } else {
            // Artefact route - significantly reduced metrics
            totalTime = Math.floor((baseTime + (collabCount * timePerCollab) + (complexity * timePerComplexity)) * 0.44); // -56%
            totalEmails = Math.floor((20 + (collabCount * 8)) * 0.27); // -73%
            totalVersions = 1; // Always 1 artefact
            stressLevel = 'Faible';
            contextSwitches = Math.floor((totalTime * 1.5) * 0.17); // -83%
            errors = Math.max(0, Math.floor((2 + (complexity * 1.2) + (collabCount * 0.5)) * 0.1)); // -90%
        }

        setMetrics({
            time: totalTime,
            emails: totalEmails,
            versions: totalVersions,
            stress: stressLevel,
            contextSwitch: contextSwitches,
            errors: errors
        });
    };

    const steps = route === 'classic' ? [
        {
            id: 1,
            title: "Rédaction initiale",
            duration: "4-6 heures",
            content: (
                <div className="space-y-4 text-sm">
                    <div>
                        <h5 className="font-bold text-dark-knight mb-2">🛠️ Outils utilisés</h5>
                        <div className="flex gap-2">
                            <span className="bg-gray-100 px-2 py-1 rounded text-gray-600">Microsoft Word</span>
                            <span className="bg-gray-100 px-2 py-1 rounded text-gray-600">Google Docs</span>
                        </div>
                    </div>
                    <div>
                        <h5 className="font-bold text-dark-knight mb-2">⚠️ Points de friction</h5>
                        <ul className="list-disc pl-4 text-skyline space-y-1">
                            <li>Difficulté à retrouver la dernière version du modèle</li>
                            <li>Incertitude sur le niveau de détail requis</li>
                            <li>Organisation des fichiers brouillons</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            title: "Collaboration & révisions",
            duration: "6-8 heures",
            content: (
                <div className="space-y-4 text-sm">
                    <div>
                        <h5 className="font-bold text-dark-knight mb-2">🛠️ Outils utilisés</h5>
                        <div className="flex gap-2 flex-wrap">
                            <span className="bg-gray-100 px-2 py-1 rounded text-gray-600">Email</span>
                            <span className="bg-gray-100 px-2 py-1 rounded text-gray-600">WhatsApp</span>
                            <span className="bg-gray-100 px-2 py-1 rounded text-gray-600">Suivi modifications</span>
                        </div>
                    </div>
                    <div>
                        <h5 className="font-bold text-dark-knight mb-2">⚠️ Points de friction</h5>
                        <ul className="list-disc pl-4 text-skyline space-y-1">
                            <li>Versions multiples en conflit</li>
                            <li>Délais de réponse imprévisibles</li>
                            <li>Fils d'emails interminables</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 3,
            title: "Consolidation budgétaire",
            duration: "3-5 heures",
            content: (
                <div className="space-y-4 text-sm">
                    <div>
                        <h5 className="font-bold text-dark-knight mb-2">🛠️ Outils utilisés</h5>
                        <div className="flex gap-2">
                            <span className="bg-gray-100 px-2 py-1 rounded text-gray-600">Excel</span>
                            <span className="bg-gray-100 px-2 py-1 rounded text-gray-600">Calculatrice</span>
                        </div>
                    </div>
                    <div>
                        <h5 className="font-bold text-dark-knight mb-2">⚠️ Points de friction</h5>
                        <ul className="list-disc pl-4 text-skyline space-y-1">
                            <li>Erreurs de saisie manuelle</li>
                            <li>Pas de lien dynamique avec le texte</li>
                            <li>Graphiques à refaire si changements</li>
                        </ul>
                    </div>
                </div>
            )
        }
    ] : [
        {
            id: 1,
            title: "Configuration initiale",
            duration: "30 minutes",
            content: (
                <div className="space-y-4 text-sm">
                    <div>
                        <h5 className="font-bold text-dark-knight mb-2">🛠️ Outil utilisé</h5>
                        <div className="flex gap-2">
                            <span className="bg-autumn-landscape/10 text-autumn-landscape px-2 py-1 rounded font-medium">Interface Artefact</span>
                        </div>
                    </div>
                    <div>
                        <h5 className="font-bold text-dark-knight mb-2">✅ Avantages immédiats</h5>
                        <ul className="list-disc pl-4 text-skyline space-y-1">
                            <li>Configuration en quelques clics</li>
                            <li>Un seul lien pour tout le monde</li>
                            <li>Structure guidée dès le départ</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            title: "Remplissage collaboratif",
            duration: "3-4 heures",
            content: (
                <div className="space-y-4 text-sm">
                    <div>
                        <h5 className="font-bold text-dark-knight mb-2">🛠️ Outil utilisé</h5>
                        <div className="flex gap-2">
                            <span className="bg-autumn-landscape/10 text-autumn-landscape px-2 py-1 rounded font-medium">Interface Collaborative</span>
                        </div>
                    </div>
                    <div>
                        <h5 className="font-bold text-dark-knight mb-2">✅ Avantages immédiats</h5>
                        <ul className="list-disc pl-4 text-skyline space-y-1">
                            <li>Synchronisation automatique permanente</li>
                            <li>Visibilité totale sur qui fait quoi</li>
                            <li>Zéro conflit de versions</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 3,
            title: "Ajustements temps réel",
            duration: "2-3 heures",
            content: (
                <div className="space-y-4 text-sm">
                    <div>
                        <h5 className="font-bold text-dark-knight mb-2">🛠️ Outil utilisé</h5>
                        <div className="flex gap-2">
                            <span className="bg-autumn-landscape/10 text-autumn-landscape px-2 py-1 rounded font-medium">Calculs Automatiques</span>
                        </div>
                    </div>
                    <div>
                        <h5 className="font-bold text-dark-knight mb-2">✅ Avantages immédiats</h5>
                        <ul className="list-disc pl-4 text-skyline space-y-1">
                            <li>Calculs automatiques zéro erreur</li>
                            <li>Visualisations dynamiques instantanées</li>
                            <li>Scénarios multiples faciles à comparer</li>
                        </ul>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section className="min-h-[80vh] py-10 animate-in slide-in-from-right duration-500">
            {/* Header */}
            <div className="flex flex-col items-center mb-12">
                <div className="flex items-center gap-4 mb-6 text-sm">
                    <button onClick={onBack} className="flex items-center gap-1 text-skyline hover:text-whale-skin transition-colors">
                        <ArrowLeft size={16} /> Retour
                    </button>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-whale-skin text-whale-skin font-bold shadow-sm">
                        <span>🔀</span> Méthode
                    </div>
                    <span className="text-desert-field">→</span>
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold shadow-md text-white ${route === 'classic' ? 'bg-gray-500' : 'bg-autumn-landscape'}`}>
                        {route === 'classic' ? <FileText size={14} /> : <Sparkles size={14} />}
                        {route === 'classic' ? 'Classique' : 'Artefacts'}
                    </div>
                </div>

                <h2 className="font-headings text-3xl font-bold text-dark-knight mb-2 text-center">
                    {route === 'classic' ? 'La méthode classique en détail' : 'La méthode par artefacts en détail'}
                </h2>
                <p className="text-skyline text-center max-w-2xl">
                    {route === 'classic'
                        ? "Voici comment se déroule habituellement votre processus avec les outils traditionnels."
                        : "Découvrez comment une interface interactive transforme votre processus de travail."}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto px-4">
                {/* Left Column: Controls & Steps */}
                <div className="lg:col-span-7 space-y-8">
                    {/* Variables Panel */}
                    <div className="bg-white rounded-xl border-2 border-desert-field p-6 shadow-sm">
                        <h4 className="font-bold text-dark-knight mb-4 flex items-center gap-2">
                            <Target size={20} className="text-autumn-landscape" />
                            Ajustez vos paramètres
                        </h4>

                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-medium text-skyline flex items-center gap-2">
                                        <Users size={16} /> Collaborateurs
                                    </label>
                                    <span className="font-bold text-whale-skin">{collabCount} personnes</span>
                                </div>
                                <input
                                    type="range" min="1" max="10" value={collabCount}
                                    onChange={(e) => setCollabCount(parseInt(e.target.value))}
                                    className="w-full accent-autumn-landscape"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-medium text-skyline flex items-center gap-2">
                                        <Target size={16} /> Complexité
                                    </label>
                                    <span className="font-bold text-whale-skin">
                                        {['Simple', 'Plutôt simple', 'Moyenne', 'Plutôt complexe', 'Complexe'][complexity - 1]}
                                    </span>
                                </div>
                                <input
                                    type="range" min="1" max="5" value={complexity}
                                    onChange={(e) => setComplexity(parseInt(e.target.value))}
                                    className="w-full accent-autumn-landscape"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-medium text-skyline flex items-center gap-2">
                                        <Calendar size={16} /> Délai
                                    </label>
                                    <span className="font-bold text-whale-skin">{deadline} semaines</span>
                                </div>
                                <input
                                    type="range" min="1" max="8" value={deadline}
                                    onChange={(e) => setDeadline(parseInt(e.target.value))}
                                    className="w-full accent-autumn-landscape"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Steps Accordion */}
                    <div className="space-y-4">
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className={`bg-white rounded-xl border-2 transition-all duration-300 overflow-hidden ${expandedStep === step.id ? 'border-whale-skin shadow-md' : 'border-desert-field hover:border-skyline'
                                    }`}
                            >
                                <button
                                    onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                                    className="w-full p-4 flex items-center justify-between bg-gradient-to-r from-coast-cream/30 to-transparent"
                                >
                                    <div className="text-left">
                                        <h4 className="font-bold text-dark-knight flex items-center gap-2">
                                            {route === 'classic' ? <FileText size={18} /> : <Sparkles size={18} className="text-autumn-landscape" />}
                                            {step.title}
                                        </h4>
                                        <p className="text-xs text-skyline mt-1">Durée estimée: {step.duration}</p>
                                    </div>
                                    {expandedStep === step.id ? <ChevronUp size={20} className="text-whale-skin" /> : <ChevronDown size={20} className="text-skyline" />}
                                </button>

                                <div className={`transition-all duration-300 ease-in-out ${expandedStep === step.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-4 border-t border-desert-field/30">
                                        {step.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Metrics */}
                <div className="lg:col-span-5">
                    <div className={`sticky top-8 rounded-xl p-6 border-2 shadow-lg ${route === 'classic' ? 'bg-white border-desert-field' : 'bg-gradient-to-br from-white to-coast-cream border-autumn-landscape'
                        }`}>
                        <h4 className="font-bold text-dark-knight mb-6 flex items-center gap-2">
                            <RefreshCw size={20} className={route === 'artefact' ? 'text-autumn-landscape animate-spin-slow' : ''} />
                            Métriques calculées
                        </h4>

                        <div className="grid grid-cols-1 gap-4">
                            <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium">Temps total</p>
                                        <p className="font-bold text-dark-knight text-lg">~{metrics.time} heures</p>
                                    </div>
                                </div>
                                {route === 'artefact' && <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">-56%</span>}
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium">Communications</p>
                                        <p className="font-bold text-dark-knight text-lg">
                                            {route === 'classic' ? `~${metrics.emails} emails` : `~${metrics.emails} msgs`}
                                        </p>
                                    </div>
                                </div>
                                {route === 'artefact' && <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">-73%</span>}
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
                                        <FileText size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium">Versions</p>
                                        <p className="font-bold text-dark-knight text-lg">
                                            {route === 'classic' ? `~${metrics.versions} fichiers` : '1 artefact'}
                                        </p>
                                    </div>
                                </div>
                                {route === 'artefact' && <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">-92%</span>}
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${metrics.stress === 'Faible' ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500'
                                        }`}>
                                        <Smile size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium">Stress</p>
                                        <p className={`font-bold text-lg ${metrics.stress === 'Faible' ? 'text-green-600' : 'text-red-500'
                                            }`}>{metrics.stress}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-500">
                                        <AlertTriangle size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium">Erreurs</p>
                                        <p className="font-bold text-dark-knight text-lg">~{metrics.errors}</p>
                                    </div>
                                </div>
                                {route === 'artefact' && <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">-90%</span>}
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <button
                                onClick={onCompare}
                                className="w-full py-3 rounded-xl bg-dark-knight text-white font-bold hover:bg-whale-skin transition-colors flex items-center justify-center gap-2"
                            >
                                Comparer les deux approches <ArrowLeft className="rotate-180" size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExplorationScreen;
