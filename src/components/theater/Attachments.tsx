import { FileText, FileSpreadsheet, Download } from 'lucide-react';

const Attachments = () => {
    const attachments = [
        { filename: "Budget_Detaille.xlsx", size: "124 KB", icon: FileSpreadsheet, color: "text-green-600" },
        { filename: "Calendrier_Saison.pdf", size: "89 KB", icon: FileText, color: "text-red-500" },
        { filename: "CVs_Equipe.pdf", size: "256 KB", icon: FileText, color: "text-red-500" },
        { filename: "Lettre_Intention.docx", size: "45 KB", icon: FileText, color: "text-blue-500" }
    ];

    return (
        <div className="mt-8">
            <h3 className="font-headings text-xl font-bold text-dark-knight mb-6">Pièces jointes générées</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {attachments.map((file, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-desert-field/50 flex items-center justify-between hover:shadow-md transition-shadow group">
                        <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-lg bg-coast-cream/50 flex items-center justify-center ${file.color}`}>
                                <file.icon size={20} />
                            </div>
                            <div>
                                <div className="font-bold text-dark-knight text-sm truncate max-w-[120px]" title={file.filename}>
                                    {file.filename}
                                </div>
                                <div className="text-xs text-skyline">{file.size}</div>
                            </div>
                        </div>
                        <button className="text-skyline hover:text-whale-skin p-2 rounded-full hover:bg-coast-cream transition-colors">
                            <Download size={18} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Attachments;
