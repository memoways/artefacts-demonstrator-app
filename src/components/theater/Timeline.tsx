import { Calendar, ChevronDown } from 'lucide-react';

const Timeline = () => {
    const timeline = [
        {
            title: "Création 'Les Géants'",
            date: "Sept 2025",
            status: "en_cours",
            description: "Répétitions et création originale"
        },
        {
            title: "Première représentation",
            date: "Nov 2025",
            status: "a_venir",
            description: "Théâtre Municipal de Lausanne"
        },
        {
            title: "Tournée Romande",
            date: "Jan 2026",
            status: "a_venir",
            description: "Genève, Fribourg, Sion, Neuchâtel"
        },
        {
            title: "Clôture de saison",
            date: "Mar 2026",
            status: "a_venir",
            description: "Bilan et archivage"
        }
    ];

    return (
        <div className="bg-white rounded-xl p-8 shadow-sm h-full">
            <h3 className="font-headings text-xl font-bold text-dark-knight mb-6 flex items-center gap-2">
                <Calendar size={20} className="text-whale-skin" />
                Calendrier de production
            </h3>

            <div className="relative pl-4 space-y-8 before:content-[''] before:absolute before:left-[23px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-whale-skin before:to-skyline/30">
                {timeline.map((item, index) => (
                    <div key={index} className={`relative pl-8 ${item.status === 'en_cours' ? 'opacity-100' : 'opacity-70'}`}>
                        <div className={`absolute left-0 top-1 w-4 h-4 rounded-full border-[3px] bg-white z-10 ${item.status === 'en_cours'
                                ? 'border-autumn-landscape shadow-[0_0_0_4px_rgba(226,114,39,0.2)]'
                                : 'border-whale-skin'
                            }`}></div>

                        <div className="bg-coast-cream/30 p-4 rounded-lg border border-desert-field/50 hover:border-desert-field transition-colors">
                            <div className="text-xs font-bold text-autumn-landscape mb-1 uppercase tracking-wide">
                                {item.date}
                            </div>
                            <h4 className="font-headings text-lg font-bold text-dark-knight mb-2">
                                {item.title}
                            </h4>
                            <p className="text-sm text-skyline mb-4">
                                {item.description}
                            </p>

                            {item.status === 'en_cours' && (
                                <div className="flex gap-2">
                                    <div className="relative">
                                        <select className="appearance-none bg-white border border-desert-field text-dark-knight text-xs font-bold py-1.5 pl-3 pr-8 rounded focus:outline-none focus:border-whale-skin cursor-pointer">
                                            <option>En cours</option>
                                            <option>À venir</option>
                                            <option>Terminé</option>
                                        </select>
                                        <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-skyline pointer-events-none" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Ajouter une note..."
                                        className="flex-1 bg-white border border-desert-field rounded px-3 py-1.5 text-xs outline-none focus:border-whale-skin"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
