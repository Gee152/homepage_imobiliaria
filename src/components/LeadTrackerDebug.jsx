import React, { useState } from 'react';
import { Activity, CheckCircle, Code, Eye, X, Terminal, Copy } from 'lucide-react';

export default function LeadTrackerDebug({ lastLead }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyPayload = () => {
    if (!lastLead) return;
    navigator.clipboard.writeText(JSON.stringify(lastLead, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-slate-900/90 hover:bg-slate-900 border border-amber-500/40 text-amber-400 font-bold text-xs px-3.5 py-2 rounded-full shadow-2xl backdrop-blur-md flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
        >
          <Activity size={14} className="animate-pulse text-emerald-400" />
          <span>Tracking & CRM Debugger</span>
          {lastLead && (
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          )}
        </button>
      ) : (
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 shadow-2xl w-80 sm:w-96 text-xs space-y-4 backdrop-blur-xl relative">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2 font-bold text-slate-100 font-heading">
              <Terminal size={16} className="text-amber-400" />
              <span>Painel de Eventos & Webhook CRM</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-200 p-1 cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>

          {/* Tracking Pixels Status */}
          <div className="space-y-2">
            <span className="text-[11px] text-slate-400 uppercase font-bold block">Status dos Pixels</span>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 flex items-center justify-between text-slate-300">
                <span>Facebook Pixel</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle size={12} /> Ativo
                </span>
              </div>
              <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 flex items-center justify-between text-slate-300">
                <span>Google Tag</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle size={12} /> Ativo
                </span>
              </div>
            </div>
          </div>

          {/* Last Lead JSON Payload */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-slate-400 uppercase font-bold">Último Lead Capturado</span>
              {lastLead && (
                <button
                  onClick={copyPayload}
                  className="text-amber-400 hover:text-amber-300 text-[10px] font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <Copy size={12} /> {copied ? 'Copiado!' : 'Copiar JSON'}
                </button>
              )}
            </div>

            {lastLead ? (
              <pre className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-[11px] text-emerald-300 overflow-x-auto max-h-40 font-mono leading-tight">
                {JSON.stringify(lastLead, null, 2)}
              </pre>
            ) : (
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 text-center text-slate-500 italic">
                Nenhum formulário enviado ainda nesta sessão. Teste preenchendo o formulário!
              </div>
            )}
          </div>

          <div className="pt-2 text-[10px] text-slate-400 border-t border-slate-900 text-center">
            Pronto para integração via Webhook POST com RD Station, Kommo ou Zapier.
          </div>
        </div>
      )}
    </div>
  );
}
