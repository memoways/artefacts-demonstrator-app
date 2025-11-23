import KPICards from '../components/theater/KPICards';
import Timeline from '../components/theater/Timeline';
import BudgetChart from '../components/theater/BudgetChart';
import AIAnalysis from '../components/theater/AIAnalysis';
import Attachments from '../components/theater/Attachments';
import { Check, FileDown } from 'lucide-react';

const TheaterDemo = () => {
    return (
        <div className="max-w-6xl mx-auto pb-10">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <span className="bg-gradient-to-r from-autumn-landscape to-pizazz text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">
                        Culture
                    </span>
                    <h1 className="font-headings text-3xl font-bold text-dark-knight mt-3">
                        Dossier Subvention Ville 2025
                    </h1>
                </div>
                <div className="flex gap-3">
                    <button className="px-6 py-3 bg-white border-2 border-whale-skin text-whale-skin rounded-lg font-bold hover:bg-whale-skin hover:text-white transition-colors flex items-center gap-2">
                        <FileDown size={18} />
                        Exporter PDF
                    </button>
                    <button className="px-6 py-3 bg-gradient-to-r from-autumn-landscape to-pizazz text-white rounded-lg font-bold shadow-lg shadow-autumn-landscape/20 hover:-translate-y-0.5 transition-all flex items-center gap-2">
                        <Check size={18} />
                        Valider & Envoyer
                    </button>
                </div>
            </div>

            {/* KPI Cards */}
            <KPICards />

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
                {/* Timeline - 4 cols */}
                <div className="lg:col-span-4">
                    <Timeline />
                </div>

                {/* Center Column - Budget & AI - 8 cols */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                        <BudgetChart />
                        <AIAnalysis />
                    </div>
                </div>
            </div>

            {/* Attachments */}
            <Attachments />
        </div>
    );
};

export default TheaterDemo;
