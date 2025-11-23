const ProfileCards = () => {
    const profile = {
        name: "Sophie Martin",
        discipline: "Designer graphique",
        location: "Genève, Suisse",
        experience: "8 ans",
        avatar: "👩‍🎨"
    };

    return (
        <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-6xl text-center mb-4">{profile.avatar}</div>
                <h3 className="font-headings text-xl font-bold text-dark-knight text-center mb-6">{profile.name}</h3>

                <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-desert-field/30">
                        <span className="text-sm text-skyline">Discipline</span>
                        <span className="font-bold text-dark-knight">{profile.discipline}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-desert-field/30">
                        <span className="text-sm text-skyline">Territoire</span>
                        <span className="font-bold text-dark-knight">{profile.location}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-desert-field/30">
                        <span className="text-sm text-skyline">Expérience</span>
                        <span className="font-bold text-dark-knight">{profile.experience}</span>
                    </div>
                </div>
            </div>

            {/* Portfolio Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-headings text-lg font-bold text-dark-knight mb-4">Portfolio</h4>
                <div className="space-y-4">
                    <div className="py-2 border-b border-desert-field/30">
                        <div className="font-headings text-3xl font-bold text-whale-skin">24</div>
                        <div className="text-xs text-skyline uppercase tracking-wide">projets réalisés</div>
                    </div>
                    <div className="py-2 border-b border-desert-field/30">
                        <div className="font-headings text-3xl font-bold text-whale-skin">12</div>
                        <div className="text-xs text-skyline uppercase tracking-wide">clients récurrents</div>
                    </div>
                    <div className="py-2 border-b border-desert-field/30">
                        <div className="font-headings text-3xl font-bold text-whale-skin">45k CHF</div>
                        <div className="text-xs text-skyline uppercase tracking-wide">budget moyen</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCards;
