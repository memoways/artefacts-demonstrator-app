import { useState } from 'react';
import { ArrowLeft, Clock, Mail, FileText, Smile, RefreshCw, AlertTriangle, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ComparisonScreenProps {
    onBack: () => void;
    onReset: () => void;
}

const ComparisonScreen = ({ onBack, onReset }: ComparisonScreenProps) => {
    const [expandedRow, setExpandedRow] = useState<string | null>(null);

    return (
        <section className="min-h-[80vh] py-10 animate-in zoom-in-95 duration-500">
            <button onClick={onBack} className="absolute top-4 left-4 flex items-center gap-1 text-skyline hover:text-whale-skin transition-colors">
                <ArrowLeft size={16} /> Retour
            </button>

            <div className="text-center mb-12">
                <h2 className="font-headings text-3xl font-bold text-dark-knight mb-4">
                    ⚖️ Comparaison : Classique vs Artefacts
                </h2>
                <p className="text-skyline max-w-2xl mx-auto">
                    Synthèse basée sur une configuration moyenne (3 collaborateurs, complexité moyenne).
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-4 mb-16">
                <div className="bg-white rounded-2xl border-2 border-desert-field shadow-lg overflow-hidden">
                    <div className="grid grid-cols-12 bg-gray-50 border-b border-desert-field p-4 text-sm font-bold text-skyline uppercase tracking-wider">
                        <div className="col-span-4 pl-4">Critère</div>
                        <div className="col-span-4 text-center">📄 Classique</div>
                        <div className="col-span-4 text-right pr-12 text-autumn-landscape">✨ Artefacts</div>
                    </div>

                    {[
                        {
                            id: 'time',
                            icon: Clock,
                            label: "Temps total",
                            classic: "~18 heures",
                            artefact: "~8 heures",
                            gain: "-56%",
                            why: "L'automatisation des calculs et la centralisation des données suppriment les tâches manuelles répétitives."
                        },
                        {
                            id: 'comms',
                            icon: Mail,
                            label: "Communications",
                            classic: "~45 emails",
                            artefact: "~12 msgs",
                            gain: "-73%",
                            why: "Les échanges se font directement dans le contexte (commentaires), réduisant drastiquement les emails."
                        },
                        {
                            id: 'versions',
                            icon: FileText,
                            label: "Versions",
                            classic: "~12 fichiers",
                            artefact: "1 artefact",
                            gain: "-92%",
                            why: "Plus de 'v2_final_final.docx'. L'artefact est toujours à jour, accessible par un lien unique."
                        },
                        {
                            id: 'stress',
                            icon: Smile,
                            label: "Stress",
                            classic: "Élevé",
                            artefact: "Faible",
                            gain: "Mieux",
                            why: "La confiance dans les données et la visibilité sur l'avancement réduisent la charge mentale."
                        },
                        {
                            id: 'context',
                            icon: RefreshCw,
                            label: "Contexte",
                            classic: "~30 switch",
                            artefact: "~5 switch",
                            gain: "-83%",
                            why: "Tout est au même endroit : données, texte, et discussions. Plus besoin de jongler entre les fenêtres."
                        },
                        {
                            id: 'errors',
                            icon: AlertTriangle,
                            label: "Erreurs",
                            classic: "~5-7",
                            artefact: "~0-1",
                            gain: "-90%",
                            why: "Les formules verrouillées et les contrôles de saisie empêchent les erreurs humaines courantes."
                        },
                    ].map((row, index) => (
                        <div key={index} className="border-b border-gray-100 last:border-0">
                            <div
                                onClick={() => setExpandedRow(expandedRow === row.id ? null : row.id)}
                                className={`grid grid-cols-12 p-4 items-center cursor-pointer transition-colors ${expandedRow === row.id ? 'bg-autumn-landscape/5' : 'hover:bg-gray-50'}`}
                            >
                                <div className="col-span-4 flex items-center gap-3 pl-4 font-medium text-dark-knight">
                                    <button className="text-skyline hover:text-autumn-landscape transition-colors">
                                        {expandedRow === row.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                    </button>
                                    <row.icon size={18} className="text-skyline" />
                                    {row.label}
                                </div>
                                <div className="col-span-4 text-center text-gray-600 font-medium">
                                    {row.classic}
                                </div>
                                <div className="col-span-4 flex items-center justify-end gap-3 pr-4">
                                    <span className="font-bold text-dark-knight">{row.artefact}</span>
                                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold min-w-[45px] text-center">
                                        {row.gain}
                                    </span>
                                </div>
                            </div>

                            {expandedRow === row.id && (
                                <div className="bg-autumn-landscape/5 px-12 py-3 text-sm text-skyline animate-in slide-in-from-top-2 duration-200">
                                    <p><span className="font-bold text-autumn-landscape">Pourquoi ?</span> {row.why}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 mb-12">
                <div className="bg-gradient-to-br from-dark-knight to-whale-skin rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>

                    <h3 className="text-2xl font-bold mb-8 relative z-10">🎯 Votre situation potentielle</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                        <div>
                            <p className="text-skyline mb-4 text-sm uppercase tracking-wider font-bold">Avec vos paramètres</p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-autumn-landscape"></div>
                                    3 collaborateurs
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-autumn-landscape"></div>
                                    Complexité moyenne
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-autumn-landscape"></div>
                                    Délai de 2 semaines
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-autumn-landscape mb-4 text-sm uppercase tracking-wider font-bold">Gains estimés</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                                    <div className="text-2xl font-bold mb-1">~10h</div>
                                    <div className="text-xs text-gray-300">de travail économisé</div>
                                </div>
                                <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                                    <div className="text-2xl font-bold mb-1">~33</div>
                                    <div className="text-xs text-gray-300">emails en moins</div>
                                </div>
                                <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                                    <div className="text-2xl font-bold mb-1">Zen</div>
                                    <div className="text-xs text-gray-300">moins de stress</div>
                                </div>
                                <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                                    <div className="text-2xl font-bold mb-1">++</div>
                                    <div className="text-xs text-gray-300">qualité finale</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-4">
                <button
                    onClick={onReset}
                    className="px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-colors"
                >
                    🔄 Recommencer
                </button>
                <Link to="/theater" className="px-6 py-3 rounded-xl bg-autumn-landscape text-white font-bold hover:bg-pizazz shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                    ✨ Découvrir les démos
                </Link>
            </div>
        </section>
    );
};

export default ComparisonScreen;
