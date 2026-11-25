import { CERTIFICATIONS, GENERAL_INFO } from '../lib/data';

export default function AboutMe() {
  return (
    <section className="py-16" id="about-me">
      <div className="container">
        <h2 className="text-4xl md:text-6xl font-anton mb-20 uppercase tracking-wider">
          I build clean, reliable software — no tutorial clones.
        </h2>

        <p className="pb-3 border-b text-muted-foreground">
          This is me.
        </p>

        <div className="grid md:grid-cols-12 mt-9">
          <div className="md:col-span-5">
            <p className="mt-4 text-muted-foreground">
              {GENERAL_INFO.location}
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="text-lg text-muted-foreground max-w-[520px]">
              <p>
                {GENERAL_INFO.summary}
              </p>
              <p className="mt-3">
                Everything here is something I built end to end — from
                database schema to frontend UI. I care about readable
                code, automated tests and shipping things that actually
                work.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <p className="text-muted text-sm uppercase tracking-wider mb-4">
            Certifications
          </p>
          <ul className="space-y-2">
            {CERTIFICATIONS.map((certification) => (
              <li key={certification} className="text-muted-foreground">
                {certification}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
