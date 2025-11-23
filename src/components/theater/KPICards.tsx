import { Users, Coins, Drama, Pencil } from 'lucide-react';

const KPICards = () => {
    const kpis = [
        {
            label: "Public estimé",
            value: "12'500",
            evolution: "+15% vs 2024",
            icon: Users,
            color: "border-whale-skin",
            iconColor: "text-whale-skin"
        },
        {
            label: "Budget total",
            value: "450k CHF",
            subtitle: "dont 30% subvention",
            icon: Coins,
            color: "border-autumn-landscape",
            iconColor: "text-autumn-landscape"
        },
        {
            label: "Représentations",
            value: "42",
            subtitle: "sur 3 productions",
            icon: Drama,
            color: "border-royal-curtsy",
            iconColor: "text-royal-curtsy"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {kpis.map((kpi, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 shadow-sm border-l-4 ${kpi.color} relative group`}>
                    <div className={`mb-3 ${kpi.iconColor}`}>
                        <kpi.icon size={32} />
                    </div>
                    <div className="font-headings text-4xl font-bold text-dark-knight mb-1">
                        {kpi.value}
                    </div>
                    <div className="text-sm text-skyline font-medium mb-2">
                        {kpi.label}
                    </div>
                    {kpi.evolution && (
                        <div className="text-green-600 text-xs font-bold bg-green-50 inline-block px-2 py-1 rounded">
                            {kpi.evolution}
                        </div>
                    )}
                    {kpi.subtitle && (
                        <div className="text-skyline text-xs">
                            {kpi.subtitle}
                        </div>
                    )}
                    <button className="absolute top-4 right-4 text-skyline hover:text-whale-skin opacity-0 group-hover:opacity-100 transition-opacity">
                        <Pencil size={16} />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default KPICards;
