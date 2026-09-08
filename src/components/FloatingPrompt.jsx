import React from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FloatingPrompt({
  text = "Mova o cursor ou clique para explorar",
  className = "",
  icon: Icon = Sparkles
}) {
  return (
    <div className={cn("absolute bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none animate-fadeIn", className)}>
      <div className="bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-6 py-3 rounded-full shadow-2xl flex items-center gap-2.5 animate-bounceSlow">
        <Icon size={15} className="text-purple-400 animate-spin" />
        <span>{text}</span>
      </div>
    </div>
  );
}
