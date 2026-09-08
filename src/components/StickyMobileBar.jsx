import React from 'react';
import { MessageSquare, Calendar, Sparkles } from 'lucide-react';

export default function StickyMobileBar({ property, onRequestFormModal }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-xl border-t border-amber-500/30 p-3 shadow-2xl flex items-center gap-2">
      <button
        onClick={onRequestFormModal}
        className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 active:scale-95 text-slate-950 font-extrabold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 cursor-pointer"
      >
        <MessageSquare size={16} />
        Falar no WhatsApp
      </button>

      <button
        onClick={onRequestFormModal}
        className="flex-1 bg-amber-500 active:scale-95 text-slate-950 font-extrabold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer"
      >
        <Calendar size={16} />
        Agendar Visita
      </button>
    </div>
  );
}
