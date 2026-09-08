/**
 * Utilitário de combinação de classes Tailwind (compatível com shadcn/ui)
 */
export function cn(...inputs) {
  return inputs
    .flat()
    .filter(Boolean)
    .join(' ');
}
