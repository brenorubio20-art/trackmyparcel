import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-black to-black" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-20">

          <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16">

            <div>

              <p className="text-green-400 font-bold tracking-[4px] mb-4 text-sm">
                TRACKMYPARCEL
              </p>

              <h1 className="text-4xl md:text-7xl font-bold leading-tight">
                Privacy
                <br />
                Policy
              </h1>

            </div>

            <Link
              href="/"
              className="bg-green-500 hover:bg-green-400 transition px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold text-sm md:text-lg"
            >
              Back Home
            </Link>

          </header>

          <div className="bg-zinc-900/70 border border-zinc-800 backdrop-blur-xl rounded-[30px] p-6 md:p-14 mb-10">

            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Information Collection
            </h2>

            <p className="text-gray-300 text-base md:text-xl leading-8 md:leading-10">
              TRACKMYPARCEL may collect shipment information,
              parcel tracking details and customer contact data
              required to provide international logistics and
              delivery services. This information helps improve
              shipment monitoring accuracy and operational efficiency.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">

            <div className="bg-zinc-900/70 border border-zinc-800 backdrop-blur-xl rounded-[30px] p-6 md:p-10">

              <div className="text-4xl mb-6">
                🔒
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-5">
                Data Protection
              </h2>

              <p className="text-gray-400 text-base md:text-lg leading-8">
                We use advanced security technologies and
                operational safeguards to protect shipment
                activity, customer information and logistics
                systems from unauthorized access.
              </p>

            </div>

            <div className="bg-zinc-900/70 border border-zinc-800 backdrop-blur-xl rounded-[30px] p-6 md:p-10">

              <div className="text-4xl mb-6">
                📦
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-5">
                Shipment Processing
              </h2>

              <p className="text-gray-400 text-base md:text-lg leading-8">
                Shipment data may be shared with trusted
                international delivery providers and logistics
                partners to complete transportation and parcel
                processing operations.
              </p>

            </div>

          </div>

          <div className="bg-zinc-900/70 border border-zinc-800 backdrop-blur-xl rounded-[30px] p-6 md:p-14 mb-10">

            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Cookies & Analytics
            </h2>

            <p className="text-gray-300 text-base md:text-xl leading-8 md:leading-10">
              Our platform may use cookies, analytics systems
              and performance technologies to improve parcel
              tracking reliability, optimize delivery operations
              and enhance customer experience across devices.
            </p>

          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-[30px] p-8 md:p-14">

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
              Need Help?
            </h2>

            <p className="text-black/90 text-lg md:text-2xl leading-8 md:leading-10 mb-10 max-w-3xl">
              If you have any questions regarding our privacy
              practices, parcel tracking systems or shipment
              processing policies, our support team is available
              worldwide.
            </p>

            <a
              href="mailto:support@trackmyparcel.com"
              className="inline-flex items-center justify-center bg-black hover:bg-zinc-900 transition text-white font-bold px-8 md:px-12 py-4 md:py-5 rounded-2xl text-base md:text-xl"
            >
              Contact Support
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}