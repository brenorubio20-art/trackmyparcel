"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase";

export default function DashboardPage() {

  const [trackings, setTrackings] =
    useState<any[]>([]);

  const [code, setCode] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [status, setStatus] = useState("");
  const [store, setStore] = useState("");

  const [authorized, setAuthorized] =
    useState(false);

  useEffect(() => {

    const password =
      prompt("Enter admin password");

    if (password === "track2026") {

      setAuthorized(true);

    } else {

      alert("Wrong password");

      window.location.href = "/";

    }

  }, []);

  const loadTrackings = async () => {

    const { data, error } =
      await supabase
        .from("trackings")
        .select("*")
        .order("id", {
          ascending: false,
        });

    if (error) {

      console.log(error);
      return;

    }

    setTrackings(data || []);

  };

  useEffect(() => {

    if (authorized) {

      loadTrackings();

    }

  }, [authorized]);

  if (!authorized) {

    return (
      <main className="min-h-screen bg-black" />
    );

  }

  const createTracking = async () => {

    if (
      !code ||
      !from ||
      !to ||
      !status ||
      !store
    ) {

      alert("Fill all fields");
      return;

    }

    const { error } =
      await supabase
        .from("trackings")
        .insert([
          {
            code,
            from,
            to,
            status,
            store,
          },
        ]);

    if (error) {

      console.log(error);
      alert("Error creating tracking");
      return;

    }

    setCode("");
    setFrom("");
    setTo("");
    setStatus("");
    setStore("");

    loadTrackings();

  };

  const updateStatus = async (
  trackingCode: string
) => {
  alert("FUNCTION RUNNING");

  const newStatus =
    prompt("New status");

  if (!newStatus) return;

  const { error } =
    await supabase
      .from("trackings")
      .update({
        status: newStatus,
      })
      .eq("code", trackingCode);

  if (error) {

    console.log(error);

    alert("Error updating");

    return;

  }

  const { error: insertError } =
    await supabase
      .from("tracking_events")
      .insert([
        {
          tracking_code:
            trackingCode,

          title: newStatus,

          description:
            `Tracking updated to ${newStatus}`,
        },
      ]);

  if (insertError) {

    console.log(insertError);

    alert(
      JSON.stringify(insertError)
    );

    return;

  }

  await loadTrackings();

};
  

  const deleteTracking = async (
    trackingCode: string
  ) => {

    await supabase
      .from("trackings")
      .delete()
      .eq("code", trackingCode);

    await loadTrackings();

  };

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-2">
          Admin Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          TRACKMYPARCEL Management Panel
        </p>

        <div className="bg-zinc-900 rounded-3xl p-8 mb-10">

          <h2 className="text-3xl font-bold mb-8">
            Create Tracking
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              placeholder="Tracking Code"
              value={code}
              onChange={(e) =>
                setCode(e.target.value)
              }
              className="bg-black px-5 py-4 rounded-xl outline-none"
            />

            <input
              type="text"
              placeholder="Origin"
              value={from}
              onChange={(e) =>
                setFrom(e.target.value)
              }
              className="bg-black px-5 py-4 rounded-xl outline-none"
            />

            <input
              type="text"
              placeholder="Destination"
              value={to}
              onChange={(e) =>
                setTo(e.target.value)
              }
              className="bg-black px-5 py-4 rounded-xl outline-none"
            />

            <input
              type="text"
              placeholder="Status"
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
              className="bg-black px-5 py-4 rounded-xl outline-none"
            />

            <input
              type="text"
              placeholder="Store"
              value={store}
              onChange={(e) =>
                setStore(e.target.value)
              }
              className="bg-black px-5 py-4 rounded-xl outline-none md:col-span-2"
            />

          </div>

          <button
            onClick={createTracking}
            className="mt-8 bg-green-500 hover:bg-green-400 transition px-8 py-4 rounded-2xl text-xl font-bold"
          >
            Create Tracking
          </button>

        </div>

        <div className="bg-zinc-900 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            All Trackings
          </h2>

          <div className="space-y-5">

            {trackings.map((item, index) => (

              <div
                key={index}
                className="bg-black rounded-2xl p-6 flex items-center justify-between"
              >

                <div>

                  <h3 className="text-3xl font-bold mb-2">
                    {item.code}
                  </h3>

                  <div className="space-y-1 text-gray-300">

                    <p>
                      <span className="font-bold text-white">
                        From:
                      </span>{" "}
                      {item.from}
                    </p>

                    <p>
                      <span className="font-bold text-white">
                        To:
                      </span>{" "}
                      {item.to}
                    </p>

                    <p>
                      <span className="font-bold text-white">
                        Status:
                      </span>{" "}
                      {item.status}
                    </p>

                    <p>
                      <span className="font-bold text-white">
                        Store:
                      </span>{" "}
                      {item.store}
                    </p>

                  </div>

                </div>

                <div className="flex gap-3">

                  <button
                    onClick={() => updateStatus(item.code)}
                    className="bg-blue-500 hover:bg-blue-400 transition px-6 py-3 rounded-xl font-bold"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteTracking(item.code)}
                    className="bg-red-500 hover:bg-red-400 transition px-6 py-3 rounded-xl font-bold"
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </main>
  );
}