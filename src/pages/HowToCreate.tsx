import { useState } from 'react';
import { FileText, Download, ChevronDown, ChevronUp, Rocket, ExternalLink, Palette, Code, Bot, ArrowRight, CheckCircle, Target, Lightbulb, Zap, Table, Users, Monitor, FlaskConical } from 'lucide-react';

const HowToCreate = () => {
    const [expandedSection, setExpandedSection] = useState<number | null>(0);
    const [expandedCase, setExpandedCase] = useState<number | null>(null);

    const sections = [
        {
            id: 0,
            title: "1. Design & Prototype : System Thinking",
            icon: Palette,
            color: "text-pizazz",
            bg: "bg-pizazz/10",
            content: (
                <div className="space-y-4">
                    <p>
                        Oubliez les maquettes statiques page par page. Adoptez le <strong>System Thinking</strong>.
                        On ne dessine plus des écrans, on conçoit un système de composants vivants.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h4 className="font-bold text-gray-500 mb-2 text-sm uppercase">Avant (Page Thinking)</h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-300 rounded-full"></div> Maquette Home.png</div>
                                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-300 rounded-full"></div> Maquette Dashboard.png</div>
                                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-300 rounded-full"></div> Spécifications.pdf</div>
                            </div>
                        </div>
                        <div className="bg-pizazz/5 p-4 rounded-lg border border-pizazz/20">
                            <h4 className="font-bold text-pizazz mb-2 text-sm uppercase">Maintenant (System Thinking)</h4>
                            <div className="space-y-2 text-sm text-dark-knight">
                                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-pizazz rounded-full"></div> Design System (Tokens)</div>
                                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-pizazz rounded-full"></div> Composants Réutilisables</div>
                                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-pizazz rounded-full"></div> Prototype Interactif (V0)</div>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm">
                        <strong>Outils :</strong> Figma pour les tokens, V0 (Vercel) pour générer les premières interfaces React par prompt.
                    </p>
                </div>
            )
        },
        {
            id: 1,
            title: "2. Logique & Développement : Vibe Coding",
            icon: Code,
            color: "text-autumn-landscape",
            bg: "bg-autumn-landscape/10",
            content: (
                <div className="space-y-4">
                    <p>
                        Le code n'est plus une barrière. Avec le <strong>Vibe Coding</strong>, vous décrivez le comportement en langage naturel, l'IA écrit la syntaxe.
                    </p>
                    <div className="bg-dark-knight/5 p-4 rounded-lg border border-dark-knight/10 my-4">
                        <div className="flex flex-col md:flex-row items-center gap-4 justify-between text-sm">
                            <div className="bg-white p-3 rounded shadow-sm text-center flex-1">
                                <span className="block font-bold text-autumn-landscape">Intention</span>
                                "Je veux un tableau qui trie par date"
                            </div>
                            <ArrowRight className="text-gray-400 hidden md:block" />
                            <div className="bg-dark-knight text-white p-3 rounded shadow-sm text-center flex-1 font-mono text-xs">
                                AI Agent (Cursor/Replit)
                                <br />
                                Generates React Code...
                            </div>
                            <ArrowRight className="text-gray-400 hidden md:block" />
                            <div className="bg-white p-3 rounded shadow-sm text-center flex-1">
                                <span className="block font-bold text-green-600">Résultat</span>
                                Composant fonctionnel
                            </div>
                        </div>
                    </div>
                    <p className="text-sm">
                        <strong>Méthode :</strong> Itérez phrase par phrase. Si le résultat n'est pas bon, reformulez l'intention, ne corrigez pas le code vous-même.
                        <br />
                        <strong>Outils :</strong> Replit pour le tout-en-un, Cursor pour l'IDE augmenté.
                    </p>
                </div>
            )
        },
        {
            id: 2,
            title: "3. Intelligence Embarquée : Logique Probabiliste",
            icon: Bot,
            color: "text-whale-skin",
            bg: "bg-whale-skin/10",
            content: (
                <div className="space-y-4">
                    <p>
                        Ne codez pas de règles rigides ("Si A alors B"). Intégrez une <strong>logique probabiliste</strong> capable de gérer l'ambiguïté.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>Connectez les modèles frontières (Gemini 3, ChatGPT 5.1) via API.</li>
                        <li>Utilisez le "System Prompt" pour définir la personnalité et les contraintes de l'artefact.</li>
                        <li>Laissez le LLM structurer les données non structurées (emails, notes, PDF).</li>
                    </ul>
                </div>
            )
        },
        {
            id: 3,
            title: "4. Déploiement & Itération Continue",
            icon: Rocket,
            color: "text-blue-600",
            bg: "bg-blue-100",
            content: (
                <div className="space-y-4">
                    <p>
                        Un artefact est vivant. Il est mis en ligne en un clic et évolue chaque jour.
                    </p>
                    <div className="flex items-center gap-4 text-sm bg-blue-50 p-3 rounded-lg border border-blue-100">
                        <Rocket size={20} className="text-blue-600" />
                        <span><strong>Déploiement :</strong> Vercel / Netlify. Connecté à GitHub. Chaque sauvegarde est une nouvelle version en ligne.</span>
                    </div>
                    <p className="text-sm">
                        Recueillez les retours utilisateurs immédiatement. Une fonctionnalité manque ? Ajoutez-la en 10 minutes. C'est la fin des cycles de validation de 3 mois.
                    </p>
                </div>
            )
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
                <div className="space-y-8">
                    <div className="flex items-center justify-between">
                        <h2 className="font-headings text-2xl font-bold text-dark-knight flex items-center gap-3">
                            <FileText className="text-autumn-landscape" />
                            Les Étapes de Production
                        </h2>
                    </div>

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

                                <div className={`transition-all duration-300 ease-in-out ${expandedSection === section.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-6 pt-0 text-dark-knight font-medium leading-relaxed border-t border-desert-field/30 mt-2">
                                        {section.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Context/Quote & Google Link */}
                <div className="flex flex-col gap-6">
                    <div className="bg-gradient-to-br from-dark-knight to-whale-skin rounded-2xl p-8 text-white shadow-xl relative overflow-hidden flex-1 flex flex-col justify-center min-h-[300px]">
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

            {/* Use Cases Section */}
            <div className="mb-20">
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
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-dark-knight text-white rounded-xl flex items-center justify-center font-bold text-xl">1</div>
                    <h2 className="font-headings text-2xl md:text-3xl font-bold text-dark-knight">Design & Prototype</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-desert-field shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <Palette className="text-pizazz" size={24} />
                            <h3 className="font-bold text-xl text-dark-knight">L'Interface d'abord</h3>
                        </div>
                        <p className="text-whale-skin mb-6 leading-relaxed">
                            Ne commencez jamais par le code. Dessinez l'interface ou décrivez-la en détail. L'IA a besoin de "voir" ce qu'elle doit construire.
                        </p>
                        <div className="bg-coast-cream rounded-xl p-4 border border-desert-field/50">
                            <h4 className="text-xs font-bold text-skyline uppercase tracking-wider mb-3">Prompt Design</h4>
                            <p className="text-sm font-mono text-dark-knight bg-white p-3 rounded-lg border border-desert-field">
                                "Crée une interface moderne avec une sidebar sombre à gauche, une zone principale claire, et des cartes avec des ombres douces..."
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-desert-field shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <FileText className="text-autumn-landscape" size={24} />
                            <h3 className="font-bold text-xl text-dark-knight">Le Contenu est Roi</h3>
                        </div>
                        <p className="text-whale-skin mb-6 leading-relaxed">
                            Préparez vos textes, vos données et vos règles métier dans des fichiers Markdown clairs. C'est le "cerveau" que vous donnerez à l'IA.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm text-dark-knight">
                                <CheckCircle size={16} className="text-green-500" />
                                <span>PRD (Product Requirements Document)</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-dark-knight">
                                <CheckCircle size={16} className="text-green-500" />
                                <span>Design System (Couleurs, Typo)</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-dark-knight">
                                <CheckCircle size={16} className="text-green-500" />
                                <span>Contenu (Textes, Données)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

                {/* Memoways Coaching Section */}
                <div className="bg-coast-cream border-2 border-autumn-landscape/20 rounded-2xl p-8 mb-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-autumn-landscape/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        <div className="md:col-span-2 space-y-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="bg-autumn-landscape text-white p-2 rounded-lg">
                                    <Target size={24} />
                                </div>
                                <h2 className="font-headings text-2xl font-bold text-dark-knight">Devenez Autonome</h2>
                            </div>
                            <p className="text-lg text-whale-skin font-medium leading-relaxed">
                                Memoways ne se contente pas de livrer des outils. Nous vous aidons à mettre en place les workflows, les bonnes pratiques et la culture nécessaire.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-pizazz shrink-0 mt-1" size={20} />
                                    <span className="text-dark-knight text-sm"><strong>Co-construction :</strong> Nous prototypons ensemble pour transférer la compétence.</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-pizazz shrink-0 mt-1" size={20} />
                                    <span className="text-dark-knight text-sm"><strong>Formation Action :</strong> Apprenez les principes du Vibe Coding en pratiquant.</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-pizazz shrink-0 mt-1" size={20} />
                                    <span className="text-dark-knight text-sm"><strong>Boîte à Outils :</strong> Repartez avec votre stack technique configurée (Replit, Cursor, V0).</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-pizazz shrink-0 mt-1" size={20} />
                                    <span className="text-dark-knight text-sm"><strong>Autonomie Rapide :</strong> L'objectif est que vous puissiez itérer seuls le plus vite possible.</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center bg-white/50 p-6 rounded-xl border border-autumn-landscape/10">
                            <Lightbulb size={48} className="text-autumn-landscape mb-4" />
                            <h3 className="font-bold text-dark-knight mb-2">Prêt à changer de méthode ?</h3>
                            <a
                                href="https://memoways.com/contact"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-autumn-landscape text-white px-6 py-3 rounded-lg font-bold hover:bg-pizazz transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                            >
                                Démarrer un pilote <ArrowRight size={18} />
                            </a>
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
