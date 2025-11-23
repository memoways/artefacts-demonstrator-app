import { useState } from 'react';
import { ArrowRight, FileText, Sparkles, FileDown, ChevronDown, ChevronUp, Users, Clock, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [openSection, setOpenSection] = useState<string | null>('context');

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="max-w-4xl mx-auto pb-10">
            <div className="text-center mb-16">
                <h1 className="font-headings text-4xl font-bold text-dark-knight mb-6">
                    Bienvenue dans <span className="text-transparent bg-clip-text bg-gradient-to-r from-autumn-landscape to-pizazz">Little Helpers</span>
                </h1>
                <p className="text-xl text-skyline max-w-2xl mx-auto leading-relaxed">
                    Une démonstration de l'évolution des documents statiques vers des artefacts logiciels interactifs et collaboratifs.
                </p>
            </div>

            {/* Accordion Section */}
            <div className="space-y-4 mb-16">
                {/* Context Section */}
                <div className="bg-white rounded-xl border border-desert-field overflow-hidden shadow-sm transition-all duration-300">
                    <button
                        onClick={() => toggleSection('context')}
                        className="w-full px-6 py-4 flex items-center justify-between bg-coast-cream/30 hover:bg-coast-cream/50 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-whale-skin/10 flex items-center justify-center text-whale-skin">
                                <Clock size={18} />
                            </div>
                            <h2 className="font-headings font-bold text-lg text-dark-knight">Contexte & Vision</h2>
                        </div>
                        {openSection === 'context' ? <ChevronUp className="text-skyline" /> : <ChevronDown className="text-skyline" />}
                    </button>

                    {openSection === 'context' && (
                        <div className="px-6 py-6 text-dark-knight/80 leading-relaxed border-t border-desert-field/30 animate-in slide-in-from-top-2 duration-200">
                            <p className="mb-4">
                                Aujourd'hui, la majorité des processus administratifs et créatifs reposent encore sur des documents statiques (Word, Excel, PDF). Ces formats, bien que familiers, présentent des limites majeures :
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mb-4">
                                <li><strong>Information figée :</strong> Une fois envoyé, le document ne vit plus.</li>
                                <li><strong>Collaboration difficile :</strong> Les versions se multiplient (v1, v1_final, v1_final_vrai.pdf).</li>
                                <li><strong>Manque d'intelligence :</strong> Le document ne vous aide pas à le remplir.</li>
                            </ul>
                            <p>
                                <strong>Little Helpers</strong> propose un changement de paradigme : transformer ces documents morts en <strong>artefacts logiciels vivants</strong>.
                            </p>
                        </div>
                    )}
                </div>

                {/* Objectives Section */}
                <div className="bg-white rounded-xl border border-desert-field overflow-hidden shadow-sm transition-all duration-300">
                    <button
                        onClick={() => toggleSection('objectives')}
                        className="w-full px-6 py-4 flex items-center justify-between bg-coast-cream/30 hover:bg-coast-cream/50 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-autumn-landscape/10 flex items-center justify-center text-autumn-landscape">
                                <Target size={18} />
                            </div>
                            <h2 className="font-headings font-bold text-lg text-dark-knight">Objectifs du Démonstrateur</h2>
                        </div>
                        {openSection === 'objectives' ? <ChevronUp className="text-skyline" /> : <ChevronDown className="text-skyline" />}
                    </button>

                    {openSection === 'objectives' && (
                        <div className="px-6 py-6 text-dark-knight/80 leading-relaxed border-t border-desert-field/30 animate-in slide-in-from-top-2 duration-200">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-bold text-whale-skin mb-2">Pour l'utilisateur</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-500 mt-1">✓</span>
                                            <span>Gagner du temps grâce à l'assistance IA</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-500 mt-1">✓</span>
                                            <span>Réduire les erreurs de saisie et de calcul</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-500 mt-1">✓</span>
                                            <span>Visualiser l'impact des décisions en temps réel</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-whale-skin mb-2">Pour l'organisation</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-500 mt-1">✓</span>
                                            <span>Standardiser les processus de demande</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-500 mt-1">✓</span>
                                            <span>Centraliser les données pour analyse</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-500 mt-1">✓</span>
                                            <span>Faciliter l'archivage et la conformité</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Usage Section */}
                <div className="bg-white rounded-xl border border-desert-field overflow-hidden shadow-sm transition-all duration-300">
                    <button
                        onClick={() => toggleSection('usage')}
                        className="w-full px-6 py-4 flex items-center justify-between bg-coast-cream/30 hover:bg-coast-cream/50 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-pizazz/10 flex items-center justify-center text-pizazz">
                                <Users size={18} />
                            </div>
                            <h2 className="font-headings font-bold text-lg text-dark-knight">Fonctionnement</h2>
                        </div>
                        {openSection === 'usage' ? <ChevronUp className="text-skyline" /> : <ChevronDown className="text-skyline" />}
                    </button>

                    {openSection === 'usage' && (
                        <div className="px-6 py-6 border-t border-desert-field/30 animate-in slide-in-from-top-2 duration-200">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
                                {/* Connecting Line */}
                                <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-skyline/20 via-autumn-landscape/50 to-skyline/20 -z-10"></div>

                                {/* Step 1 */}
                                <div className="bg-white p-4 rounded-xl border border-desert-field shadow-sm text-center w-full md:w-1/3 relative">
                                    <div className="w-12 h-12 mx-auto bg-coast-cream rounded-full flex items-center justify-center text-whale-skin mb-3 border-2 border-white shadow-sm">
                                        <FileText size={20} />
                                    </div>
                                    <h3 className="font-bold text-dark-knight mb-1">1. Saisie Interactive</h3>
                                    <p className="text-sm text-skyline">Remplissage guidé par des formulaires intelligents et dynamiques.</p>
                                </div>

                                {/* Step 2 */}
                                <div className="bg-white p-4 rounded-xl border border-autumn-landscape shadow-md text-center w-full md:w-1/3 relative transform scale-105 z-10">
                                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-autumn-landscape to-pizazz rounded-full flex items-center justify-center text-white mb-3 shadow-lg shadow-autumn-landscape/30">
                                        <Sparkles size={20} />
                                    </div>
                                    <h3 className="font-bold text-dark-knight mb-1">2. Artefact Vivant</h3>
                                    <p className="text-sm text-skyline">Collaboration, simulation et assistance IA en temps réel.</p>
                                </div>

                                {/* Step 3 */}
                                <div className="bg-white p-4 rounded-xl border border-desert-field shadow-sm text-center w-full md:w-1/3 relative">
                                    <div className="w-12 h-12 mx-auto bg-coast-cream rounded-full flex items-center justify-center text-whale-skin mb-3 border-2 border-white shadow-sm">
                                        <FileDown size={20} />
                                    </div>
                                    <h3 className="font-bold text-dark-knight mb-1">3. Export Officiel</h3>
                                    <p className="text-sm text-skyline">Génération du PDF final pour archivage et transmission.</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Demo Links */}
            <h2 className="font-headings text-2xl font-bold text-dark-knight mb-6 text-center">Découvrez les démos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link to="/theater" className="group bg-white p-6 rounded-xl border border-desert-field hover:border-whale-skin hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-coast-cream rounded-lg flex items-center justify-center text-whale-skin mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-2xl">🎭</span>
                    </div>
                    <h3 className="font-headings font-bold text-lg text-dark-knight mb-2 group-hover:text-whale-skin transition-colors">Théâtre</h3>
                    <p className="text-skyline text-sm mb-4">Dossier de subvention avec budget interactif et timeline.</p>
                    <div className="flex items-center text-autumn-landscape font-bold text-sm">
                        Explorer <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                </Link>

                <Link to="/freelance" className="group bg-white p-6 rounded-xl border border-desert-field hover:border-whale-skin hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-coast-cream rounded-lg flex items-center justify-center text-whale-skin mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-2xl">💼</span>
                    </div>
                    <h3 className="font-headings font-bold text-lg text-dark-knight mb-2 group-hover:text-whale-skin transition-colors">Freelance</h3>
                    <p className="text-skyline text-sm mb-4">Générateur de dossier de candidature avec assistant IA.</p>
                    <div className="flex items-center text-autumn-landscape font-bold text-sm">
                        Explorer <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                </Link>

                <Link to="/pme" className="group bg-white p-6 rounded-xl border border-desert-field hover:border-whale-skin hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-coast-cream rounded-lg flex items-center justify-center text-whale-skin mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-2xl">🏢</span>
                    </div>
                    <h3 className="font-headings font-bold text-lg text-dark-knight mb-2 group-hover:text-whale-skin transition-colors">PME</h3>
                    <p className="text-skyline text-sm mb-4">Simulateur de budget événementiel avec scénarios.</p>
                    <div className="flex items-center text-autumn-landscape font-bold text-sm">
                        Explorer <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Home;
