import { useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const pageContainer = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/80 backdrop-blur">
        <div className={`${pageContainer} flex items-center justify-between py-3`}>
          <a href="/" className="flex items-center">
            <img src="/logo.png" alt="Event.OS" className="h-7 w-auto" />
          </a>
          <nav className="hidden items-center gap-5 text-sm text-gray-600 md:flex">
            <a className="transition hover:text-gray-900" href="#product">
              Product
            </a>
            <a className="transition hover:text-gray-900" href="#why">
              Why Event.OS
            </a>
            <a className="transition hover:text-gray-900" href="#early-access">
              Early Access
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-8">
        <section className="pt-8 pb-6 sm:pt-10 sm:pb-8 lg:pt-12 lg:pb-10">
          <div className={pageContainer}>
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2">
                <span className="max-w-full rounded-full border border-orange-100 bg-orange-50 px-3 py-1.5 text-sm font-medium text-orange-700">
                  In development
                </span>
                <span className="max-w-full rounded-full border border-gray-200/80 bg-white px-3 py-1.5 text-sm font-medium text-gray-600">
                  Invite-only early access
                </span>
              </div>

              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl lg:text-[56px] lg:leading-[1.02]">
                The operating system for modern corporate events.
              </h1>
              <p className="mt-4 text-[15px] leading-relaxed text-gray-600 sm:text-base">
                Plan, align, and execute complex events in one calm system — built for how events actually run.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-orange-500 text-base font-semibold text-white shadow-sm transition hover:bg-orange-400 sm:w-auto sm:px-6"
                  href="#early-access"
                >
                  Join the waitlist
                </a>
                <a
                  className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-gray-200 bg-white text-base font-semibold text-gray-700 shadow-sm transition hover:border-gray-300 sm:w-auto sm:px-6"
                  href="mailto:megan@event-os.io"
                >
                  Request investor deck
                </a>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                Currently in development. Early access will be invite-only.
              </p>
            </div>
          </div>
        </section>

        <div className={`${pageContainer} my-4 sm:my-6`}>
          <div className="border-t border-slate-100" />
        </div>

        <section id="why" className="py-8 sm:py-10 lg:py-10">
          <div className={pageContainer}>
            <div className="flex flex-col">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">WHY EVENT.OS</p>
                <h2 className="mb-4 text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
                  Built for real-world event operations.
                </h2>
              </div>
            <div className="mt-5 grid auto-rows-fr grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
              {[
                {
                  title: "One source of truth",
                  body: "Decisions stay aligned across the entire event — live.",
                },
                {
                  title: "Operational visibility",
                  body: "See readiness and risk before it becomes urgent.",
                },
                {
                  title: "Built for real event teams",
                  body: "Designed for planners — with seamless collaboration across vendors and partners.",
                },
                {
                  title: "Enterprise-ready foundation",
                  body: "Built to meet enterprise expectations from day one.",
                },
              ].map((item) => (
                <div key={item.title} className="h-full rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm sm:p-6">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-6 text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
            </div>
          </div>
        </section>

        <div className={`${pageContainer} my-4 sm:my-6`}>
          <div className="border-t border-slate-100" />
        </div>

        <section id="product" className="bg-gray-50/60 py-8 sm:py-10 lg:py-10">
          <div className={pageContainer}>
            <div className="flex flex-col">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">DESIGNED DIFFERENTLY</p>
                <h2 className="mb-4 text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
                  Planner-led by design.
                </h2>
                <p className="max-w-[640px] text-[15px] leading-relaxed text-gray-600">
                  Event.OS unifies planning, execution, and collaboration in one system — without forcing teams to
                  change how they work.
                </p>
              </div>
              <div className="mt-5 grid auto-rows-fr grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
                {[
                  {
                    title: "Planner-led by design",
                    body:
                      "Planners stay in control, with vendors and partners collaborating in the same system.",
                  },
                  {
                    title: "One system of record",
                    body:
                      "No more reconciling spreadsheets, emails, and timelines. Everyone works from one source of truth.",
                  },
                  {
                    title: "Built for real event complexity",
                    body:
                      "Multi-day programs, layered stakeholders, and last-minute changes — built for how events unfold.",
                  },
                  {
                    title: "Collaboration without chaos",
                    body:
                      "Share what vendors need without exposing everything — or losing control.",
                  },
                  {
                    title: "Enterprise-ready foundation",
                    body: "Security, scalability, and governance are built in from day one.",
                  },
                  {
                    title: "Changes ripple everywhere",
                    body:
                      "One update reflects across plans, timelines, and execution — without manual rework.",
                  },
                ].map((item) => (
                  <div key={item.title} className="h-full rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm sm:p-6">
                    <div className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-orange-500" />
                      <h3 className="text-lg font-semibold leading-6 text-gray-900">{item.title}</h3>
                    </div>
                    <p className="mt-2 text-[15px] leading-6 text-slate-600">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className={`${pageContainer} my-4 sm:my-6`}>
          <div className="border-t border-slate-100" />
        </div>

        <section id="early-access" className="py-8 sm:py-10 lg:py-10">
          <div className={pageContainer}>
            <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="max-w-xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">EARLY ACCESS</p>
              <h2 className="mb-4 text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">Join the waitlist.</h2>
              <p className="max-w-[560px] text-[15px] leading-relaxed text-gray-600">
                Early access is rolling out in phases. Join the waitlist to be notified when invitations begin.
              </p>
            </div>

            <div className="w-full max-w-xl rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:ml-auto sm:p-6">
              {submitted ? (
                <div className="grid gap-3">
                  <p className="text-sm font-semibold text-gray-900">Thanks for your interest.</p>
                  <p className="text-sm text-gray-600">
                    We’ll review your request and follow up when invite-only access opens.
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
                  onSubmit={(event) => {
                    event.preventDefault();
                    if (honeypot) return;
                    setSubmitted(true);
                  }}
                >
                  <label className="grid gap-2 text-sm font-medium text-gray-700">
                    Name
                    <input
                      required
                      className="h-12 w-full rounded-xl border border-gray-200 px-4 text-base shadow-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                      name="name"
                      type="text"
                      placeholder="Alex Morgan"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-gray-700">
                    Email
                    <input
                      required
                      className="h-12 w-full rounded-xl border border-gray-200 px-4 text-base shadow-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                      name="email"
                      type="email"
                      placeholder="alex@company.com"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-gray-700">
                    Company
                    <input
                      required
                      className="h-12 w-full rounded-xl border border-gray-200 px-4 text-base shadow-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                      name="company"
                      type="text"
                      placeholder="Company name"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-gray-700">
                    Role
                    <select
                      required
                      className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 pr-10 text-base shadow-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
                      name="role"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a role
                      </option>
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
                    className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-xl bg-orange-500 text-base font-semibold text-white shadow-sm transition hover:bg-orange-400"
                    type="submit"
                  >
                    Join the waitlist
                  </button>
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
