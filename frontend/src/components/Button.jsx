import { Link } from 'react-router-dom';

/**
 * Reusable action button.
 * - `to`    → renders a react-router <Link> (in-app navigation)
 * - `href`  → renders an <a> (external / anchor links)
 * - default → renders a <button>
 * Variants are tuned for both light and dark sections.
 */
export default function Button({
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide whitespace-nowrap transition-all duration-300 select-none cursor-pointer';

  const variants = {
    primary:
      'bg-gold text-cream shadow-lg shadow-gold/25 hover:bg-gold-soft hover:text-charcoal hover:-translate-y-0.5',
    goldOutline:
      'border-2 border-gold text-gold hover:bg-gold hover:text-cream hover:-translate-y-0.5',
    light: 'bg-cream text-charcoal hover:bg-white hover:-translate-y-0.5',
    ghostLight:
      'border-2 border-cream/35 text-cream hover:border-cream hover:bg-cream/10 hover:-translate-y-0.5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm sm:text-base',
    lg: 'px-8 py-3.5 text-base',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
}
