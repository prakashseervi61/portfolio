import SectionTitle from './SectionTitle';
import { MY_EXPERIENCE } from '../lib/data';

export default function Experiences() {
  return (
    <section className="py-16" id="my-experience">
      <div className="container">
        <SectionTitle title="My Experience" />

        <div className="grid gap-14">
          {MY_EXPERIENCE.map((item) => (
            <div key={item.title} className="experience-item">
              <p className="text-xl text-muted-foreground">
                {item.company}
              </p>
              <p className="text-5xl font-anton leading-none mt-3.5 mb-2.5">
                {item.title}
              </p>
              <p className="text-lg text-muted-foreground">
                {item.duration}
              </p>
              {item.details && (
                <p className="mt-4 text-muted-foreground max-w-[640px]">
                  {item.details}
                </p>
              )}
              {item.bullets && (
                <ul className="mt-4 space-y-2 text-muted-foreground max-w-[640px]">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">▹</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
