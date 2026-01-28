export default function Terms() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
        <a className="text-sm text-blue-600" href="/">
          ← Back to Event.OS
        </a>
        <h1 className="mt-6 text-3xl font-semibold">Terms of Service</h1>
        <p className="mt-4 text-base leading-relaxed text-gray-600">
          Event.OS is currently in development. These terms will be updated prior to public launch.
        </p>
        <div className="mt-10 grid gap-6 text-sm text-gray-600">
          <section className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-500">Status</h2>
            <p className="leading-relaxed">
              Early access invitations are limited and may change as we validate the product. Submitting the
              waitlist form does not guarantee access.
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-500">Early access</h2>
            <p className="leading-relaxed">
              Any previews shown are conceptual and subject to change. Event.OS reserves the right to update or
              discontinue features prior to launch.
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
  );
}
