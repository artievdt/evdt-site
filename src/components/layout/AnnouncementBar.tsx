import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface AnnouncementBarProps {
  onOpenConsultation: () => void;
  onNavigate: (path: string) => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenConsultation }) => {
  return (
    <div id="announcement-bar" className="bg-gradient-to-r from-blue-50 via-indigo-50 to-sky-50 border-b border-blue-200/70 text-xs py-2 px-4 text-center relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-wrap text-slate-700">
        <span className="inline-flex items-center gap-1.5 bg-blue-100/80 text-blue-700 border border-blue-300/60 px-2.5 py-0.5 rounded-full font-bold text-[11px] shadow-2xs">
          <Sparkles className="w-3 h-3 text-blue-600 animate-pulse" />
          10+ Years of Engineering Excellence
        </span>
        <span className="text-slate-600 hidden md:inline font-medium">
          Accelerate your software roadmap with verified enterprise architects and battle-tested product accelerators.
        </span>
        <button
          onClick={onOpenConsultation}
          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-bold transition-colors underline-offset-4 hover:underline cursor-pointer ml-1"
        >
          <span>Schedule Discovery Call</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
