import React from 'react';
import LogoDanielle from './LogoDanielle';
import { VISTAHAVEN_DATA } from '@/data/propertyData';

/**
 * LogoEduarda - Adaptador compatível para o novo logotipo vetorial/CSS de Danielle Galdino.
 * Mantém total retrocompatibilidade com todas as chamadas existentes na aplicação.
 */
export default function LogoEduarda({
  className = "",
  variant = "light",
  size,
  subtitle,
  name = VISTAHAVEN_DATA.brand.name,
  role = "CORRETORA DE IMÓVEIS",
  creci,
<<<<<<< Updated upstream
  showCreci = true,
=======
>>>>>>> Stashed changes
  align = "center",
  renderMode = "svg",
  onClick
}) {
  // Ajuste automático de tamanho conforme o contexto se não for especificado
  const computedSize = size || (variant === "dark" ? "sm" : "md");
  const computedCreci = creci || subtitle || VISTAHAVEN_DATA.brand.creci;

  return (
    <LogoDanielle
      className={className}
      variant={variant}
      size={computedSize}
      name={name}
      role={role}
      creci={computedCreci}
<<<<<<< Updated upstream
      showCreci={showCreci}
=======
>>>>>>> Stashed changes
      align={align}
      renderMode={renderMode}
      onClick={onClick}
    />
  );
}

export { LogoDanielle };
