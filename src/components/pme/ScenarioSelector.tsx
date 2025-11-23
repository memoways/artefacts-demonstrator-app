import { TrendingDown, BarChart2, TrendingUp } from 'lucide-react';

interface ScenarioSelectorProps {
    currentScenario: string;
    onSelect: (scenario: string) => void;
}

const ScenarioSelector = ({ currentScenario, onSelect }: ScenarioSelectorProps) => {
    return (
        <div className="flex gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm">
            <button
                onClick={() => onSelect('pessimiste')}
                className={`flex-1 p-4 border-2 rounded-lg flex flex-col items-center gap-2 transition-all ${currentScenario === 'pessimiste'
                        ? 'border-autumn-landscape bg-gradient-to-br from-coast-cream to-white ring-2 ring-autumn-landscape/20'
                        : 'border-desert-field hover:border-whale-skin hover:bg-coast-cream/30'
                    }`}
            >
                <TrendingDown size={32} className={currentScenario === 'pessimiste' ? 'text-autumn-landscape' : 'text-skyline'} />
                <span className={`font-headings font-bold ${currentScenario === 'pessimiste' ? 'text-dark-knight' : 'text-skyline'}`}>
                    Pessimiste
                </span>
            </button>

            <button
                onClick={() => onSelect('realiste')}
                className={`flex-1 p-4 border-2 rounded-lg flex flex-col items-center gap-2 transition-all ${currentScenario === 'realiste'
                        ? 'border-autumn-landscape bg-gradient-to-br from-coast-cream to-white ring-2 ring-autumn-landscape/20'
                        : 'border-desert-field hover:border-whale-skin hover:bg-coast-cream/30'
                    }`}
            >
                <BarChart2 size={32} className={currentScenario === 'realiste' ? 'text-autumn-landscape' : 'text-skyline'} />
                <span className={`font-headings font-bold ${currentScenario === 'realiste' ? 'text-dark-knight' : 'text-skyline'}`}>
                    Réaliste
                </span>
            </button>

            <button
                onClick={() => onSelect('ambitieux')}
                className={`flex-1 p-4 border-2 rounded-lg flex flex-col items-center gap-2 transition-all ${currentScenario === 'ambitieux'
                        ? 'border-autumn-landscape bg-gradient-to-br from-coast-cream to-white ring-2 ring-autumn-landscape/20'
                        : 'border-desert-field hover:border-whale-skin hover:bg-coast-cream/30'
                    }`}
            >
                <TrendingUp size={32} className={currentScenario === 'ambitieux' ? 'text-autumn-landscape' : 'text-skyline'} />
                <span className={`font-headings font-bold ${currentScenario === 'ambitieux' ? 'text-dark-knight' : 'text-skyline'}`}>
                    Ambitieux
                </span>
            </button>
        </div>
    );
};

export default ScenarioSelector;
