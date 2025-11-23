import { ArrowLeft, Clock, Mail, FileText, Smile, RefreshCw, AlertTriangle, Sparkles } from 'lucide-react';

interface ComparisonScreenProps {
    onBack: () => void;
    onReset: () => void;
}

const ComparisonScreen = ({ onBack, onReset }: ComparisonScreenProps) => {
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
                    <div className="grid grid-cols-3 bg-gray-50 border-b border-desert-field p-4 text-sm font-bold text-skyline uppercase tracking-wider">
                        <div className="pl-4">Critère</div>
                        <div className="text-center">📄 Classique</div>
                        <div className="text-center text-autumn-landscape">✨ Artefacts</div>
                    </div>

                    {[
                        { icon: Clock, label: "Temps total", classic: "~18 heures", artefact: "~8 heures", gain: "-56%" },
                        { icon: Mail, label: "Communications", classic: "~45 emails", artefact: "~12 msgs", gain: "-73%" },
                        { icon: FileText, label: "Versions", classic: "~12 fichiers", artefact: "1 artefact", gain: "-92%" },
                        { icon: Smile, label: "Stress", classic: "Élevé", artefact: "Faible", gain: "Mieux" },
                        { icon: RefreshCw, label: "Contexte", classic: "~30 switch", artefact: "~5 switch", gain: "-83%" },
                        { icon: AlertTriangle, label: "Erreurs", classic: "~5-7", artefact: "~0-1", gain: "-90%" },
                    ].map((row, index) => (
                        <div key={index} className={`grid grid - cols - 3 p - 4 items - center border - b border - gray - 100 hover: bg - gray - 50 transition - colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} `}>
                            <div className="flex items-center gap-3 pl-4 font-medium text-dark-knight">
                                <row.icon size={18} className="text-skyline" />
                                {row.label}
                            </div>
                            <div className="text-center text-gray-600 font-medium">
                                {row.classic}
                            </div>
                            <div className="text-center font-bold text-dark-knight flex items-center justify-center gap-2">
                                {row.artefact}
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                    {row.gain}
                                </span>
                            </div>
                        </div>
                    ))}

                    <div className="grid grid-cols-3 p-4 items-center bg-autumn-landscape/5">
                        <div className="flex items-center gap-3 pl-4 font-bold text-dark-knight">
                            <Sparkles size={18} className="text-autumn-landscape" />
                            Mode collaboration
                        </div>
                        <div className="text-center text-gray-500">
                            Asynchrone (emails)
                        </div>
                        <div className="text-center font-bold text-autumn-landscape">
                            Temps réel synchronisé
                        </div>
                    </div>
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
                <button className="px-6 py-3 rounded-xl bg-autumn-landscape text-white font-bold hover:bg-pizazz shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                    ✨ Découvrir les démos
                </button>
            </div>
        </section>
    );
};

export default ComparisonScreen;
