import { useState } from 'react';

const ProjectForm = () => {
    const [budget, setBudget] = useState({
        honoraires: 8000,
        production: 5000,
        communication: 2000
    });

    const total = Object.values(budget).reduce((a, b) => a + b, 0);

    const handleSliderChange = (key: keyof typeof budget, value: number) => {
        setBudget(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="font-headings text-xl font-bold text-dark-knight mb-6">Décrivez votre projet</h3>

            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-bold text-dark-knight mb-2">Titre du projet</label>
                    <input
                        type="text"
                        placeholder="Ex: Identité visuelle pour startup tech"
                        className="w-full px-4 py-3 rounded-lg border-2 border-desert-field focus:border-whale-skin outline-none transition-colors"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-bold text-dark-knight mb-2">Lieu de réalisation</label>
                        <input
                            type="text"
                            placeholder="Ville, Canton"
                            className="w-full px-4 py-3 rounded-lg border-2 border-desert-field focus:border-whale-skin outline-none transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-dark-knight mb-2">Dates prévues</label>
                        <input
                            type="text"
                            placeholder="Janv - Mars 2026"
                            className="w-full px-4 py-3 rounded-lg border-2 border-desert-field focus:border-whale-skin outline-none transition-colors"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-dark-knight mb-2">Type de subvention</label>
                    <select className="w-full px-4 py-3 rounded-lg border-2 border-desert-field focus:border-whale-skin outline-none transition-colors bg-white">
                        <option>Sélectionner...</option>
                        <option>CNAP - Culture</option>
                        <option>Région Lémanique</option>
                        <option>Ville de Genève</option>
                        <option>Pro Helvetia</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-bold text-dark-knight mb-2">Description artistique</label>
                    <textarea
                        rows={6}
                        placeholder="Décrivez votre démarche, vos objectifs, votre public cible..."
                        className="w-full px-4 py-3 rounded-lg border-2 border-desert-field focus:border-whale-skin outline-none transition-colors resize-none"
                    ></textarea>
                </div>

                <div className="pt-6 border-t border-desert-field/30">
                    <h4 className="font-headings text-lg font-bold text-dark-knight mb-6">Budget prévisionnel</h4>

                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-bold text-dark-knight">Honoraires</label>
                                <span className="font-bold text-whale-skin">{budget.honoraires} CHF</span>
                            </div>
                            <input
                                type="range" min="0" max="20000" step="500" value={budget.honoraires}
                                onChange={(e) => handleSliderChange('honoraires', parseInt(e.target.value))}
                                className="w-full h-2 bg-desert-field rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-whale-skin"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-bold text-dark-knight">Production</label>
                                <span className="font-bold text-whale-skin">{budget.production} CHF</span>
                            </div>
                            <input
                                type="range" min="0" max="15000" step="500" value={budget.production}
                                onChange={(e) => handleSliderChange('production', parseInt(e.target.value))}
                                className="w-full h-2 bg-desert-field rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-autumn-landscape"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-bold text-dark-knight">Communication</label>
                                <span className="font-bold text-whale-skin">{budget.communication} CHF</span>
                            </div>
                            <input
                                type="range" min="0" max="10000" step="500" value={budget.communication}
                                onChange={(e) => handleSliderChange('communication', parseInt(e.target.value))}
                                className="w-full h-2 bg-desert-field rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-pizazz"
                            />
                        </div>
                    </div>

                    <div className="mt-8 p-4 bg-gradient-to-r from-coast-cream to-white rounded-lg border border-desert-field flex justify-between items-center">
                        <strong className="text-dark-knight">Total projet:</strong>
                        <span className="font-headings text-xl font-bold text-dark-knight">{total.toLocaleString()} CHF</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectForm;
