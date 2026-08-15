const Footer = () => {
  return (
    <footer className="text-center pb-8" id="contact-footer">
      <div className="container max-w-[1148px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-lg">Have a project in mind?</p>
        <a
          href="mailto:prakashseervi1503@gmail.com"
          className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:text-accent transition-colors"
        >
          prakashseervi1503@gmail.com
        </a>

        <div>
          <a
            href="https://github.com/prakashseervi61/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="leading-none text-muted hover:text-fg transition-colors"
          >
            Design &amp; built by Prakash V
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
