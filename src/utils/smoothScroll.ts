function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export function scrollToHash(hash: string, duration = 700) {
  const target = document.querySelector(hash)
  if (!(target instanceof HTMLElement)) return

  const startY = window.scrollY
  const targetY = target.getBoundingClientRect().top + startY
  const distance = targetY - startY

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion || distance === 0) {
    window.scrollTo(0, targetY)
    return
  }

  const startTime = performance.now()

  function step(now: number) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    window.scrollTo(0, startY + distance * easeInOutCubic(progress))

    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}
