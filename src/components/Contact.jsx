import SectionTitle from './SectionTitle';
import { GENERAL_INFO } from '../lib/data';
import { MoveUpRight, Download, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const CONTACT_LINKS = [
  { label: 'GitHub', url: 'https://github.com/prakashseervi61' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/prakashv-dev/' },
  { label: 'LeetCode', url: 'https://leetcode.com/u/r5rxBOU1qw/' },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(GENERAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 pb-24" id="contact">
      <div className="container">
        <SectionTitle title="Contact" className="mb-16" />

        <h2 className="text-4xl md:text-6xl font-anton leading-snug max-w-[700px] uppercase tracking-wider">
          Let&apos;s build something together.
        </h2>

        <p className="mt-4 text-lg text-muted-foreground max-w-[500px]">
          I&apos;m currently open to internship opportunities and
          collaborations. Feel free to reach out!
        </p>

        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-2 mt-10 mb-14 font-anton leading-none text-3xl sm:text-5xl md:text-6xl break-all hover:text-accent transition-colors group"
        >
          {GENERAL_INFO.email}
          {copied ? (
            <Check size={6} className="text-accent" />
          ) : (
            <Copy size={6} className="text-muted-foreground group-hover:text-accent transition-colors" />
          )}
        </button>

        {copied && (
          <div className="mt-2 text-xs text-accent animate-pulse">
            Copied!
          </div>
        )}

        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-lg text-white hover:text-accent transition-colors"
            >
              {link.label}
              <MoveUpRight
                size={15}
                className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          ))}

          <a
            href={GENERAL_INFO.resume}
            download="Prakash-Resume.pdf"
            className="group inline-flex items-center gap-2 text-lg text-white hover:text-accent transition-colors"
          >
            Resume
            <Download
              size={15}
              className="text-primary transition-transform group-hover:translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
