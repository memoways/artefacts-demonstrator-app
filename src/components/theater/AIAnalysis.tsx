import { CheckCircle, AlertTriangle } from 'lucide-react';

const AIAnalysis = () => {
    const aiAnalysis = {
        summary: "Votre dossier est solide. Le budget artistique respecte les critères de la Ville (min. 60%).",
        checks: [
            {
                status: "success",
                label: "Parité respectée",
                detail: "47% de représentation féminine"
            },
            {
                status: "success",
                label: "Ancrage local fort",
                detail: "3 partenariats avec institutions locales"
            },
            {
                status: "warning",
                label: "Justifier la hausse de 15% du public",
                detail: "Ajouter des données sur les actions de médiation prévues"
            }
        ]
    };

    return (
        <div className="bg-gradient-to-br from-coast-cream to-white rounded-xl p-6 border-2 border-desert-field h-full">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-2xl">
                    🤖
                </div>
                <h3 className="font-headings text-lg font-bold text-dark-knight">Analyse IA du dossier</h3>
            </div>

            <p className="text-dark-knight mb-6 leading-relaxed text-sm">
                {aiAnalysis.summary}
            </p>

            <div className="space-y-3">
                {aiAnalysis.checks.map((check, index) => (
                    <div
                        key={index}
                        className={`bg-white p-3 rounded-lg border-l-4 flex gap-3 ${check.status === 'success' ? 'border-green-500' : 'border-autumn-landscape'
                            }`}
                    >
                        <div className="mt-0.5">
                            {check.status === 'success' ? (
                                <CheckCircle size={16} className="text-green-500" />
                            ) : (
                                <AlertTriangle size={16} className="text-autumn-landscape" />
                            )}
                        </div>
                        <div>
                            <div className="font-bold text-dark-knight text-sm mb-1">{check.label}</div>
                            <div className="text-xs text-skyline">{check.detail}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AIAnalysis;
