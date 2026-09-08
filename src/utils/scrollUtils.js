/**
 * Utilitário de rolagem suave e lenta (Slow Smooth Scroll)
 * Utiliza interpolação cúbica (easeInOutCubic) para garantir uma descida
 * cinematográfica, suave e agradável aos olhos do usuário.
 */
export function slowScrollTo(target, duration = 1000, offset = 80) {
  let targetElement = null;

  if (typeof target === 'string') {
    const selector = target.startsWith('#') ? target : `#${target}`;
    targetElement = document.querySelector(selector);
  } else if (target instanceof HTMLElement) {
    targetElement = target;
  }

  if (!targetElement && target !== 0 && target !== 'top') return;

  const startPosition = window.pageYOffset || document.documentElement.scrollTop;
  let targetPosition = 0;

  if (target === 0 || target === 'top') {
    targetPosition = 0;
  } else if (targetElement) {
    const elementRect = targetElement.getBoundingClientRect();
    targetPosition = elementRect.top + startPosition - offset;
  }

  const distance = targetPosition - startPosition;
  if (Math.abs(distance) < 5) return;

  let startTime = null;

  // Curva de desaceleração gradual suave (easeInOutCubic)
  function easeInOutCubic(t) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easeProgress = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * easeProgress);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}
