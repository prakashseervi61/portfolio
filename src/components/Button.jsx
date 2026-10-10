// ponytail: single Button renders an <a>; the white sweep hover from reference

/*
 * The sweep colour is part of the variant (not an arbitrary child selector)
 * because an outline button needs a *subtle* sweep - a solid white ellipse
 * over light text makes the label disappear on hover.
 */
const VARIANTS = {
  primary: {
    root: 'bg-accent text-black hover:bg-accent/90',
    sweep: 'bg-white',
  },
  secondary: {
    root: 'bg-transparent text-fg border border-border hover:bg-bg-light hover:border-accent',
    sweep: 'bg-accent/15',
  },
};

const Button = ({
  href,
  download,
  target,
  rel,
  variant = 'primary',
  className,
  children,
  ...rest
}) => {
  const { root, sweep } = VARIANTS[variant] || VARIANTS.primary;

  const cls = `group relative overflow-hidden h-12 px-8 inline-flex justify-center items-center gap-2 text-lg uppercase font-anton tracking-widest transition-colors ${root} ${className || ''}`;

  return (
    <a className={cls} href={href} download={download} target={target} rel={rel} {...rest}>
      <span
        aria-hidden="true"
        className={`sweep pointer-events-none absolute top-[200%] left-0 right-0 h-full rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150 ${sweep}`}
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </a>
  );
};

export default Button;