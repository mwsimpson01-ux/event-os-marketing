export default function Privacy() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="max-w-3xl">
          <a className="text-sm text-blue-600" href="/">
            ← Back to Event.OS
          </a>
          <h1 className="mt-6 text-3xl font-semibold">Privacy Policy</h1>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Event.OS is currently in development. This policy will be updated prior to public launch.
          </p>
          <div className="mt-8 grid gap-5 text-sm text-gray-600">
            <section className="space-y-2">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-500">Status</h2>
              <p className="leading-relaxed">
                We collect only the information you provide when joining the waitlist. We do not sell or share this
                information without your consent.
              </p>
            </section>
            <section className="space-y-2">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-500">Early access</h2>
              <p className="leading-relaxed">
                As the platform evolves, we will update this policy and communicate any material changes to early
                access members.
              </p>
            </section>
            <section className="space-y-2">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-500">Contact</h2>
              <p className="leading-relaxed">
                Questions?{" "}
                <a className="text-gray-900 underline underline-offset-4" href="mailto:megan@event-os.io">
                  Contact us
                </a>{" "}
                at megan@event-os.io.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
