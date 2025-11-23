import { useState } from 'react';
import { PieChart } from 'lucide-react';

const BudgetChart = () => {
    const [budget, setBudget] = useState([
        { category: "Artistique & Technique", percentage: 65, color: "bg-whale-skin" },
        { category: "Communication", percentage: 15, color: "bg-autumn-landscape" },
        { category: "Médiation", percentage: 10, color: "bg-pizazz" },
        { category: "Administration", percentage: 10, color: "bg-skyline" }
    ]);

    const handleSliderChange = (index: number, value: number) => {
        const newBudget = [...budget];
        newBudget[index].percentage = value;
        setBudget(newBudget);
    };

    const total = budget.reduce((acc, item) => acc + item.percentage, 0);

    return (
        <div className="bg-white rounded-xl p-8 shadow-sm h-full">
            <h3 className="font-headings text-xl font-bold text-dark-knight mb-6 flex items-center gap-2">
                <PieChart size={20} className="text-autumn-landscape" />
                Répartition budgétaire
            </h3>

            <div className="space-y-6">
                {budget.map((item, index) => (
                    <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-bold text-dark-knight">{item.category}</span>
                            <span className="text-sm font-bold text-whale-skin">{item.percentage}%</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={item.percentage}
                            onChange={(e) => handleSliderChange(index, parseInt(e.target.value))}
                            className={`w-full h-2 rounded-lg appearance-none cursor-pointer bg-desert-field/30 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:${item.color} [&::-webkit-slider-thumb]:shadow-md`}
                        />
                    </div>
                ))}
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-coast-cream to-white rounded-lg border border-desert-field flex justify-between items-center">
                <span className="font-bold text-dark-knight">Total</span>
                <span className={`font-headings text-xl font-bold ${total === 100 ? 'text-green-600' : 'text-red-500'}`}>
                    {total}%
                </span>
            </div>
        </div>
    );
};

export default BudgetChart;
