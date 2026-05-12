export default function Loading() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-8">

          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>

          <h1 className="text-white text-2xl font-bold text-center mb-3">
            Searching Shipment
          </h1>

          <p className="text-gray-400 text-center mb-8">
            Connecting to our global logistics network...
          </p>

          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 animate-pulse w-2/3 rounded-full"></div>
          </div>

          <div className="mt-6 space-y-3">
            <div className="h-4 bg-white/10 rounded animate-pulse"></div>
            <div className="h-4 bg-white/10 rounded animate-pulse w-5/6"></div>
            <div className="h-4 bg-white/10 rounded animate-pulse w-4/6"></div>
          </div>

        </div>
      </div>
    </main>
  );
}