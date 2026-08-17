import { motion, useReducedMotion } from 'framer-motion';

/**
 * Subtle fade-up reveal when the element scrolls into view.
 * Respects prefers-reduced-motion — no transform/animation is applied.
 */
export default function RevealAnimation({ children, delay = 0, className = '' }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
