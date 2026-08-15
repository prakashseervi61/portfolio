// ponytail: vertical email rail, reference StickyEmail
const StickyEmail = () => {
  const email = 'prakashseervi1503@gmail.com';

  return (
    <div className="max-xl:hidden fixed bottom-32 left-0 z-40">
      <a
        href={`mailto:${email}`}
        className="px-3 text-muted tracking-[1px] hover:text-fg transition-colors"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        {email}
      </a>
    </div>
  );
};

export default StickyEmail;
