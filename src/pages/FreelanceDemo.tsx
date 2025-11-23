import Stepper from '../components/freelance/Stepper';
import ProfileCards from '../components/freelance/ProfileCards';
import ProjectForm from '../components/freelance/ProjectForm';
import AIArgumentaire from '../components/freelance/AIArgumentaire';
import { FileDown } from 'lucide-react';

const FreelanceDemo = () => {
    return (
        <div className="max-w-6xl mx-auto pb-10">
            <Stepper />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column - Profile - 3 cols */}
                <div className="lg:col-span-3">
                    <ProfileCards />
                </div>

                {/* Middle Column - Form - 5 cols */}
                <div className="lg:col-span-5">
                    <ProjectForm />
                </div>

                {/* Right Column - AI - 4 cols */}
                <div className="lg:col-span-4">
                    <AIArgumentaire />
                </div>
            </div>

            <div className="mt-12 text-center bg-white p-10 rounded-xl shadow-sm">
                <button className="px-8 py-4 bg-gradient-to-r from-autumn-landscape to-pizazz text-white rounded-xl font-bold font-headings text-xl shadow-lg shadow-autumn-landscape/20 hover:-translate-y-1 transition-all flex items-center gap-3 mx-auto">
                    <FileDown size={24} />
                    Générer le dossier PDF complet
                </button>
                <p className="mt-4 text-skyline text-sm max-w-xl mx-auto">
                    Le PDF généré sera la version officielle archivable de votre dossier.
                    Cette interface est votre atelier de préparation collaboratif.
                </p>
            </div>
        </div>
    );
};

export default FreelanceDemo;
