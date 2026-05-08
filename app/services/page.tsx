import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/background.png')",
        }}
      >

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10">

          {/* HEADER */}
          <header className="border-b border-white/10 bg-black/50 backdrop-blur-2xl">

            <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-5">

              <Image
                src="/logo.png"
                alt="TRACKMYPARCEL"
                width={230}
                height={230}
                className="w-[180px] md:w-[230px] h-auto"
              />

              <Link
                href="/"
                className="bg-green-500 hover:bg-white hover:text-black transition-all duration-300 px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold text-sm md:text-lg shadow-[0_0_35px_rgba(34,197,94,0.35)]"
              >
                Back Home
              </Link>

            </div>

          </header>

          {/* HERO */}
          <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-28">

            <div className="text-center mb-20 md:mb-32">

              <p className="text-green-400 font-bold tracking-[5px] mb-6 text-sm">
                GLOBAL • FAST • SECURE
              </p>

              <h1 className="text-4xl md:text-8xl font-bold leading-tight mb-8">

                Premium Logistics
                <br />
                Services Worldwide

              </h1>

              <p className="text-gray-300 text-lg md:text-2xl leading-8 md:leading-10 max-w-5xl mx-auto">
                TRACKMYPARCEL delivers intelligent shipment tracking,
                secure logistics management and premium international
                parcel monitoring systems for customers worldwide.
              </p>

            </div>

            {/* SERVICES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">

              {/* CARD 1 */}
              <div className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-black/60 backdrop-blur-2xl p-8 md:p-10 transition-all duration-500 hover:border-green-400/40 hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(34,197,94,0.25)]">

                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative z-10">

                  <div className="w-20 h-20 rounded-3xl bg-green-500/15 border border-green-400/20 flex items-center justify-center text-5xl mb-8 shadow-[0_0_40px_rgba(34,197,94,0.2)]">
                    🌍
                  </div>

                  <h2 className="text-3xl font-bold mb-6 text-white">
                    Worldwide Tracking
                  </h2>

                  <p className="text-gray-300 text-lg leading-8">
                    Monitor international shipments in real-time
                    with advanced tracking systems and optimized
                    global logistics monitoring.
                  </p>

                </div>

              </div>

              {/* CARD 2 */}
              <div className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-black/60 backdrop-blur-2xl p-8 md:p-10 transition-all duration-500 hover:border-green-400/40 hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(34,197,94,0.25)]">

                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative z-10">

                  <div className="w-20 h-20 rounded-3xl bg-green-500/15 border border-green-400/20 flex items-center justify-center text-5xl mb-8 shadow-[0_0_40px_rgba(34,197,94,0.2)]">
                    🔒
                  </div>

                  <h2 className="text-3xl font-bold mb-6 text-white">
                    Secure Logistics
                  </h2>

                  <p className="text-gray-300 text-lg leading-8">
                    Our infrastructure uses secure shipment
                    technologies and encrypted delivery systems
                    for maximum operational reliability.
                  </p>

                </div>

              </div>

              {/* CARD 3 */}
              <div className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-black/60 backdrop-blur-2xl p-8 md:p-10 transition-all duration-500 hover:border-green-400/40 hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(34,197,94,0.25)]">

                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative z-10">

                  <div className="w-20 h-20 rounded-3xl bg-green-500/15 border border-green-400/20 flex items-center justify-center text-5xl mb-8 shadow-[0_0_40px_rgba(34,197,94,0.2)]">
                    ⚡
                  </div>

                  <h2 className="text-3xl font-bold mb-6 text-white">
                    Instant Updates
                  </h2>

                  <p className="text-gray-300 text-lg leading-8">
                    Receive live parcel notifications,
                    shipment movement alerts and intelligent
                    delivery status updates instantly.
                  </p>

                </div>

              </div>

            </div>

            {/* BIG SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">

              {/* LEFT */}
              <div className="rounded-[34px] border border-white/10 bg-black/60 backdrop-blur-2xl p-8 md:p-14 shadow-[0_0_60px_rgba(255,255,255,0.05)]">

                <p className="text-green-400 font-bold tracking-[4px] mb-5 text-sm">
                  WHY CHOOSE US
                </p>

                <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
                  Advanced
                  <br />
                  Logistics
                  <br />
                  Solutions
                </h2>

                <div className="space-y-6 text-lg md:text-xl text-gray-300">

                  <p>
                    ✓ Real-time worldwide shipment monitoring
                  </p>

                  <p>
                    ✓ Optimized delivery infrastructure
                  </p>

                  <p>
                    ✓ International logistics network
                  </p>

                  <p>
                    ✓ Secure parcel handling systems
                  </p>

                  <p>
                    ✓ Fast and responsive support
                  </p>

                  <p>
                    ✓ Premium tracking technologies
                  </p>

                </div>

              </div>

              {/* RIGHT */}
              <div className="rounded-[34px] bg-gradient-to-br from-green-500 to-green-700 p-8 md:p-14 shadow-[0_0_70px_rgba(34,197,94,0.35)] flex flex-col justify-center">

                <p className="text-black font-bold tracking-[4px] mb-5 text-sm">
                  PREMIUM SUPPORT
                </p>

                <h2 className="text-4xl md:text-6xl font-bold text-black mb-8 leading-tight">
                  Need
                  <br />
                  Assistance?
                </h2>

                <p className="text-black/90 text-lg md:text-2xl leading-8 md:leading-10 mb-10">
                  Our logistics specialists are available
                  worldwide to assist with parcel tracking,
                  delivery management and shipment support.
                </p>

                <a
                  href="mailto:support@trackmyparcel.com"
                  className="bg-black hover:bg-white hover:text-black transition-all duration-300 text-white font-bold text-lg md:text-xl px-8 md:px-10 py-4 md:py-5 rounded-2xl inline-flex w-fit"
                >
                  Contact Support
                </a>

              </div>

            </div>

            {/* CTA */}
            <div className="rounded-[40px] border border-white/10 bg-black/60 backdrop-blur-2xl p-10 md:p-20 text-center shadow-[0_0_80px_rgba(255,255,255,0.08)]">

              <p className="text-green-400 font-bold tracking-[5px] mb-6 text-sm">
                TRACKMYPARCEL
              </p>

              <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
                Smart Logistics
                <br />
                For Modern Delivery
              </h2>

              <p className="text-gray-300 text-lg md:text-2xl leading-8 md:leading-10 max-w-4xl mx-auto mb-12">
                Experience fast worldwide shipment monitoring,
                intelligent parcel management and secure
                delivery technologies with TRACKMYPARCEL.
              </p>

              <Link
                href="/"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-white hover:text-black transition-all duration-300 px-10 md:px-16 py-5 md:py-6 rounded-2xl font-bold text-lg md:text-2xl shadow-[0_0_50px_rgba(34,197,94,0.35)]"
              >
                Return Home
              </Link>

            </div>

          </div>

          {/* FOOTER */}
          <footer className="border-t border-white/10 bg-black/60 backdrop-blur-2xl">

            <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-8">

              <Image
                src="/logo.png"
                alt="TRACKMYPARCEL"
                width={220}
                height={220}
                className="w-[170px] md:w-[220px] h-auto"
              />

              <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">

                <Link
                  href="/"
                  className="hover:text-white transition"
                >
                  Home
                </Link>

                <Link
                  href="/services"
                  className="hover:text-white transition"
                >
                  Services
                </Link>

                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition"
                >
                  Privacy Policy
                </Link>

                <a
                  href="mailto:support@trackmyparcel.com"
                  className="hover:text-white transition"
                >
                  Support
                </a>

              </div>

            </div>

          </footer>

        </div>

      </section>

    </main>
  );
}