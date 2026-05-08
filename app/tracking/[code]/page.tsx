"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/app/lib/supabase";

export default function TrackingPage() {

  const params = useParams();

  const code =
    String(params.code).toUpperCase();

  const [shipment, setShipment] =
    useState<any>(null);

  useEffect(() => {

    loadTracking();

  }, [code]);

  const loadTracking = async () => {

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

  };

  if (!shipment) {

    return (
      <main className="min-h-screen bg-black flex items-center justify-center text-white text-4xl font-bold">
        Tracking code not found
      </main>
    );

  }

  return (
    <main
      className="text-white min-h-screen flex flex-col bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/background.png')",
      }}
    >

      <header className="w-full border-b border-gray-800 bg-black/70 backdrop-blur-md">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <Image
            src="/logo.png"
            alt="TRACKMYPARCEL Logo"
            width={240}
            height={240}
          />

          <nav className="flex gap-8 text-sm text-gray-300">

            <a href="#">
              Support
            </a>

          </nav>

        </div>

      </header>

      <section className="flex-1 flex items-center">

        <div className="w-full max-w-7xl mx-auto px-6">

          <div className="bg-black/55 backdrop-blur-xl rounded-3xl p-12 shadow-2xl">

            <div className="flex items-start justify-between mb-10">

              <div>

                <p className="text-gray-400 mb-2">
                  Tracking Code
                </p>

                <h1 className="text-3xl md:text-6xl font-bold">
                  {shipment.code}
                </h1>

              </div>

              <div className="bg-green-500 text-white px-6 py-6 rounded-full text-lg font-bold shadow-lg">
                {shipment.status}
              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">

              <div className="bg-black/40 rounded-2xl p-6">

                <p className="text-gray-400 mb-2">
                  From
                </p>

                <h2 className="text-5xl font-bold">
                  {shipment.from}
                </h2>

              </div>

              <div className="bg-black/40 rounded-2xl p-6">

                <p className="text-gray-400 mb-2">
                  To
                </p>

                <h2 className="text-5xl font-bold">
                  {shipment.to}
                </h2>

              </div>

            </div>

            <div className="bg-black/40 rounded-2xl p-8 mb-10">

              <div className="space-y-6">

                <div>

                  <h3 className="text-3xl font-bold">
                    {shipment.eventtitle}
                  </h3>

                  <p className="text-gray-400 text-xl">
                    {shipment.eventdescription}
                  </p>

                </div>

                <div>

                  <h3 className="text-3xl font-bold text-green-400">
                    {shipment.status}
                  </h3>

                </div>

                <div>

                  <h3 className="text-3xl font-bold">
                    Store
                  </h3>

                  <p className="text-gray-300 text-2xl">
                    {shipment.store}
                  </p>

                </div>

              </div>

            </div>

            <Link
              href="/"
              className="inline-flex items-center justify-center bg-green-500 hover:bg-green-400 transition px-16 py-5 rounded-2xl text-2xl font-bold shadow-lg"
            >
              Track Another Parcel
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}