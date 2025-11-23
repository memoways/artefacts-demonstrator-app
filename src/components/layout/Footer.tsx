

const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-b from-royal-curtsy to-dark-knight text-coast-cream py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-10 flex flex-col items-center justify-center text-center gap-4">
                <p className="text-sm font-medium opacity-90">
                    Artefact généré par <span className="font-bold text-pizazz">Memoways</span> en novembre 2025
                </p>
                <span className="text-autumn-landscape text-xl">•</span>
                <p className="text-sm font-medium opacity-90">
                    Le monde évolue vite, de nouvelles possibilités seront disponibles en ce moment même !
                </p>
            </div>
        </footer>
    );
};

export default Footer;
