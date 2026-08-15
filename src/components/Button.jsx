// ponytail: single Button handles both <a> and <button>, white sweep hover from reference
const Spinner = () => (
  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
  </svg>
);

const Button = ({ as = 'a', href, onClick, loading, className, children, ...rest }) => {
  const cls = `group relative overflow-hidden h-12 px-8 inline-flex justify-center items-center gap-2 text-lg uppercase font-anton tracking-widest bg-accent text-black hover:bg-accent/90 transition-colors ${className || ''}`;

  const inner = (
    <>
      <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150" />
      <span className="relative z-[1] flex items-center gap-2">
        {loading && <Spinner />}
        {children}
      </span>
    </>
  );

  if (as === 'button') {
    return (
      <button className={cls} onClick={onClick} {...rest}>
        {inner}
      </button>
    );
  }

  return (
    <a className={cls} href={href} onClick={onClick} {...rest}>
      {inner}
    </a>
  );
};

export default Button;
