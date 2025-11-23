import { Check } from 'lucide-react';

const Stepper = () => {
    const steps = [
        { number: 1, label: "Profil & contexte", status: "completed" },
        { number: 2, label: "Projet à financer", status: "active" },
        { number: 3, label: "Budget & planning", status: "pending" },
        { number: 4, label: "Argumentaire IA", status: "pending" },
        { number: 5, label: "Export PDF", status: "pending" }
    ];

    return (
        <div className="bg-white rounded-xl p-8 shadow-sm mb-8 flex items-center justify-between relative overflow-hidden">
            {steps.map((step, index) => (
                <div key={index} className="flex-1 flex flex-col items-center relative z-10">
                    <div className="flex items-center w-full">
                        {/* Connector Line (Left) */}
                        <div className={`h-0.5 flex-1 ${index === 0 ? 'bg-transparent' :
                                step.status === 'completed' || step.status === 'active' ? 'bg-gradient-to-r from-whale-skin to-royal-curtsy' : 'bg-desert-field'
                            }`}></div>

                        {/* Step Circle */}
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-headings font-bold text-lg transition-all duration-300 ${step.status === 'completed' ? 'bg-gradient-to-br from-whale-skin to-royal-curtsy text-white' :
                                step.status === 'active' ? 'bg-gradient-to-br from-autumn-landscape to-pizazz text-white ring-4 ring-autumn-landscape/20' :
                                    'bg-desert-field text-skyline'
                            }`}>
                            {step.status === 'completed' ? <Check size={20} /> : step.number}
                        </div>

                        {/* Connector Line (Right) */}
                        <div className={`h-0.5 flex-1 ${index === steps.length - 1 ? 'bg-transparent' :
                                step.status === 'completed' ? 'bg-gradient-to-r from-whale-skin to-royal-curtsy' : 'bg-desert-field'
                            }`}></div>
                    </div>

                    <div className={`mt-3 text-xs font-bold uppercase tracking-wide text-center max-w-[100px] ${step.status === 'active' ? 'text-dark-knight' : 'text-skyline'
                        }`}>
                        {step.label}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Stepper;
