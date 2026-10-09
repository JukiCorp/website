import EarlyAccess from "../components/EarlyAccess";

const build = [
  { title: "Mobile Apps", text: "Everyday apps with AI built into the core experience, designed for iOS and Android from day one.",
    icon: "M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm5 17h.01" },
  { title: "SaaS Products", text: "Focused B2B tools that help small and mid-sized teams automate repetitive work and see their data clearly.",
    icon: "M4 6h16M4 12h16M4 18h10" },
  { title: "Games", text: "Casual and mid-core mobile games with tight controls, fair monetization and room to grow after launch.",
    icon: "M6 12h4m-2-2v4m7-1h.01m2-2h.01M7 7h10a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4h-1l-2-2h-4l-2 2H7a4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4z" },
];

const focus = [
  { title: "Useful AI, not AI for show", text: "We add AI where it saves people time or removes friction, and keep it out where it doesn't." },
  { title: "Quality over speed to market", text: "Small scope, careful testing and steady iteration. We would rather ship fewer things that work well." },
  { title: "Experience first", text: "Clear interfaces, fast load times and sensible defaults. If a feature needs a manual, we redesign it." },
];

const roadmap = [
  { name: "Juki Assist", type: "AI mobile app", status: "In development", when: "Targeting early 2027",
    text: "A personal assistant app that turns notes, messages and reminders into a simple daily plan." },
  { name: "Juki Flow", type: "B2B SaaS", status: "Prototyping", when: "Private beta planned for 2027",
    text: "A workflow tool for small teams to automate recurring tasks and approvals without writing code." },
  { name: "Untitled puzzle-action game", type: "Mobile game", status: "Concept", when: "Playable prototype in progress",
    text: "A casual game with short sessions and a light competitive layer. Name and details to be announced." },
];

const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
);

const Social = ({ href, label, d }) => (
  <a href={href} aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-zinc-400 transition hover:border-brand hover:text-white">
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d={d} /></svg>
  </a>
);

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-line/60 bg-ink/80 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2 font-semibold text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-blue text-sm font-bold">J</span>
            Juki Corp
          </a>
          <div className="hidden gap-8 text-sm text-zinc-400 md:flex">
            <a className="hover:text-white" href="#build">What we build</a>
            <a className="hover:text-white" href="#focus">Our focus</a>
            <a className="hover:text-white" href="#roadmap">Roadmap</a>
            <a className="hover:text-white" href="#about">About</a>
          </div>
          <a href="#early-access" className="rounded-lg border border-line px-4 py-2 text-sm text-white transition hover:border-brand">Early access</a>
        </nav>
      </header>

      <main id="top">
        <section id="early-access" className="relative overflow-hidden">
          <div className="glow-a pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[44rem] -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
          <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-brand-blue/20 blur-[110px]" />
          <div className="relative mx-auto max-w-4xl px-6 pb-28 pt-24 text-center sm:pt-32">
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl">
              Software people actually enjoy using.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
              Juki Corp builds AI-powered mobile apps, B2B SaaS tools and mobile games. We are an early-stage team shipping carefully, one product at a time.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3">
              <EarlyAccess />
              <p className="text-xs text-zinc-500">Early access invitations go out as products open. No spam.</p>
            </div>
          </div>
        </section>

        <section id="build" className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-3xl font-semibold tracking-tight text-white">What we build</h2>
          <p className="mt-3 max-w-xl text-zinc-400">Three product lines, one standard: simple to use and dependable.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {build.map((b) => (
              <article key={b.title} className="rounded-3xl border border-line bg-panel p-8 shadow-soft transition hover:border-brand/60">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/15 text-brand-soft"><Icon d={b.icon} /></div>
                <h3 className="mt-6 text-xl font-semibold text-white">{b.title}</h3>
                <p className="mt-3 leading-relaxed text-zinc-400">{b.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="focus" className="border-y border-line/60 bg-panel/40">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white">Our focus</h2>
              <p className="mt-3 max-w-sm text-zinc-400">How we decide what to build, and how we build it.</p>
            </div>
            <div className="divide-y divide-line rounded-3xl border border-line bg-ink">
              {focus.map((f) => (
                <div key={f.title} className="p-8">
                  <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 leading-relaxed text-zinc-400">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="roadmap" className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-3xl font-semibold tracking-tight text-white">Coming soon</h2>
          <p className="mt-3 max-w-xl text-zinc-400">What we are working on right now. Timelines are targets and may change.</p>
          <ol className="mt-12 space-y-5 border-l border-line pl-8">
            {roadmap.map((r) => (
              <li key={r.name} className="relative rounded-2xl border border-line bg-panel p-6 shadow-soft">
                <span className="absolute -left-[41px] top-8 h-3 w-3 rounded-full bg-brand ring-4 ring-ink" />
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="text-lg font-semibold text-white">{r.name}</h3>
                  <span className="rounded-full bg-brand/15 px-3 py-1 text-xs text-brand-soft">{r.status}</span>
                  <span className="text-sm text-zinc-500">{r.type}, {r.when}</span>
                </div>
                <p className="mt-3 max-w-2xl text-zinc-400">{r.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="about" className="mx-auto max-w-3xl px-6 pb-28 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white">About Juki Corp</h2>
          <p className="mt-6 leading-relaxed text-zinc-400">
            Juki Corp is a small software company building across mobile, SaaS and games. We are early, and we are building in the open with the people who will use our products. If you want to follow along, test something early, or just talk shop, we would like to hear from you.
          </p>
          <a href="mailto:hello@jukicorp.com" className="mt-8 inline-block rounded-xl border border-line px-6 py-3 text-sm text-white transition hover:border-brand">Contact us</a>
        </section>
      </main>

      <footer className="border-t border-line/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-white">Juki Corp</p>
            <a href="mailto:hello@jukicorp.com" className="text-sm text-zinc-400 hover:text-white">hello@jukicorp.com</a>
            <p className="mt-2 text-xs text-zinc-600">&copy; {new Date().getFullYear()} Juki Corp. All rights reserved.</p>
          </div>
          <div className="flex gap-3">
            <Social href="https://x.com" label="X" d="M18.9 2H22l-7.3 8.3L23 22h-6.7l-5.2-6.8L5 22H2l7.8-8.9L1.5 2h6.9l4.7 6.2L18.9 2zm-1.2 18h1.7L7.2 3.9H5.4L17.7 20z" />
            <Social href="https://linkedin.com" label="LinkedIn" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3V9.5zm7 0h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.700V21h-4V9.5z" />
            <Social href="https://github.com" label="GitHub" d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.100 2.900.8.1-.7.4-1.100.6-1.400-2.200-.3-4.600-1.100-4.600-5 0-1.100.4-2 1-2.700-.1-.3-.4-1.300.1-2.700 0 0 .8-.3 2.800 1a9.600 9.600 0 0 1 5 0c2-1.300 2.800-1 2.800-1 .5 1.400.2 2.400.1 2.700.6.700 1 1.600 1 2.700 0 3.900-2.400 4.700-4.600 5 .4.300.7.900.7 1.800v2.700c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
          </div>
        </div>
      </footer>
    </>
  );
}
