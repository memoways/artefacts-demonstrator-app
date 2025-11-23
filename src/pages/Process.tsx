import WorkflowSchema from '../components/process/WorkflowSchema';
import { Clock, CheckCircle, AlertTriangle, ArrowUpRight, BookOpen, Code, Rocket, Lightbulb } from 'lucide-react';

const Process = () => {
    return (
        <div className="max-w-4xl mx-auto pb-10 animate-in fade-in duration-500">
            <div className="mb-12 text-center">
                <h1 className="font-headings text-4xl font-bold text-dark-knight mb-6">Coulisses de fabrication</h1>
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-autumn-landscape/10 rounded-full text-autumn-landscape font-bold text-xl">
                    <Clock size={24} />
                    <span>Temps total de réalisation : 5 heures</span>
                </div>
            </div>

            <div className="prose prose-lg max-w-none text-dark-knight mb-16">
                <p className="lead text-xl font-medium text-whale-skin">
                    Cet artefact a été fabriqué de manière <strong>improvisée et itérative</strong>, sur la base d'une lecture qui a initié le mouvement (voir page Genèse), pour créer une application qui montre et raconte en même temps ce changement de paradigme.
                </p>
                <p>
                    C'est une démarche "Meta" : l'essentiel du temps est consacré à la construction, qui permet de comprendre par le faire les enjeux, les outils et le message à faire passer.
                </p>
            </div>

            {/* Detailed Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <div className="bg-white p-6 rounded-xl border border-desert-field shadow-sm flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                        <BookOpen size={24} />
                    </div>
                    <div className="text-3xl font-bold text-dark-knight mb-1">1h30</div>
                    <div className="text-sm text-skyline font-medium uppercase tracking-wide">Lectures & Rédaction</div>
                    <p className="text-sm text-gray-500 mt-2">Rapports, pages web, rédaction des prompts et textes.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-desert-field shadow-sm flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4">
                        <Code size={24} />
                    </div>
                    <div className="text-3xl font-bold text-dark-knight mb-1">3h00</div>
                    <div className="text-sm text-skyline font-medium uppercase tracking-wide">Vibe Coding</div>
                    <p className="text-sm text-gray-500 mt-2">Développement, debug et optimisations avec l'IA.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-desert-field shadow-sm flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
                        <Rocket size={24} />
                    </div>
                    <div className="text-3xl font-bold text-dark-knight mb-1">30 min</div>
                    <div className="text-sm text-skyline font-medium uppercase tracking-wide">Déploiement</div>
                    <p className="text-sm text-gray-500 mt-2">Mise en ligne et configuration Vercel.</p>
                </div>
            </div>

            {/* Interactive Workflow Schema */}
            <div className="mb-16">
                <h2 className="font-headings text-2xl font-bold text-dark-knight mb-6">Le Flux de Travail</h2>
                <WorkflowSchema />
            </div>

            {/* Learnings Section */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">
                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                    <div className="flex items-center gap-3 mb-4 text-green-700">
                        <CheckCircle size={24} />
                        <h3 className="font-bold text-lg">Enseignements Clés</h3>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-sm text-green-800">
                            <Lightbulb className="w-5 h-5 shrink-0 mt-0.5" />
                            <span><strong>Clarté par le faire :</strong> Construire l'artefact permet de clarifier instantanément le message et les besoins, bien mieux qu'une réflexion théorique.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-green-800">
                            <Lightbulb className="w-5 h-5 shrink-0 mt-0.5" />
                            <span><strong>Itération vs Planification :</strong> On ne suit pas un plan rigide. On découvre le chemin en marchant, guidé par l'objectif final.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-green-800">
                            <Lightbulb className="w-5 h-5 shrink-0 mt-0.5" />
                            <span><strong>Documentation active :</strong> Les fichiers markdown de contexte sont devenus le "cerveau" du projet, mis à jour en temps réel.</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                    <div className="flex items-center gap-3 mb-4 text-orange-700">
                        <AlertTriangle size={24} />
                        <h3 className="font-bold text-lg">Défis rencontrés</h3>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-sm text-orange-800">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0"></span>
                            <span><strong>Hallucinations CSS :</strong> L'IA invente parfois des classes utilitaires qui n'existent pas, nécessitant une vigilance visuelle.</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-orange-800">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0"></span>
                            <span><strong>Ton de voix :</strong> L'IA tend vers le "corporate" par défaut. Il faut constamment réinjecter de la personnalité dans les textes.</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-orange-800">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0"></span>
                            <span><strong>Context Window :</strong> Il faut savoir quoi donner à l'IA à quel moment pour ne pas la noyer d'informations inutiles.</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-16 p-8 bg-whale-skin rounded-2xl text-white text-center">
                <h3 className="font-headings text-2xl font-bold mb-4">Envie de reproduire ce process ?</h3>
                <p className="mb-8 text-coast-cream/80 max-w-2xl mx-auto">
                    La clé est la préparation : 80% du succès réside dans la qualité de votre documentation initiale et votre capacité à itérer rapidement.
                </p>
                <a
                    href="https://memoways.com/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-autumn-landscape hover:bg-pizazz text-white rounded-lg font-bold transition-colors inline-flex items-center gap-2"
                >
                    Se faire accompagner <ArrowUpRight size={18} />
                </a>
            </div>
        </div>
    );
};

export default Process;
