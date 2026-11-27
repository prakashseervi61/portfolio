import SectionTitle from './SectionTitle';
import { MY_STACK } from '../lib/data';

export default function Skills() {
  return (
    <section className="py-16" id="my-stack">
      <div className="container">
        <SectionTitle title="My Stack" />

        <div className="space-y-20">
          {Object.entries(MY_STACK).map(([key, value]) => (
            <div className="grid sm:grid-cols-12" key={key}>
              <div className="sm:col-span-5">
                <p className="text-5xl font-anton leading-none text-muted-foreground uppercase mb-4">
                  {key}
                </p>
              </div>

              <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
                {value.map((item) => (
                  <div className="flex gap-3.5 items-center leading-none" key={item.name}>
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-background-light border border-border">
                      <img
                        src={item.icon}
                        alt=""
                        width="26"
                        height="26"
                        className="max-h-6 w-auto"
                      />
                    </div>
                    <span className="text-2xl">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
