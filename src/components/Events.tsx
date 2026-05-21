const events = [
  { date: "January 16th–18th, 2026", location: "Dallas, TX", status: "sold-out" },
  { date: "March 6th–8th, 2026", location: "Dallas, TX", status: "sold-out" },
  { date: "April 23rd–25th, 2026", location: "Los Angeles, CA", status: "sold-out" },
  { date: "May 15th–17th, 2026", location: "Dallas, TX", status: "available" },
  { date: "June 12th–14th, 2026", location: "Dallas, TX", status: "available" },
  { date: "June 26th–28th, 2026", location: "Mexico", status: "available" },
  { date: "July 17th–19th, 2026", location: "Costa Rica", status: "available" },
  { date: "July 24th–26th, 2026", location: "Seattle", status: "available" },
  { date: "August 28th–30th, 2026", location: "Chicago", status: "available" },
  { date: "September 11th–13th, 2026", location: "Mexico", status: "available" },
  { date: "September 25th–27th, 2026", location: "Dallas, TX", status: "available" },
  { date: "October 23rd–25th, 2026", location: "Dallas, TX", status: "available" },
  { date: "November 20th–22nd, 2026", location: "Dallas, TX", status: "available" },
  { date: "December 18th–20th, 2026", location: "Mexico", status: "available" },
];

export default function Events() {
  return (
    <section className="bg-[#0d0d0d] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="font-[family-name:var(--font-oswald)] text-[#c9a84c] tracking-[0.25em] uppercase text-sm text-center mb-4">
          Reserve Your Seat
        </p>

        <h2 className="font-[family-name:var(--font-oswald)] text-3xl md:text-5xl font-bold uppercase text-center text-white mb-4 leading-tight">
          Upcoming <span className="text-[#c9a84c]">Events</span>
        </h2>

        <div className="w-16 h-px bg-[#c9a84c]/50 mx-auto mb-12" />

        <div className="grid gap-3">
          {events.map((event, i) => (
            <div
              key={i}
              className={`flex items-center justify-between px-6 py-4 border ${
                event.status === "sold-out"
                  ? "border-gray-700 bg-[#1a1a1a] opacity-60"
                  : "border-[#c9a84c]/40 bg-[#1a1a1a] hover:border-[#c9a84c] transition-colors"
              }`}
            >
              <div>
                <p
                  className={`font-[family-name:var(--font-oswald)] text-lg font-semibold ${
                    event.status === "sold-out" ? "text-gray-500" : "text-white"
                  }`}
                >
                  {event.date}
                </p>
                <p className="text-gray-400 text-sm mt-0.5">{event.location}</p>
              </div>
              {event.status === "sold-out" ? (
                <span className="text-xs font-[family-name:var(--font-oswald)] uppercase tracking-widest text-gray-600 border border-gray-700 px-3 py-1">
                  Sold Out
                </span>
              ) : (
                <a
                  href="#register"
                  className="text-xs font-[family-name:var(--font-oswald)] uppercase tracking-widest text-black bg-[#c9a84c] hover:bg-[#e4c06e] px-4 py-2 transition-colors"
                >
                  Register
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
