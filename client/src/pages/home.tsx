import { useEffect, useState } from "react";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("why");
  const pageContainer = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";

  useEffect(() => {
    const sectionIds = ["why", "pillars", "different", "built", "invite"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target) {
          setActiveSection(visible[0].target.id);
        }
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/80 backdrop-blur">
        <div className={`${pageContainer} flex items-center justify-between py-3`}>
          <a href="/" className="flex items-center">
            <img src="/logo.png" alt="Event.OS" className="h-7 w-auto" />
          </a>
          <nav className="hidden items-center gap-5 text-sm text-gray-600 md:flex">
            <a
              className={`transition hover:text-gray-900 ${activeSection === "why" ? "text-gray-900" : ""}`}
              href="#why"
              onClick={handleNavClick}
            >
              Why
            </a>
            <a
              className={`transition hover:text-gray-900 ${activeSection === "pillars" ? "text-gray-900" : ""}`}
              href="#pillars"
              onClick={handleNavClick}
            >
              Pillars
            </a>
            <a
              className={`transition hover:text-gray-900 ${activeSection === "different" ? "text-gray-900" : ""}`}
              href="#different"
              onClick={handleNavClick}
            >
              Why different
            </a>
            <a
              className={`transition hover:text-gray-900 ${activeSection === "built" ? "text-gray-900" : ""}`}
              href="#built"
              onClick={handleNavClick}
            >
              Built by planners
            </a>
            <a
              className={`transition hover:text-gray-900 ${activeSection === "invite" ? "text-gray-900" : ""}`}
              href="#invite"
              onClick={handleNavClick}
            >
              Request invite
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="pt-8 pb-8 sm:pt-10 sm:pb-8 lg:pt-10 lg:pb-8">
          <div className={pageContainer}>
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2">
                <span className="max-w-full rounded-full border border-gray-200/80 bg-white px-3 py-1.5 text-sm font-medium text-gray-600">
                  Private build
                </span>
              </div>

              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl lg:text-[52px] lg:leading-[1.02]">
                An operating system for modern event teams.
              </h1>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-gray-600 sm:text-base">
                A unified workflow that connects registration, agenda, run of show, budget, and accountability — without tool sprawl.
              </p>

              <div className="mt-6 grid gap-3 sm:flex sm:items-center">
                <a
                  className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-orange-500 px-5 text-base font-semibold text-white shadow-sm transition hover:bg-orange-400 sm:w-auto"
                  href="#invite"
                  onClick={handleNavClick}
                >
                  Request an invite
                </a>
                <a
                  className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-gray-200 bg-white px-5 text-base font-semibold text-gray-700 shadow-sm transition hover:border-gray-300 sm:w-auto"
                  href="#pillars"
                  onClick={handleNavClick}
                >
                  See the pillars
                </a>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                In private build with experienced corporate event teams.
              </p>
            </div>
          </div>
        </section>

        <div className={`${pageContainer} my-5 sm:my-6`}>
          <div className="border-t border-gray-200/60" />
        </div>

        <section id="why" className="scroll-mt-24 py-6 sm:py-8 lg:py-8">
          <div className={pageContainer}>
            <div className="flex flex-col">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">WHY EVENT.OS</p>
                <h2 className="mt-2 text-3xl font-semibold leading-[1.1] tracking-tight text-gray-900 sm:text-[34px]">
                  Built for real-world event operations
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-gray-600">
                  Reduce tool bloat and align teams in one place.
                </p>
              </div>
              <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Too many tools",
                    body: "Replace scattered tools with a single system for planning and execution.",
                  },
                  {
                    title: "Handoffs create risk",
                    body: "Make ownership explicit, reduce missed details, and keep stakeholders aligned.",
                  },
                  {
                    title: "Execution is chaos",
                    body: "Keep teams aligned live with calm control when plans shift.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
                  >
                    <h3 className="text-[17px] font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-[15px] leading-6 text-slate-600">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className={`${pageContainer} my-5 sm:my-6`}>
          <div className="border-t border-gray-200/60" />
        </div>

        <section id="pillars" className="scroll-mt-24 bg-gray-50/60 py-8 sm:py-10 lg:py-10">
          <div className={pageContainer}>
            <div className="flex flex-col">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">CORE PILLARS</p>
                <h2 className="mt-2 text-3xl font-semibold leading-[1.1] tracking-tight text-gray-900 sm:text-[34px]">
                  Core pillars
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-gray-600">
                  Designed as one system — not disconnected modules.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Registration & attendee flow",
                    body: "Structure ticketing, access rules, and attendee paths with clarity.",
                  },
                  {
                    title: "Agenda & content orchestration",
                    body: "Connect sessions, speakers, rooms, and timing into a single source of truth.",
                  },
                  {
                    title: "Run of show & live execution control",
                    body: "Keep teams aligned minute-by-minute with practical execution tooling.",
                  },
                  {
                    title: "Budget & financial visibility",
                    body: "Organize spend and approvals without living in spreadsheets.",
                  },
                  {
                    title: "Team collaboration & accountability",
                    body: "Assign owners, track progress, and reduce status-chasing.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 rounded-xl border border-slate-200/70 bg-white p-4 sm:p-5">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                    <div>
                      <h3 className="text-[17px] font-semibold leading-6 text-gray-900">{item.title}</h3>
                      <p className="mt-2 text-[15px] leading-6 text-slate-600">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className={`${pageContainer} my-5 sm:my-6`}>
          <div className="border-t border-gray-200/60" />
        </div>

        <section id="different" className="scroll-mt-24 py-6 sm:py-8 lg:py-8">
          <div className={pageContainer}>
            <div className="flex flex-col">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">WHY DIFFERENT</p>
                <h2 className="mt-2 text-3xl font-semibold leading-[1.1] tracking-tight text-gray-900 sm:text-[34px]">
                  Why different
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-gray-600">
                  Operational clarity and a unified system that replaces legacy sprawl.
                </p>
              </div>
              <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Ops-first, not form-first",
                    body: "Built around real execution workflows, not isolated intake steps.",
                  },
                  {
                    title: "One connected system",
                    body: "Changes ripple across workflows automatically, without manual rework.",
                  },
                  {
                    title: "Enterprise collaboration built in",
                    body: "Ownership, roles, approvals, and accountability stay clear at scale.",
                  },
                  {
                    title: "Built for live moments",
                    body: "Calm control when plans change on site.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
                  >
                    <h3 className="text-[17px] font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-[15px] leading-6 text-slate-600">{item.body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
                Request an invite to join the private build.
              </p>
            </div>
          </div>
        </section>

        <div className={`${pageContainer} my-5 sm:my-6`}>
          <div className="border-t border-gray-200/60" />
        </div>

        <section id="built" className="scroll-mt-24 bg-gray-50/60 py-6 sm:py-8 lg:py-8">
          <div className={pageContainer}>
            <div className="flex flex-col">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">BUILT BY PLANNERS</p>
                <h2 className="mt-2 text-3xl font-semibold leading-[1.1] tracking-tight text-gray-900 sm:text-[34px]">
                  Built from the inside of live events
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-gray-600">
                  Grounded in the realities of complex, stakeholder-heavy programs.
                </p>
                <div className="mt-4 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-4">
                  <p className="text-sm text-orange-600">
                    Created by experienced event professionals, grounded in the realities of live execution and complex programs.
                  </p>
                </div>
                <div className="mt-6 grid gap-4">
                  {[
                    "Designed for stakeholder-heavy, multi-day programs.",
                    "Built around real onsite workflows and last-minute change.",
                    "Structured for teams, vendors, and approvals — not solo planners.",
                    "Focused on operational clarity, not busywork.",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200/70 bg-white p-4 sm:p-5">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                      <p className="text-[15px] leading-6 text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className={`${pageContainer} my-5 sm:my-6`}>
          <div className="border-t border-gray-200/60" />
        </div>

        <section id="value" className="py-8 sm:py-10 lg:py-10">
          <div className={pageContainer}>
            <div className="flex flex-col">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">OUTCOMES</p>
                <h2 className="mt-2 text-3xl font-semibold leading-[1.1] tracking-tight text-gray-900 sm:text-[34px]">
                  What you gain
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-gray-600">
                  Clearer workflows, calmer execution, and shared accountability.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
                {[
                  "Fewer tools and fewer handoffs",
                  "Clear ownership across teams and vendors",
                  "Better visibility into what’s at risk",
                  "Less mental load during live execution",
                  "Faster planning cycles",
                  "Cleaner wrap + reporting foundation",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200/70 bg-white p-4 sm:p-5">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                    <p className="text-[15px] leading-6 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className={`${pageContainer} my-5 sm:my-6`}>
          <div className="border-t border-gray-200/60" />
        </div>

        <section id="invite" className="scroll-mt-24 bg-gray-50/60 py-8 sm:py-10 lg:py-10">
          <div className={pageContainer}>
            <div className="grid items-start gap-8 lg:grid-cols-2">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">INVITATION</p>
                <h2 className="mt-2 text-3xl font-semibold leading-[1.1] tracking-tight text-gray-900 sm:text-[34px]">
                  Help shape what’s next
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-gray-600">
                  We’re opening a limited number of conversations with experienced event teams as Event.OS expands its private build.
                </p>
              </div>

              <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:ml-auto">
                {submitted ? (
                  <div className="grid gap-3">
                    <p className="text-sm font-semibold text-gray-900">Thanks for your interest.</p>
                    <p className="text-sm text-gray-600">
                      You’ll only hear from us occasionally.
                    </p>
                    <button
                      className="mt-2 inline-flex w-fit items-center justify-center rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700"
                      type="button"
                      onClick={() => setSubmitted(false)}
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form
                    className="space-y-4"
                    onSubmit={async (event) => {
                      event.preventDefault();
                      if (honeypot) return;
                      setSubmitError(null);
                      setEmailError(null);

                      if (!supabaseUrl || !supabaseAnonKey) {
                        setSubmitError("Something went wrong. Please try again.");
                        return;
                      }

                      const form = event.currentTarget;
                      const formData = new FormData(form);
                      const payload = {
                        name: String(formData.get("name") ?? "").trim(),
                        email: String(formData.get("email") ?? "").trim(),
                        company: String(formData.get("company") ?? "").trim(),
                        role: String(formData.get("role") ?? "").trim(),
                      };

                      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email);
                      if (!isValidEmail) {
                        setEmailError("Please enter a valid email.");
                        return;
                      }

                      try {
                        setSubmitting(true);
                        const response = await fetch(`${supabaseUrl}/rest/v1/waitlist`, {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                            apikey: supabaseAnonKey,
                            Authorization: `Bearer ${supabaseAnonKey}`,
                            Prefer: "return=minimal",
                          },
                          body: JSON.stringify(payload),
                        });

                        if (!response.ok) {
                          setSubmitError("Something went wrong. Please try again.");
                          return;
                        }
                        form.reset();
                        setSubmitted(true);
                      } catch {
                        setSubmitError("Something went wrong. Please try again.");
                      } finally {
                        setSubmitting(false);
                      }
                    }}
                  >
                    <label className="grid gap-2 text-sm font-medium text-gray-700">
                      Name
                      <input
                        className="h-11 w-full rounded-xl border border-gray-200 px-4 text-base shadow-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                        name="name"
                        type="text"
                        placeholder="Alex Morgan"
                      />
                    </label>
                    <label className="grid gap-2 text-sm font-medium text-gray-700">
                      Email
                      <input
                        required
                        className="h-11 w-full rounded-xl border border-gray-200 px-4 text-base shadow-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                        name="email"
                        type="email"
                        placeholder="alex@company.com"
                      />
                      {emailError ? <p className="text-sm text-red-600">{emailError}</p> : null}
                    </label>
                    <label className="grid gap-2 text-sm font-medium text-gray-700">
                      Company
                      <input
                        className="h-11 w-full rounded-xl border border-gray-200 px-4 text-base shadow-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                        name="company"
                        type="text"
                        placeholder="Company name"
                      />
                    </label>
                    <label className="grid gap-2 text-sm font-medium text-gray-700">
                      Role
                      <select
                        className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 pr-10 text-base shadow-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                        name="role"
                        defaultValue=""
                      >
                        <option value="">Select a role</option>
                        <option>In-house</option>
                        <option>Agency</option>
                        <option>Vendor</option>
                        <option>Other</option>
                      </select>
                    </label>

                    <div className="hidden">
                      <label className="text-sm text-gray-700">
                        Website
                        <input
                          className="h-11 rounded-xl border border-gray-200 px-3 text-sm"
                          name="website"
                          type="text"
                          value={honeypot}
                          onChange={(event) => setHoneypot(event.target.value)}
                          autoComplete="off"
                        />
                      </label>
                    </div>

                    <button
                      className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-xl bg-orange-500 text-base font-semibold text-white shadow-sm transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-70"
                      type="submit"
                      disabled={submitting}
                    >
                      {submitting ? "Submitting..." : "Request an invite"}
                    </button>
                    <p className="text-sm text-gray-500">
                      We respect your inbox. Communications are limited and relevant.
                    </p>
                    <p className="text-sm text-gray-500">
                      Designed for corporate programs and cross-functional event teams.
                    </p>
                    {submitError ? (
                      <p className="text-sm text-red-600">{submitError}</p>
                    ) : null}
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 bg-white">
          <div className={`${pageContainer} flex flex-col gap-4 py-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between`}>
          <div className="flex flex-wrap gap-4">
            <a className="transition hover:text-gray-900" href="/privacy">
              Privacy
            </a>
            <a className="transition hover:text-gray-900" href="/terms">
              Terms
            </a>
            <a className="transition hover:text-gray-900" href="mailto:megan@event-os.io">
              Contact us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
