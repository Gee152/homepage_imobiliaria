import React, { useState } from 'react';
import { Layers, Sparkles, CheckCircle, Eye, ArrowUpRight, Compass, Shield, Maximize2 } from 'lucide-react';

export default function PropertyShowcase({ property, onRequestFormModal }) {
  const [activeTab, setActiveTab] = useState('gallery'); // 'gallery' | 'floorplans'
  const [activeImage, setActiveImage] = useState(property.images.facade);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
          <div>
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block mb-2">
              Infraestrutura & Projetos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-heading">
              Conheça Cada Detalhe do <span className="text-amber-400">{property.name}</span>
            </h2>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${activeTab === 'gallery' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
            >
              <Eye size={14} /> Galeria de Imagens
            </button>
            <button
              onClick={() => setActiveTab('floorplans')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${activeTab === 'floorplans' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
            >
              <Layers size={14} /> Plantas Humanizadas
            </button>
          </div>
        </div>

        {/* Tab Content: Gallery vs Floorplans */}
        {activeTab === 'gallery' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Main Featured Image Display */}
            <div className="lg:col-span-8 relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
              <img
                src={activeImage || property.images.facade}
                alt="Detalhes do Imóvel"
                className="w-full h-[400px] sm:h-[500px] object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-200 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700">
                  Residencial de Alta Performance
                </span>
                <button
                  onClick={onRequestFormModal}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 shadow-lg cursor-pointer"
                >
                  <Maximize2 size={14} /> Receber Catálogo em Alta Definição
                </button>
              </div>
            </div>

            {/* Thumbnail Selectors */}
            <div className="lg:col-span-4 space-y-4">
              <h3 className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                Selecione os Ambientes:
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                {[
                  { label: "Fachada & Arquitetura", img: property.images.facade },
                  { label: "Living / Sala Integrada", img: property.images.living },
                  { label: "Área de Lazer & Piscina", img: property.images.pool },
                  { label: "Varanda & Suíte Master", img: property.images.balcony || property.images.hero }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(item.img)}
                    className={`flex items-center gap-3 p-2.5 rounded-xl border text-left transition-all cursor-pointer ${activeImage === item.img ? 'bg-amber-500/10 border-amber-500 text-amber-300' : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'}`}
                  >
                    <img src={item.img} alt={item.label} className="w-14 h-12 rounded-lg object-cover" />
                    <div>
                      <span className="text-xs font-bold block">{item.label}</span>
                      <span className="text-[10px] text-slate-400">Clique para ampliar</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>
        ) : (
          /* Floor Plans View */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {property.floorPlans.map((plan, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-amber-500/40 transition-all shadow-xl">
                <div className="relative rounded-xl overflow-hidden border border-slate-800 h-64">
                  <img src={plan.img} alt={plan.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 font-extrabold text-xs px-3 py-1 rounded-full">
                    Opção de Planta {idx + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100 font-heading">{plan.title}</h3>
                  <p className="text-xs text-slate-400 mt-1">{plan.desc}</p>
                </div>
                <button
                  onClick={onRequestFormModal}
                  className="w-full bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 font-bold py-3 rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Solicitar PDF das Plantas Detalhadas
                  <ArrowUpRight size={16} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Differentiators & Features Grid */}
        <div className="pt-8 border-t border-slate-900">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-slate-100 font-heading">
              Diferenciais Construtivos & Lazer Exclusivo
            </h3>
            <p className="text-xs text-slate-400 mt-2">
              Projeto idealizado para garantir máxima valorização patrimonial e bem-estar para sua família.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {property.features.map((feat, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl hover:border-slate-700 transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                  <CheckCircle size={20} />
                </div>
                <h4 className="text-base font-bold text-slate-200 font-heading">{feat.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
