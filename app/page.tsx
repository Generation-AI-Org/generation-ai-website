export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center space-y-8">
        {/* Logo placeholder */}
        <div className="text-6xl font-bold">
          <span className="text-blue-brand">GENERATION</span>
          <span className="text-neon"> AI</span>
        </div>

        {/* Tagline */}
        <p className="text-xl text-gray-light max-w-md mx-auto">
          Die erste kostenlose KI-Community fuer Studierende im DACH-Raum
        </p>

        {/* Color test cards */}
        <div className="flex gap-4 flex-wrap justify-center mt-12">
          <div className="w-24 h-24 bg-blue-brand rounded-lg flex items-center justify-center text-neon font-semibold">
            Blue
          </div>
          <div className="w-24 h-24 bg-neon rounded-lg flex items-center justify-center text-black-brand font-semibold">
            Neon
          </div>
          <div className="w-24 h-24 bg-gray-light rounded-lg flex items-center justify-center text-black-brand font-semibold">
            Light
          </div>
          <div className="w-24 h-24 bg-black-brand border border-gray-light rounded-lg flex items-center justify-center text-gray-light font-semibold">
            Black
          </div>
        </div>

        {/* CTA placeholder */}
        <button className="mt-8 px-8 py-4 bg-neon text-black-brand font-bold rounded-full hover:opacity-90 transition-opacity">
          Jetzt beitreten
        </button>
      </div>
    </main>
  );
}
