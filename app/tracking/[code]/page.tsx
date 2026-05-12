"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import {
  PackageCheck,
  Truck,
  MapPin,
  Clock3,
  ShieldCheck,
  ArrowRight,
  Package,
} from "lucide-react";

import { supabase } from "@/app/lib/supabase";

export default function TrackingPage() {

  const params = useParams();

  const code =
    String(params.code).toUpperCase();

  const [shipment, setShipment] =
    useState<any>(null);

  const [events, setEvents] =
    useState<any[]>([]);
  const [loading, setLoading] =
  useState(true);
  useEffect(() => {

    if (code) {
      loadTracking();
    }

  }, [code]);

  const loadTracking = async () => {
    setLoading(true);
    await new Promise((resolve) =>
  setTimeout(resolve, 1500)
);

    const { data, error } =
      await supabase
        .from("trackings")
        .select("*")
        .eq("code", code)
        .single();

    if (error) {

      console.log(error);
      return;

    }

    setShipment(data);

    const { data: eventsData } =
      await supabase
        .from("tracking_events")
        .select("*")
        .eq("tracking_code", code)
        .order("created_at", {
          ascending: false,
        });

    setEvents(eventsData || []);

  };
if (loading) {
  return null;
}
  if (!shipment) {

    return (

      <main className="min-h-screen bg-black flex items-center justify-center text-white">

        <div className="text-center px-6">

          <h1 className="text-4xl font-black mb-4">
            Tracking Not Found
          </h1>

          <p className="text-gray-400 mb-8">
            This tracking code does not exist.
          </p>

          <Link
            href="/"
            className="bg-green-500 hover:bg-green-400 transition px-6 py-4 rounded-2xl text-black font-bold inline-flex items-center gap-2"
          >
            Back Home

            <ArrowRight className="w-5 h-5" />

          </Link>

        </div>

      </main>

    );

  }

  return (

    <main
      className="min-h-screen bg-cover bg-center bg-fixed text-white"
      style={{
        backgroundImage:
          "url('/background.png')",
      }}
    >

      {/* OVERLAY */}
      <div className="min-h-screen bg-black/75 backdrop-blur-sm">

        {/* HEADER */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">

          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">

            <Link href="/">

              <Image
                src="/logo.png"
                alt="TrackMyParcel"
                width={180}
                height={180}
                className="w-[130px] md:w-[180px]"
                priority
              />

            </Link>

            <div className="hidden md:flex items-center gap-2 text-sm text-gray-300">

              <ShieldCheck className="w-4 h-4 text-green-400" />

              Secure Global Tracking

            </div>

          </div>

        </header>

        {/* CONTENT */}
        <section className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-12">

          <div className="bg-black/50 border border-white/10 rounded-[32px] overflow-hidden shadow-2xl backdrop-blur-2xl">

            {/* HERO */}
            <div className="p-6 md:p-10 border-b border-white/10">

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                <div>

                  <div className="flex items-center gap-2 text-green-400 text-sm tracking-[3px] uppercase mb-4">

                    <Package className="w-4 h-4" />

                    Tracking Code

                  </div>

                  <h1 className="text-3xl md:text-6xl font-black break-words">

                    {shipment.code}

                  </h1>

                </div>

                <div className="bg-gradient-to-r from-green-500 to-green-400 text-black px-6 py-5 rounded-3xl shadow-xl">

                  <p className="text-xs uppercase font-bold opacity-70 mb-1">
                    Current Status
                  </p>

                  <h2 className="text-xl md:text-2xl font-black break-words">

                    {shipment.status}

                  </h2>

                </div>

              </div>

            </div>

            {/* BODY */}
            <div className="p-5 md:p-10">

              {/* ROUTE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">

                {/* FROM */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                  <div className="flex items-center gap-2 text-gray-400 text-sm uppercase tracking-[2px] mb-4">

                    <MapPin className="w-4 h-4 text-green-400" />

                    Origin

                  </div>

                  <h2 className="text-3xl md:text-5xl font-black break-words leading-tight">

                    {shipment.from}

                  </h2>

                </div>

                {/* TO */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                  <div className="flex items-center gap-2 text-gray-400 text-sm uppercase tracking-[2px] mb-4">

                    <Truck className="w-4 h-4 text-green-400" />

                    Destination

                  </div>

                  <h2 className="text-3xl md:text-5xl font-black break-words leading-tight">

                    {shipment.to}

                  </h2>

                </div>

              </div>

              {/* STATUS */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 mb-6">

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">

                  <div className="flex-1">

                    <div className="flex items-center gap-2 text-green-400 mb-4">

                      <PackageCheck className="w-5 h-5" />

                      <p className="uppercase tracking-[2px] text-sm font-semibold">
                        Latest Update
                      </p>

                    </div>

                    <h3 className="text-3xl md:text-4xl font-black mb-3">

                      {events[0]?.title ||
                        shipment.status}

                    </h3>

                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">

                      {events[0]?.description ||
                        "Shipment moving through our logistics network."}

                    </p>

                  </div>

                  <div className="bg-black/40 border border-white/10 rounded-2xl p-5 min-w-[220px]">

                    <p className="text-gray-400 text-sm uppercase tracking-[2px] mb-2">

                      Store

                    </p>

                    <h4 className="text-2xl font-black text-green-400 break-words">

                      {shipment.store}

                    </h4>

                  </div>

                </div>

              </div>

              {/* TIMELINE */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">

                <div className="flex items-center gap-3 mb-8">

                  <Clock3 className="w-7 h-7 text-green-400" />

                  <h2 className="text-3xl md:text-4xl font-black">

                    Tracking History

                  </h2>

                </div>

                <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2">

                  {events.length === 0 && (

                    <p className="text-gray-400">
                      No tracking history yet.
                    </p>

                  )}

                  {events.map((event, index) => (

                    <div
                      key={index}
                      className="relative pl-8"
                    >

                      {/* LINE */}
                      <div className="absolute left-[9px] top-0 h-full w-[2px] bg-green-500/30" />

                      {/* DOT */}
                      <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-green-400 border-4 border-black shadow-[0_0_20px_rgba(74,222,128,0.8)]" />

                      {/* CARD */}
                      <div className="bg-black/30 border border-white/10 rounded-2xl p-5">

                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">

                          <h3 className="text-xl md:text-2xl font-black">

                            {event.title}

                          </h3>

                          <div className="text-xs text-gray-400 bg-white/5 border border-white/10 rounded-full px-3 py-2 w-fit">

                            {new Date(
                              event.created_at
                            ).toLocaleString()}

                          </div>

                        </div>

                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">

                          {event.description}

                        </p>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

              {/* BUTTON */}
              <div className="mt-8">

                <Link
                  href="/"
                  className="w-full md:w-fit bg-gradient-to-r from-green-500 to-green-400 text-black font-black px-8 py-5 rounded-2xl text-lg flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-2xl shadow-green-500/20"
                >

                  Track Another Parcel

                  <ArrowRight className="w-5 h-5" />

                </Link>

              </div>

            </div>

          </div>

          {/* FOOTER */}
          <footer className="mt-8 pb-8">

            <div className="bg-black/40 border border-white/10 rounded-3xl px-6 py-6 backdrop-blur-xl">

              <div className="flex flex-col md:flex-row items-center justify-between gap-5">

                <div className="flex items-center gap-4">

                  <Image
                    src="/logo.png"
                    alt="TrackMyParcel"
                    width={150}
                    height={150}
                    className="w-[120px]"
                  />

                  <div>

                    <h3 className="font-bold text-lg">
                      TrackMyParcel
                    </h3>

                    <p className="text-sm text-gray-400">
                      Fast • Secure • Global
                    </p>

                  </div>

                </div>

                <div className="text-center md:text-right">

                  <p className="text-gray-300 text-sm">
                    © 2026 TrackMyParcel.
                    All rights reserved.
                  </p>

                  <p className="text-gray-500 text-xs mt-1">
                    Premium international logistics
                    and parcel tracking system.
                  </p>

                </div>

              </div>

            </div>

          </footer>

        </section>

      </div>

    </main>

  );

}