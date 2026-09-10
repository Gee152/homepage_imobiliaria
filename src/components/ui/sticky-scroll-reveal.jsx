"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  header,
  content,
  contentClassName,
  className,
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  });
  const cardLength = content?.length || 1;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Divide o progresso de 0 a 1 em fatias iguais para cada card
    const targetIndex = Math.min(
      Math.floor(latest * cardLength),
      cardLength - 1
    );
    setActiveCard(targetIndex);
  });

  const backgroundColors = [
    "rgb(248 248 248)", // ice-white
    "rgb(255 255 255)", // white
    "rgb(243 244 246)", // gray-100
    "rgb(255 255 255)", // white
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, rgb(18, 44, 88), rgb(11, 28, 56))",
    "linear-gradient(to bottom right, rgb(199, 156, 63), rgb(181, 139, 50))",
    "linear-gradient(to bottom right, rgb(18, 44, 88), rgb(30, 58, 138))",
    "linear-gradient(to bottom right, rgb(111, 195, 75), rgb(22, 163, 74))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  if (!content || content.length === 0) return null;

  return (
    <motion.section
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className={cn(
        "w-full border-y border-slate-200/80 transition-colors duration-700 py-8 sm:py-12 lg:py-14 relative overflow-hidden",
        className
      )}
    >
      {/* Header e Métricas Centralizados no Topo */}
      {header && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
          <div className="w-full border-b border-slate-200/70 pb-6 sm:pb-8">
            {header}
          </div>
        </div>
      )}

      {/* Scroll Container de Largura Total (w-full): Joga a barra de rolagem para a lateral da tela */}
      <div
        ref={ref}
        className="w-full h-[38rem] sm:h-[42rem] xl:h-[46rem] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-300 hover:scrollbar-thumb-purple-500 pr-1 sm:pr-2"
      >
        <div className="max-w-[86rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-14 xl:gap-16">
          {/* Coluna de Conteúdo/Pilares Centralizada */}
          <div className="w-full lg:flex-1 max-w-xl">
            {content.map((item, index) => (
              <div
                key={item.title + index}
                className="my-8 sm:my-14 first:mt-2 last:mb-14 transition-all duration-300"
              >
                {/* Badge Numerado */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={cn(
                      "px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-wider transition-all duration-300",
                      activeCard === index
                        ? "bg-purple-600 text-white shadow-md shadow-purple-600/20"
                        : "bg-slate-200/70 text-slate-500"
                    )}
                  >
                    0{index + 1} • {item.badge || "Pilar Exclusivo"}
                  </span>
                </div>

                {/* Título do Pilar */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.35,
                    scale: activeCard === index ? 1.01 : 1,
                    x: activeCard === index ? 0 : -4,
                  }}
                  transition={{ duration: 0.35 }}
                  className={cn(
                    "text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading tracking-tight transition-colors duration-300",
                    activeCard === index ? "text-slate-900" : "text-slate-400"
                  )}
                >
                  {item.title}
                </motion.h3>

                {/* Descrição */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.35 }}
                  className="text-sm sm:text-base text-slate-600 mt-3 sm:mt-4 leading-relaxed font-normal"
                >
                  {item.description}
                </motion.p>

                {/* Mobile First: Exibição visual ampliada do card inline no celular/tablet */}
                <div className="block lg:hidden mt-6 rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl h-80 sm:h-[28rem] w-full">
                  {item.content}
                </div>
              </div>
            ))}
            {/* Respiro para scroll adequado: compacto no mobile (h-6) e proporcional no desktop (lg:h-64) */}
            <div className="h-6 sm:h-12 lg:h-64" />
          </div>

          {/* Desktop Only: Sticky Right Preview Panel Ampliado */}
          <div
            className={cn(
              "hidden lg:block h-[520px] xl:h-[600px] 2xl:h-[640px] w-[540px] xl:w-[700px] 2xl:w-[760px] rounded-[2.5rem] bg-white sticky top-6 overflow-hidden shadow-2xl border border-slate-200/90 transition-all duration-500 shrink-0",
              contentClassName
            )}
          >
            {content[activeCard]?.content ?? null}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default StickyScroll;
