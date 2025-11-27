import { ArrowRight, FileText, Zap, Users, ShieldCheck, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Opportunities = () => {
    const [activeStep, setActiveStep] = useState(1);

    return (
        <div className="max-w-5xl mx-auto pb-10">
            <div className="mb-16 text-center">
                <h1 className="font-headings text-4xl font-bold text-dark-knight mb-6">
                    Pourquoi passer aux <span className="text-transparent bg-clip-text bg-gradient-to-r from-autumn-landscape to-pizazz">Artefacts Vivants</span> ?
                </h1>
                <p className="text-xl font-medium text-whale-skin max-w-3xl mx-auto leading-relaxed">
                    Le document statique est une relique du passé. Découvrez comment le changement de paradigme vers des interfaces logicielles transforme votre manière de travailler.
                </p>
            </div>

            {/* Benefits Section (Moved from Home) */}
            <div className="bg-white rounded-2xl p-8 border border-desert-field shadow-sm mb-16">
                <h2 className="font-headings text-2xl font-bold text-dark-knight mb-8 text-center">Les Bénéfices Concrets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-bold text-whale-skin mb-4 text-lg">Pour l'utilisateur</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 mt-0.5 text-xl">✓</span>
                                <span className="text-dark-knight"><strong>Gagner du temps</strong> grâce à l'assistance IA et l'automatisation.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 mt-0.5 text-xl">✓</span>
                                <span className="text-dark-knight"><strong>Réduire les erreurs</strong> de saisie et de calculs complexes.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 mt-0.5 text-xl">✓</span>
                                <span className="text-dark-knight"><strong>Visualiser l'impact</strong> des décisions en temps réel (budget, planning).</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-whale-skin mb-4 text-lg">Pour l'organisation</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 mt-0.5 text-xl">✓</span>
                                <span className="text-dark-knight"><strong>Standardiser les processus</strong> de demande et de reporting.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 mt-0.5 text-xl">✓</span>
                                <span className="text-dark-knight"><strong>Centraliser les données</strong> pour une meilleure analyse globale.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 mt-0.5 text-xl">✓</span>
                                <span className="text-dark-knight"><strong>Faciliter l'archivage</strong> et la conformité des documents officiels.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Comparison Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                {/* Old Way */}
                <div className="bg-white p-8 rounded-2xl border border-desert-field/50 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-2 bg-skyline/30"></div>
                    <div className="flex items-center gap-4 mb-6 opacity-70">
                        <div className="w-12 h-12 rounded-full bg-skyline/10 flex items-center justify-center text-skyline">
                            <FileText size={24} />
                        </div>
                        <h3 className="font-headings text-2xl font-bold text-skyline">L'Ancien Monde</h3>
                    </div>

                    <div className="space-y-6 relative z-10">
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                            <span className="text-2xl">🐌</span>
                            <div>
                                <h4 className="font-bold text-gray-600">Figé & Obsolète</h4>
                                <p className="text-sm text-gray-500">L'information est morte dès l'export PDF. Les versions s'accumulent (v1, v2_final...).</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                            <span className="text-2xl">😫</span>
                            <div>
                                <h4 className="font-bold text-gray-600">Saisie Pénible</h4>
                                <p className="text-sm text-gray-500">Remplir des cases Word/Excel sans aide, sans contexte et sans validation.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                            <span className="text-2xl">📉</span>
                            <div>
                                <h4 className="font-bold text-gray-600">Donnée Perdue</h4>
                                <p className="text-sm text-gray-500">Impossible d'analyser ou de réutiliser les données enfermées dans des documents.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* New Way */}
                <div className="bg-white p-8 rounded-2xl border-2 border-autumn-landscape shadow-xl shadow-autumn-landscape/10 relative overflow-hidden transform md:-translate-y-4 transition-transform hover:-translate-y-6 duration-300">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-autumn-landscape to-pizazz"></div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-autumn-landscape/10 flex items-center justify-center text-autumn-landscape">
                            <Zap size={24} />
                        </div>
                        <h3 className="font-headings text-2xl font-bold text-dark-knight">L'Approche Artefact</h3>
                    </div>

                    <div className="space-y-6 relative z-10">
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-coast-cream/30 border border-autumn-landscape/20">
                            <span className="text-2xl">✨</span>
                            <div>
                                <h4 className="font-bold text-whale-skin">Vivant & Interactif</h4>
                                <p className="text-sm text-dark-knight/70">Un logiciel qui s'adapte, simule et évolue avec votre projet jusqu'à la validation.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-coast-cream/30 border border-autumn-landscape/20">
                            <span className="text-2xl">🤝</span>
                            <div>
                                <h4 className="font-bold text-whale-skin">Collaboration Réelle</h4>
                                <p className="text-sm text-dark-knight/70">Travaillez ensemble en temps réel sur la même source de vérité.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-coast-cream/30 border border-autumn-landscape/20">
                            <span className="text-2xl">🧠</span>
                            <div>
                                <h4 className="font-bold text-whale-skin">Intelligence Intégrée</h4>
                                <p className="text-sm text-dark-knight/70">L'IA vous assiste, suggère des améliorations et valide la cohérence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Visual Diagram Section */}
            <div className="bg-white rounded-2xl p-10 border border-desert-field shadow-sm mb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-coast-cream rounded-full -mr-32 -mt-32 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-desert-field/30 rounded-full -ml-24 -mb-24 opacity-50"></div>

                <h2 className="font-headings text-2xl font-bold text-dark-knight mb-12 text-center relative z-10">Le Flux de Valeur "Little Helpers"</h2>

                <div className="flex flex-col md:flex-row items-center justify-between relative z-10 gap-8 mb-12">
                    {/* Step 1 */}
                    <div
                        className={`flex flex-col items-center text-center max-w-[200px] cursor-pointer transition-all duration-300 ${activeStep === 1 ? 'scale-105' : 'opacity-70 hover:opacity-100'}`}
                        onClick={() => setActiveStep(1)}
                    >
                        <div className={`w-20 h-20 rounded-2xl bg-white border-2 ${activeStep === 1 ? 'border-autumn-landscape shadow-autumn-landscape/30' : 'border-whale-skin'} flex items-center justify-center shadow-lg mb-4 relative group transition-colors`}>
                            <Users size={32} className={`${activeStep === 1 ? 'text-autumn-landscape' : 'text-whale-skin'} transition-colors`} />
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-autumn-landscape rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                        </div>
                        <h3 className={`font-bold ${activeStep === 1 ? 'text-autumn-landscape' : 'text-dark-knight'} mb-2 transition-colors`}>Co-Création</h3>
                        <p className="text-sm text-skyline">Saisie guidée et collaborative dans l'interface</p>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:flex flex-1 items-center justify-center px-4 relative h-10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-xs font-bold text-skyline uppercase tracking-wider mb-2">
                            Simulation
                        </div>
                        <div className="h-0.5 w-full bg-gradient-to-r from-whale-skin to-autumn-landscape relative mt-4">
                            <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 text-autumn-landscape" size={20} />
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div
                        className={`flex flex-col items-center text-center max-w-[200px] cursor-pointer transition-all duration-300 ${activeStep === 2 ? 'scale-105' : 'opacity-70 hover:opacity-100'}`}
                        onClick={() => setActiveStep(2)}
                    >
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${activeStep === 2 ? 'from-autumn-landscape to-pizazz shadow-autumn-landscape/50' : 'from-gray-200 to-gray-300'} flex items-center justify-center shadow-lg mb-4 relative group transition-all`}>
                            <RefreshCw size={32} className={`${activeStep === 2 ? 'text-white animate-spin-slow' : 'text-gray-500'}`} />
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-whale-skin rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                        </div>
                        <h3 className={`font-bold ${activeStep === 2 ? 'text-autumn-landscape' : 'text-dark-knight'} mb-2 transition-colors`}>Artefact Vivant</h3>
                        <p className="text-sm text-skyline">Optimisation continue par l'IA et les règles métier</p>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:flex flex-1 items-center justify-center px-4 relative h-10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-xs font-bold text-skyline uppercase tracking-wider mb-2">
                            Validation
                        </div>
                        <div className="h-0.5 w-full bg-gradient-to-r from-autumn-landscape to-whale-skin relative mt-4">
                            <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 text-whale-skin" size={20} />
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div
                        className={`flex flex-col items-center text-center max-w-[200px] cursor-pointer transition-all duration-300 ${activeStep === 3 ? 'scale-105' : 'opacity-70 hover:opacity-100'}`}
                        onClick={() => setActiveStep(3)}
                    >
                        <div className={`w-20 h-20 rounded-2xl bg-white border-2 ${activeStep === 3 ? 'border-autumn-landscape shadow-autumn-landscape/30' : 'border-whale-skin'} flex items-center justify-center shadow-lg mb-4 relative group transition-colors`}>
                            <ShieldCheck size={32} className={`${activeStep === 3 ? 'text-autumn-landscape' : 'text-whale-skin'} transition-colors`} />
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-autumn-landscape rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                        </div>
                        <h3 className={`font-bold ${activeStep === 3 ? 'text-autumn-landscape' : 'text-dark-knight'} mb-2 transition-colors`}>Export Officiel</h3>
                        <p className="text-sm text-skyline">Génération du PDF final pour archivage légal</p>
                    </div>
                </div>

                {/* Detailed Content Area */}
                <div className="bg-coast-cream/30 rounded-xl p-8 border border-autumn-landscape/10 min-h-[180px] transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-autumn-landscape to-pizazz"></div>

                    {activeStep === 1 && (
                        <div className="animate-fadeIn">
                            <h3 className="text-xl font-bold text-whale-skin mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-autumn-landscape text-white flex items-center justify-center text-sm">1</span>
                                La Co-Création
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-dark-knight mb-2 text-sm uppercase tracking-wide">L'Apport</h4>
                                    <p className="text-skyline">Implication directe des parties prenantes dès le début du processus. L'interface guide la saisie pour ne rien oublier.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark-knight mb-2 text-sm uppercase tracking-wide">Les Opportunités</h4>
                                    <p className="text-skyline">Réduction drastique des allers-retours par email. Alignement immédiat des équipes sur les besoins et les contraintes.</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeStep === 2 && (
                        <div className="animate-fadeIn">
                            <h3 className="text-xl font-bold text-whale-skin mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-autumn-landscape text-white flex items-center justify-center text-sm">2</span>
                                L'Artefact Vivant
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-dark-knight mb-2 text-sm uppercase tracking-wide">L'Apport</h4>
                                    <p className="text-skyline">Un outil qui vit avec le projet, pas un document mort. Il intègre la logique métier et recalcule tout en temps réel.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark-knight mb-2 text-sm uppercase tracking-wide">Les Opportunités</h4>
                                    <p className="text-skyline">Ajustements instantanés, simulations de scénarios ("et si ?"), et prise de décision éclairée basée sur des données fiables.</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeStep === 3 && (
                        <div className="animate-fadeIn">
                            <h3 className="text-xl font-bold text-whale-skin mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-autumn-landscape text-white flex items-center justify-center text-sm">3</span>
                                L'Export Officiel
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-dark-knight mb-2 text-sm uppercase tracking-wide">L'Apport</h4>
                                    <p className="text-skyline">La sécurité d'un document contractuel quand c'est nécessaire, généré à partir de données validées.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark-knight mb-2 text-sm uppercase tracking-wide">Les Opportunités</h4>
                                    <p className="text-skyline">Génération automatique sans erreur de copier-coller, conformité garantie, et archivage simplifié.</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-whale-skin to-royal-curtsy rounded-2xl p-12 text-white shadow-xl">
                <h2 className="font-headings text-3xl font-bold mb-4">Prêt à transformer vos processus ?</h2>
                <p className="text-coast-cream/80 text-lg mb-8 max-w-2xl mx-auto">
                    Commencez par explorer nos démonstrateurs sectoriels pour voir la puissance des artefacts en action.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/theater" className="px-8 py-4 bg-autumn-landscape hover:bg-pizazz text-white rounded-xl font-bold text-lg shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                        Explorer les démos <ArrowRight size={20} />
                    </Link>
                    <a
                        href="https://memoways.com/contact"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-lg backdrop-blur-sm transition-all flex items-center justify-center gap-2"
                    >
                        Contacter l'équipe
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Opportunities;
