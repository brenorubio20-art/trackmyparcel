"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Home() {
  const router = useRouter();
const [trackingCode, setTrackingCode] = useState("");
  return (
<main
  className="text-white min-h-screen flex flex-col bg-cover bg-center"
  style={{
    backgroundImage: "url('/background.png')",
  }}
>
      {/* HEADER */}
<header className="w-full border-b border-gray-800 bg-black/70 backdrop-blur-md">        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">

  <Image
    src="/logo.png"
    alt="TRACKMYPARCEL Logo"
    width={280}
    height={280}
  />

</div>

          <nav className="flex gap-6 text-sm text-gray-300">
            <a href="#">Tracking</a>
            <a href="/services">Services</a>
            <a href="mailto:support@trackmyparcel.co.uk">
  Support
</a>
            <a href="mailto:contact@trackmyparcel.co.uk">
  Contact
</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
<section className="flex-1 flex items-center justify-center px-6 bg-black/50">        <div className="text-center max-w-3xl">

          <p className="text-green-400 font-semibold mb-4">
            FAST • SECURE • GLOBAL
          </p>

          <h2 className="text-6xl font-bold leading-tight mb-6">
            Smart Parcel Tracking
            <br />
            For Modern Logistics
          </h2>

          <p className="text-gray-400 text-lg mb-10">
            Track shipments worldwide with real-time delivery updates
            and intelligent logistics management.
          </p>

          <div className="flex flex-col md:flex-row gap-3 justify-center">

            <input
  type="text"
  placeholder="Enter your tracking number"
  value={trackingCode}
  onChange={(e) => setTrackingCode(e.target.value)}
  className="px-5 py-4 rounded-xl bg-white/95 text-black placeholder:text-gray-500 w-full md:w-[500px] border border-white/20 shadow-2xl outline-none"
/>

            <button
  onClick={() => router.push(`/tracking/${trackingCode}`)}
  className="bg-green-500 hover:bg-green-400 transition px-8 py-4 rounded-xl font-bold"
>
  Track Parcel
</button>

          </div>

        </div>

      </section>

      {/* FOOTER */}
<footer className="border-t border-gray-800 bg-black/70 backdrop-blur-md">        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">

          <p>
            © 2026 TRACKMYPARCEL. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="mailto:support@trackmyparcel.co.uk">
  Support
</a>
          </div>

        </div>
      </footer>

    </main>
  );
}