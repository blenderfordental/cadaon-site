import React from "react";
import cadaonLogo from "./assets/cadaon-logo-827.png";
import cadaonWallpaper from "./assets/cadaon-wallpaper-3200.png";
import cadaonLoop from "./assets/cadaon-loop.mp4";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy via-navy-royal to-black text-slate-100">
      {/* Top navigation / logo bar */}
      <header className="border-b border-slate-800/60 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            {/* Avatar logo */}
            <img
  src={cadaonLogo}
  alt="CADAON"
  className="h-9 w-9 rounded-md bg-slate-900/60 p-0.5 shadow-md shadow-black/60 object-contain"
/>


            <div className="leading-tight">
              <div className="text-lg font-semibold tracking-[0.18em] uppercase">
                CADAON
              </div>
              <div className="text-[0.72rem] text-slate-400">
                Digital Dental Education Center
              </div>
            </div>
          </div>

          <nav className="hidden gap-6 text-xs md:flex">
            <span className="text-slate-400">Digital Dentistry</span>
            <span className="text-slate-400">Dental CAD</span>
            <span className="text-slate-400">Education</span>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-10 md:px-6 md:py-16">
        {/* Hero section */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
          {/* Left: text */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent-gold">
              EAON has evolved · Meet CADAON
            </p>

            <h1 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              EAON has evolved.{" "}
              <span className="bg-gradient-to-r from-accent-gold via-amber-300 to-accent-redhot bg-clip-text text-transparent">
                Meet CADAON.
              </span>
            </h1>

            <p className="mb-3 max-w-xl text-sm text-slate-300 md:text-base">
              We&apos;ve expanded beyond one tool to power your entire digital
              dentistry workflow.
            </p>

            <p className="mb-4 max-w-xl text-sm text-slate-300 md:text-base">
              CADAON is an educational initiative dedicated to advancing skills
              and knowledge in digital dentistry, with a strong focus on dental
              CAD design, modern digital workflows, and evidence-based
              practices.
            </p>

            <p className="mb-4 max-w-xl text-sm text-slate-300 md:text-base">
              Our mission is to create high-quality digital dentistry training
              videos and lectures for colleagues across a wide range of clinical
              and laboratory specialties.
            </p>

            <p className="mb-4 max-w-xl text-sm text-slate-300 md:text-base">
              CADAON moves beyond dependence on a single CAD system. While
              Exocad (a trademark of Exocad GmbH and Align Technology, Inc.) has
              long been a major digital dentistry tool, we expand into a broader
              ecosystem of digital solutions, starting with Blenderfordental and
              continuing into open and hybrid workflows — especially for large,
              complex implant-supported prosthetics.
            </p>

            <p className="mb-5 text-sm font-medium tracking-[0.22em] text-slate-300 uppercase">
              Research. Analyse. Develop. Implement.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:heron@labworks.lt?subject=CADAON%20Contact"
                className="inline-flex items-center justify-center rounded-xl border border-accent-gold/80 bg-gradient-to-r from-accent-gold to-accent-redhot px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-accent-redhot/40 transition hover:brightness-110"
              >
                Contact CADAON
              </a>
              <a
                href="https://www.youtube.com/@cadaon"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-slate-600/80 px-5 py-2 text-sm font-medium text-slate-100/90 hover:border-slate-300/80 hover:text-white"
              >
                Visit YouTube channel
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              Full platform with structured courses, live sessions, and
              members&apos; area is in development.
            </p>
          </div>

          {/* Right: visual (wallpaper + focus areas) */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-900/60 shadow-xl shadow-black/70">
              <div className="relative">
                {/* Hero wallpaper */}
                <img
                  src={cadaonWallpaper}
                  alt="CADAON mountains wallpaper"
                  className="h-56 w-full object-cover md:h-64"
                />

                {/* Overlay text */}
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/10 to-transparent p-4">
                  <div className="text-sm font-semibold tracking-[0.18em] text-slate-100/90 uppercase">
                    CADAON
                  </div>
                  <div className="text-xs text-slate-200/90">
                    CAD Competence. Clinical Confidence.
                  </div>
                </div>
              </div>

              {/* Card body under image */}
              <div className="space-y-3 border-t border-slate-800/80 bg-slate-950/80 px-4 py-4 text-xs text-slate-300 md:px-5 md:py-5">
                <div className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-400">
                  Focus Areas
                </div>
                <ul className="space-y-1 text-sm">
                  <li>
                    • Digital workflows for implant-supported full-arch and
                    segmental prosthetics
                  </li>
                  <li>
                    • Dental CAD design training in Exocad and Blenderfordental
                  </li>
                  <li>
                    • Evidence-based evaluation of digital workflows and open /
                    hybrid systems
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Video + social links section */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start">
          {/* Video */}
          <div>
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
              Intro loop
            </h2>
            <p className="mb-3 text-xs text-slate-400">
              Short ambient intro clip for conferences, lectures, and course
              openers.
            </p>

            <div className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 shadow-md shadow-black/70">
              <video
                src={cadaonLoop}
                className="h-52 w-full object-cover md:h-64"
                autoPlay
                loop
                muted
                playsInline
                controls
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Social / links */}
          <div>
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
              Follow CADAON
            </h2>
            <p className="mb-4 text-xs text-slate-400">
              Stay informed about new lectures, livestreams, and project
              updates.
            </p>

            <div className="space-y-3 text-sm">
              <LinkRow
                label="Patreon"
                href="https://www.patreon.com/cadaon"
                desc="Early-access content, behind-the-scenes materials - main platform."
              />
              <LinkRow
                label="Contribee"
                href="https://www.contribee.com/cadaon"
                desc="Alternative platform in Baltic region."
              />
              <LinkRow
                label="YouTube"
                href="https://www.youtube.com/@cadaon"
                desc="Free educational videos, previews, and lecture excerpts."
              />
              <LinkRow
                label="Facebook"
                href="https://www.facebook.com/CadaonOfficial"
                desc="Announcements, events, and community updates."
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-black/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:px-6">
          <div>
            <div>CADAON — Digital Dental Education Center</div>
            <div className="text-[0.7rem]">
              For professional enquiries:{" "}
              <a
                href="mailto:heron@labworks.lt"
                className="underline decoration-slate-600 hover:decoration-accent-gold"
              >
                heron@labworks.lt
              </a>
            </div>
          </div>
          <div className="text-[0.7rem] text-slate-500">
            CAD Competence. Clinical Confidence. · Dental Excellence Forged in
            Digital Precision. · Supreme Digital Dentistry Skills.
          </div>
        </div>
      </footer>
    </div>
  );
};

const LinkRow = ({ label, href, desc }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group block rounded-2xl border border-slate-800/80 bg-slate-950/60 px-4 py-3 transition hover:border-accent-gold/70 hover:bg-slate-900/80"
  >
    <div className="flex items-center justify-between gap-3">
      <div className="text-sm font-semibold text-slate-100">{label}</div>
      <div className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-400 group-hover:text-accent-gold">
        Open
      </div>
    </div>
    <div className="mt-1 text-xs text-slate-300">{desc}</div>
    <div className="mt-1 text-[0.65rem] text-slate-500">{href}</div>
  </a>
);

export default App;
