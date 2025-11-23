import { useState, useEffect } from 'react';
import ScenarioSelector from '../components/pme/ScenarioSelector';
import ParameterSliders from '../components/pme/ParameterSliders';
import { Copy, Save, FileDown, PieChart } from 'lucide-react';

const PMEDemo = () => {
    const [scenario, setScenario] = useState('realiste');
    const [params, setParams] = useState({
        prixBillet: 100,
        participants: 80,
        budgetCom: 3000,
        cachets: 4000
    });

    const scenarios: Record<string, typeof params> = {
        pessimiste: {
            prixBillet: 80,
            participants: 60,
            budgetCom: 2000,
            cachets: 3000
        },
        realiste: {
            prixBillet: 100,
            participants: 80,
            budgetCom: 3000,
            cachets: 4000
        },
        ambitieux: {
            prixBillet: 120,
            participants: 100,
            budgetCom: 5000,
            cachets: 5000
        }
    };

    useEffect(() => {
        setParams(scenarios[scenario]);
    }, [scenario]);

    const handleParamChange = (key: string, value: number) => {
        setParams(prev => ({ ...prev, [key]: value }));
    };

    const recettes = params.prixBillet * params.participants;
    const couts = params.budgetCom + params.cachets;
    const resultat = recettes - couts;

    return (
        <div className="max-w-6xl mx-auto pb-10">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="font-headings text-3xl font-bold text-dark-knight">Soirée annuelle clients</h1>
                    <div className="text-skyline font-medium mt-1">📅 Prévu: 15 juin 2026</div>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 border border-desert-field text-skyline hover:text-whale-skin hover:border-whale-skin rounded-lg transition-colors flex items-center gap-2 text-sm font-bold">
                        <Copy size={16} />
                        Dupliquer
                    </button>
                    <button className="px-4 py-2 border border-desert-field text-skyline hover:text-whale-skin hover:border-whale-skin rounded-lg transition-colors flex items-center gap-2 text-sm font-bold">
                        <Save size={16} />
                        Sauver comme modèle
                    </button>
                </div>
            </div>

            <ScenarioSelector currentScenario={scenario} onSelect={setScenario} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Sliders - 7 cols */}
                <div className="lg:col-span-7">
                    <ParameterSliders params={params} onChange={handleParamChange} />
                </div>

                {/* Results - 5 cols */}
                <div className="lg:col-span-5 space-y-6">
                    {/* Result Box */}
                    <div className="bg-gradient-to-br from-coast-cream to-white rounded-xl p-8 border-2 border-desert-field shadow-sm">
                        <h3 className="font-headings text-xl font-bold text-dark-knight mb-6">Résultat estimé</h3>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center pb-4 border-b border-desert-field/50">
                                <span className="text-skyline font-medium">💰 Recettes estimées</span>
                                <span className="font-headings text-xl font-bold text-green-600">{recettes.toLocaleString()} CHF</span>
                            </div>
                            <div className="flex justify-between items-center pb-4 border-b border-desert-field/50">
                                <span className="text-skyline font-medium">💸 Coûts totaux</span>
                                <span className="font-headings text-xl font-bold text-red-500">{couts.toLocaleString()} CHF</span>
                            </div>
                            <div className="flex justify-between items-center pt-2">
                                <span className="font-bold text-dark-knight text-lg">Résultat net</span>
                                <span className={`font-headings text-3xl font-bold ${resultat >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                                    {resultat > 0 ? '+' : ''}{resultat.toLocaleString()} CHF
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Charts Placeholder */}
                    <div className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-center h-48 border border-desert-field/30">
                        <div className="text-center">
                            <PieChart size={48} className="text-desert-field mx-auto mb-2" />
                            <p className="text-skyline text-sm">Visualisation graphique</p>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h4 className="font-bold text-dark-knight mb-4">Préparer dossier partenaire</h4>
                        <div className="flex gap-2">
                            <button className="flex-1 py-2 bg-coast-cream text-whale-skin rounded-lg text-sm font-bold hover:bg-desert-field transition-colors">
                                Résumé
                            </button>
                            <button className="flex-1 py-2 bg-coast-cream text-whale-skin rounded-lg text-sm font-bold hover:bg-desert-field transition-colors">
                                Budget
                            </button>
                            <button className="flex-1 py-2 bg-whale-skin text-white rounded-lg text-sm font-bold hover:bg-royal-curtsy transition-colors flex items-center justify-center gap-2">
                                <FileDown size={16} />
                                PDF
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PMEDemo;
