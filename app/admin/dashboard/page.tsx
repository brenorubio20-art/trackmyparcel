"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {

  const [trackings, setTrackings] =
    useState<any[]>([]);

  const [form, setForm] = useState({
    code: "",
    from: "",
    to: "",
    status: "",
    store: "",
    eventTitle: "",
    eventDescription: "",
  });

  useEffect(() => {

    const saved =
      localStorage.getItem("trackings");

    if (saved) {
      setTrackings(JSON.parse(saved));
    }

  }, []);

  const createTracking = () => {

    const updated = [
      ...trackings,
      form,
    ];

    setTrackings(updated);

    localStorage.setItem(
      "trackings",
      JSON.stringify(updated)
    );

    setForm({
      code: "",
      from: "",
      to: "",
      status: "",
      store: "",
      eventTitle: "",
      eventDescription: "",
    });

  };

  const deleteTracking = (
    code: string
  ) => {

    const updated =
      trackings.filter(
        (item) =>
          item.code !== code
      );

    setTrackings(updated);

    localStorage.setItem(
      "trackings",
      JSON.stringify(updated)
    );

  };

  return (
    <main className="min-h-screen bg-black text-white p-12">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-6xl font-bold mb-2">
          Admin Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          TRACKMYPARCEL Management Panel
        </p>

        <div className="bg-zinc-900 rounded-3xl p-8 mb-10">

          <h2 className="text-4xl font-bold mb-8">
            Create Tracking
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-6">

            <input
              placeholder="Tracking Code"
              value={form.code}
              onChange={(e) =>
                setForm({
                  ...form,
                  code: e.target.value,
                })
              }
              className="bg-black rounded-xl px-5 py-4 outline-none"
            />

            <input
              placeholder="Status"
              value={form.status}
              onChange={(e) =>
                setForm({
                  ...form,
                  status: e.target.value,
                })
              }
              className="bg-black rounded-xl px-5 py-4 outline-none"
            />

            <input
              placeholder="Origin"
              value={form.from}
              onChange={(e) =>
                setForm({
                  ...form,
                  from: e.target.value,
                })
              }
              className="bg-black rounded-xl px-5 py-4 outline-none"
            />

            <input
              placeholder="Destination"
              value={form.to}
              onChange={(e) =>
                setForm({
                  ...form,
                  to: e.target.value,
                })
              }
              className="bg-black rounded-xl px-5 py-4 outline-none"
            />

            <input
              placeholder="Store Name"
              value={form.store}
              onChange={(e) =>
                setForm({
                  ...form,
                  store: e.target.value,
                })
              }
              className="bg-black rounded-xl px-5 py-4 outline-none"
            />

            <input
              placeholder="Event Title"
              value={form.eventTitle}
              onChange={(e) =>
                setForm({
                  ...form,
                  eventTitle: e.target.value,
                })
              }
              className="bg-black rounded-xl px-5 py-4 outline-none"
            />

          </div>

          <textarea
            placeholder="Event Description"
            value={form.eventDescription}
            onChange={(e) =>
              setForm({
                ...form,
                eventDescription:
                  e.target.value,
              })
            }
            className="w-full bg-black rounded-xl px-5 py-4 outline-none mb-6 h-32"
          />

          <button
            onClick={createTracking}
            className="bg-green-500 hover:bg-green-400 transition px-8 py-4 rounded-2xl text-xl font-bold"
          >
            Create Tracking
          </button>

        </div>

        <div className="bg-zinc-900 rounded-3xl p-8">

          <h2 className="text-4xl font-bold mb-8">
            Created Labels
          </h2>

          <div className="space-y-5">

            {trackings.map((item) => (

              <div
                key={item.code}
                className="bg-black rounded-2xl p-6 flex items-center justify-between"
              >

                <div>

                  <h3 className="text-4xl font-bold mb-3">
                    {item.code}
                  </h3>

                  <p><strong>From:</strong> {item.from}</p>
                  <p><strong>To:</strong> {item.to}</p>
                  <p><strong>Status:</strong> {item.status}</p>
                  <p><strong>Store:</strong> {item.store}</p>
                  <p><strong>Event:</strong> {item.eventTitle}</p>

                </div>

                <button
                  onClick={() =>
                    deleteTracking(item.code)
                  }
                  className="bg-red-500 hover:bg-red-400 transition px-6 py-3 rounded-xl font-bold"
                >
                  Delete
                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

    </main>
  );
}