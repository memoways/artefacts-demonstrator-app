import WorkflowSchema from '../components/process/WorkflowSchema';
import { Clock, CheckCircle, AlertTriangle, ArrowUpRight } from 'lucide-react';

const Process = () => {
    return (
        <div className="max-w-4xl mx-auto pb-10">
            <div className="mb-12">
                <h1 className="font-headings text-4xl font-bold text-dark-knight mb-4">Coulisses de fabrication</h1>
                <div className="flex items-center gap-2 text-xl text-autumn-landscape font-bold">
                    <Clock size={24} />
                    <span>Temps total de réalisation : 4 heures</span>
                </div>
            </div>

            <div className="prose prose-lg max-w-none text-dark-knight mb-16">
                <p>
                    Cette application démonstrateur incarne les concepts qu'elle explique : c'est un <strong>artefact interactif généré</strong> qui remplace ce qui aurait pu être un document PDF statique.
                </p>
                <p>
                    Le processus démontre la faisabilité du "vibe coding" : en une demi-journée, une personne seule (sans être développeur full-stack) peut créer une application web professionnelle.
                </p>
            </div>

            {/* Interactive Workflow Schema */}
            <WorkflowSchema />

            {/* Learnings Section */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">
                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                    <div className="flex items-center gap-3 mb-4 text-green-700">
                        <CheckCircle size={24} />
                        <h3 className="font-bold text-lg">Ce qui a fonctionné</h3>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-sm text-green-800">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span>
                            <span><strong>Documentation exhaustive :</strong> Les 4 docs markdown ont permis une génération précise.</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-green-800">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span>
                            <span><strong>Itérations courtes :</strong> Petits prompts ciblés &gt; Gros prompt unique.</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-green-800">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span>
                            <span><strong>Pas de backend :</strong> Site statique = zéro maintenance complexe.</span>
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
                            <span><strong>Hallucinations CSS :</strong> Classes imaginaires nécessitant correction manuelle.</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-orange-800">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0"></span>
                            <span><strong>Ton de voix :</strong> L'IA tend vers le "corporate" par défaut.</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-orange-800">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0"></span>
                            <span><strong>Performance :</strong> Animations initiales trop lourdes.</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-16 p-8 bg-whale-skin rounded-2xl text-white text-center">
                <h3 className="font-headings text-2xl font-bold mb-4">Envie de reproduire ce process ?</h3>
                <p className="mb-8 text-coast-cream/80 max-w-2xl mx-auto">
                    La clé est la préparation : 80% du succès réside dans la qualité de votre documentation initiale, pas dans le code lui-même.
                </p>
                <button className="px-6 py-3 bg-autumn-landscape hover:bg-pizazz text-white rounded-lg font-bold transition-colors inline-flex items-center gap-2">
                    Voir la recette détaillée <ArrowUpRight size={18} />
                </button>
            </div>
        </div>
    );
};

export default Process;
