import RevealAnimation from '../components/RevealAnimation';
import SectionHeading from '../components/SectionHeading';
import { useLanguage } from '../context/LanguageContext';
import { site } from '../data/site';

/**
 * Leadership — preacher and assistant preacher.
 */
export default function Leadership() {
  const { t } = useLanguage();

  const members = [
    {
      id: 'preacher',
      name: t.leadership.preacher.name,
      role: t.leadership.preacher.role,
      image: site.images.pastor,
      placeholder: false,
    },
    {
      id: 'assistant',
      name: t.leadership.assistantPreacher.name,
      role: t.leadership.assistantPreacher.role,
      image: site.images.assistantPastor,
      placeholder: true,
    },
  ];

  return (
    <section id="leadership" className="scroll-mt-24 bg-cream-deep py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealAnimation>
          <SectionHeading
            eyebrow={t.leadership.eyebrow}
            title={t.leadership.heading}
            sub={t.leadership.sub}
            align="center"
          />
        </RevealAnimation>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {members.map((member, i) => (
            <RevealAnimation key={member.id} delay={i * 0.12}>
              <article className="group flex flex-col items-center gap-5 rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-charcoal/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-charcoal/10">
                <div className="relative">
                  <span
                    className="absolute -inset-2 rounded-full border-2 border-gold/40 transition-transform duration-500 group-hover:scale-105"
                    aria-hidden="true"
                  />
                  <div className="h-28 w-28 overflow-hidden rounded-full sm:h-32 sm:w-32">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-charcoal">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-bold uppercase tracking-[0.18em] text-gold">
                    {member.role}
                  </p>
                </div>
              </article>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
