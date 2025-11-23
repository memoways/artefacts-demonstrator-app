import { Clock, CheckCircle, AlertTriangle, ArrowUpRight, BookOpen, Code, Rocket, Lightbulb, Cpu, Layers } from 'lucide-react';

const Process = () => {
    return (
        <div className="max-w-5xl mx-auto pb-20 px-4 animate-in fade-in duration-500">
            <div className="mb-16 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-autumn-landscape/10 rounded-full mb-6">
                    <Clock className="text-autumn-landscape" size={32} />
                </div>
                <h1 className="font-headings text-4xl md:text-5xl font-bold text-dark-knight mb-6">Coulisses de fabrication</h1>
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-desert-field rounded-full text-autumn-landscape font-bold text-xl shadow-sm">
                    <span>Temps total de réalisation : 5 heures</span>
                </div>
            </div>

            <div className="prose prose-lg max-w-3xl mx-auto text-dark-knight mb-20">
                <p className="lead text-2xl font-medium text-whale-skin text-center leading-relaxed">
                    Cet artefact a été fabriqué de manière <strong>improvisée et itérative</strong>, pour créer une application qui montre et raconte en même temps ce changement de paradigme.
                </p>
            </div>

            {/* Detailed Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                <div className="bg-white p-8 rounded-2xl border border-desert-field shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                        <BookOpen size={32} />
                    </div>
                    <div className="text-4xl font-bold text-dark-knight mb-2">1h30</div>
                    <div className="text-sm text-skyline font-bold uppercase tracking-wider mb-4">Lectures & Rédaction</div>
                    <p className="text-whale-skin leading-relaxed">Rapports, pages web, rédaction des prompts et textes.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-desert-field shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-6">
                        <Code size={32} />
                    </div>
                    <div className="text-4xl font-bold text-dark-knight mb-2">3h00</div>
                    <div className="text-sm text-skyline font-bold uppercase tracking-wider mb-4">Vibe Coding</div>
                    <p className="text-whale-skin leading-relaxed">Développement, debug et optimisations avec l'IA.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-desert-field shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                        <Rocket size={32} />
                    </div>
                    <div className="text-4xl font-bold text-dark-knight mb-2">30 min</div>
                    <div className="text-sm text-skyline font-bold uppercase tracking-wider mb-4">Déploiement</div>
                    <p className="text-whale-skin leading-relaxed">Mise en ligne et configuration Vercel.</p>
                </div>
            </div>

            {/* Learnings & Challenges Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
                <div className="bg-white rounded-2xl p-8 border border-green-200 shadow-sm">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-green-100 rounded-xl text-green-700">
                            <CheckCircle size={28} />
                        </div>
                        <h3 className="font-headings text-2xl font-bold text-dark-knight">Enseignements Clés</h3>
                    </div>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <div className="mt-1 p-1.5 bg-green-100 rounded-full text-green-700 shrink-0">
                                <Lightbulb size={16} />
                            </div>
                            <div>
                                <strong className="block text-dark-knight text-lg mb-1">Gestion du flow de concentration</strong>
                                <p className="text-whale-skin">Comme on fait plusieurs choses en parallèle (en attendant que l'IA travaille), il est crucial de garder une méthode stricte et de toujours centraliser les données pour ne pas se perdre.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="mt-1 p-1.5 bg-green-100 rounded-full text-green-700 shrink-0">
                                <Cpu size={16} />
                            </div>
                            <div>
                                <strong className="block text-dark-knight text-lg mb-1">Diversité des modèles IA</strong>
                                <p className="text-whale-skin">Chaque LLM a ses forces. La génération des fichiers markdown initiaux (cerveaux et indicateurs) s'est faite en utilisant à tour de rôle Claude, ChatGPT ou Perplexity selon le besoin.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="mt-1 p-1.5 bg-green-100 rounded-full text-green-700 shrink-0">
                                <BookOpen size={16} />
                            </div>
                            <div>
                                <strong className="block text-dark-knight text-lg mb-1">Documentation active</strong>
                                <p className="text-whale-skin">Les fichiers markdown de contexte sont devenus le "cerveau" du projet, mis à jour en temps réel.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-pizazz/30 shadow-sm">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-pizazz/10 rounded-xl text-pizazz">
                            <AlertTriangle size={28} />
                        </div>
                        <h3 className="font-headings text-2xl font-bold text-dark-knight">Défis rencontrés</h3>
                    </div>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <div className="mt-1 p-1.5 bg-pizazz/10 rounded-full text-pizazz shrink-0">
                                <Lightbulb size={16} />
                            </div>
                            <div>
                                <strong className="block text-dark-knight text-lg mb-1">Gestion de son propre flow de concentration</strong>
                                <p className="text-whale-skin">Comme on fait plusieurs choses en parallèle (en attendant que l'IA travaille sur le développement), il faut garder une méthode et toujours centraliser les données.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="mt-1 p-1.5 bg-pizazz/10 rounded-full text-pizazz shrink-0">
                                <Layers size={16} />
                            </div>
                            <div>
                                <strong className="block text-dark-knight text-lg mb-1">Difficulté d'utiliser plusieurs outils différents</strong>
                                <p className="text-whale-skin">L'application de vibe coding, ici Antigravity de Google, en conjonction avec Github et pour le déployement Vercel.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="mt-1 p-1.5 bg-pizazz/10 rounded-full text-pizazz shrink-0">
                                <Cpu size={16} />
                            </div>
                            <div>
                                <strong className="block text-dark-knight text-lg mb-1">Diversité des modèles IA</strong>
                                <p className="text-whale-skin">Comme les divers LLM ont tous des forces et des faiblesses différentes, la génération des fichiers markdown initiaux (les cervaux et indicateurs pour la création de l'artefact) s'est faite en utilisant à tour de rôle Claude, ChatGPT ou Perplexity.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-16 p-12 bg-whale-skin rounded-3xl text-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="relative z-10">
                    <h3 className="font-headings text-3xl font-bold mb-6">Envie de reproduire ce process ?</h3>
                    <p className="mb-10 text-coast-cream/90 text-xl max-w-2xl mx-auto leading-relaxed">
                        La clé est la préparation : 80% du succès réside dans la qualité de votre documentation initiale et votre capacité à itérer rapidement.
                    </p>
                    <a
                        href="https://memoways.com/contact"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-autumn-landscape hover:bg-pizazz text-white rounded-xl font-bold text-lg transition-all hover:scale-105 inline-flex items-center gap-3 shadow-lg"
                    >
                        Se faire accompagner <ArrowUpRight size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Process;
