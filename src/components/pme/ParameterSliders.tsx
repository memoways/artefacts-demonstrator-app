interface ParameterSlidersProps {
    params: {
        prixBillet: number;
        participants: number;
        budgetCom: number;
        cachets: number;
    };
    onChange: (key: string, value: number) => void;
}

const ParameterSliders = ({ params, onChange }: ParameterSlidersProps) => {
    return (
        <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="font-headings text-xl font-bold text-dark-knight mb-6">Paramètres de l'événement</h3>

            <div className="space-y-8">
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className="font-bold text-dark-knight">Prix du billet</label>
                        <span className="font-headings text-lg font-bold text-autumn-landscape">{params.prixBillet} CHF</span>
                    </div>
                    <input
                        type="range" min="50" max="200" step="10"
                        value={params.prixBillet}
                        onChange={(e) => onChange('prixBillet', parseInt(e.target.value))}
                        className="w-full h-2 bg-desert-field rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-whale-skin [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-transform hover:[&::-webkit-slider-thumb]:scale-110"
                    />
                    <div className="flex justify-between mt-1 text-xs text-skyline">
                        <span>50 CHF</span>
                        <span>200 CHF</span>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className="font-bold text-dark-knight">Participants attendus</label>
                        <span className="font-headings text-lg font-bold text-autumn-landscape">{params.participants} pers.</span>
                    </div>
                    <input
                        type="range" min="30" max="150" step="5"
                        value={params.participants}
                        onChange={(e) => onChange('participants', parseInt(e.target.value))}
                        className="w-full h-2 bg-desert-field rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-whale-skin [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-transform hover:[&::-webkit-slider-thumb]:scale-110"
                    />
                    <div className="flex justify-between mt-1 text-xs text-skyline">
                        <span>30</span>
                        <span>150</span>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className="font-bold text-dark-knight">Budget communication</label>
                        <span className="font-headings text-lg font-bold text-autumn-landscape">{params.budgetCom} CHF</span>
                    </div>
                    <input
                        type="range" min="500" max="10000" step="500"
                        value={params.budgetCom}
                        onChange={(e) => onChange('budgetCom', parseInt(e.target.value))}
                        className="w-full h-2 bg-desert-field rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-whale-skin [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-transform hover:[&::-webkit-slider-thumb]:scale-110"
                    />
                    <div className="flex justify-between mt-1 text-xs text-skyline">
                        <span>500 CHF</span>
                        <span>10'000 CHF</span>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className="font-bold text-dark-knight">Cachets artistes</label>
                        <span className="font-headings text-lg font-bold text-autumn-landscape">{params.cachets} CHF</span>
                    </div>
                    <input
                        type="range" min="1000" max="15000" step="500"
                        value={params.cachets}
                        onChange={(e) => onChange('cachets', parseInt(e.target.value))}
                        className="w-full h-2 bg-desert-field rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-whale-skin [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-transform hover:[&::-webkit-slider-thumb]:scale-110"
                    />
                    <div className="flex justify-between mt-1 text-xs text-skyline">
                        <span>1'000 CHF</span>
                        <span>15'000 CHF</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParameterSliders;
