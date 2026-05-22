const pillars = [
  {
    num: "01",
    title: "Faith",
    description: "Keep God at the center of everything. Financial success alone won't create the happiness and fulfillment you're looking for.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3 7h7l-6 4 2 7-6-4-6 4 2-7-6-4h7z"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Family",
    description: "Lead your household with strength and presence. Your family deserves the best version of you.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Fitness",
    description: "A strong body fuels a sharp mind. Take dominion over your health and unlock the energy to lead.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Finance",
    description: "Build wealth with purpose. Create the freedom and legacy God intended for you and your family.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
  },
];

export default function Pillars() {
  return (
    <section
      className="relative py-10 md:py-20 px-6 border-t-[3px] border-[#c9a84c]"
      style={{ backgroundImage: "url('/4Pillars%20BG.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0d0d0d]/65" />
      {/* Bottom fade into FAQ cream */}
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 0%, #f7f5f0 100%)" }} />
      <div className="relative max-w-5xl mx-auto">
        <p className="font-[family-name:var(--font-oswald)] text-[#c9a84c] tracking-[0.25em] uppercase text-sm text-center mb-4">
          The Framework
        </p>
        <h2 className="font-[family-name:var(--font-oswald)] text-[20px] md:text-5xl font-bold uppercase text-center text-white mb-4 leading-tight">
          RUK 4 Pillars of <span className="text-[#c9a84c]">Power</span>
        </h2>
        <div className="w-16 h-px bg-[#c9a84c]/50 mx-auto mb-4 md:mb-12" />

        {/* Mobile: compact number rows (Option C) */}
        <div className="md:hidden flex flex-col gap-[6px] mb-[6px]">
          {pillars.map((pillar, i) => (
            <div key={i} className="flex items-stretch bg-[#0d0d0d]/95 overflow-hidden">
              <div className="font-[family-name:var(--font-oswald)] text-black text-[18px] font-bold bg-[#c9a84c] min-w-[44px] flex items-center justify-center flex-shrink-0">
                {pillar.num}
              </div>
              <div className="py-[10px] px-3 flex-1">
                <div className="font-[family-name:var(--font-oswald)] text-white text-[16px] uppercase tracking-[.06em] mb-[3px] flex items-center gap-[7px]">
                  {pillar.icon}
                  {pillar.title}
                </div>
                <p className="text-[#aaaaaa] text-[10px] leading-[1.55]">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: 4-column grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-3">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="relative overflow-hidden bg-[#0d0d0d] border-t-[3px] border-[#c9a84c] p-8"
            >
              {/* Ghost number watermark */}
              <span
                className="font-[family-name:var(--font-oswald)] text-[#c9a84c] font-bold leading-none select-none pointer-events-none absolute top-3 right-4 text-[80px] opacity-[0.1]"
                aria-hidden="true"
              >
                {pillar.num}
              </span>
              {/* Icon box */}
              <div className="w-8 h-8 border-2 border-[#c9a84c] flex items-center justify-center mb-5">
                {pillar.icon}
              </div>
              <h3 className="font-[family-name:var(--font-oswald)] text-[26px] uppercase tracking-[.08em] text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-[#cccccc] text-[15px] leading-[1.75]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Foundation + 3-Day blocks */}
        <div className="mt-3 grid grid-cols-2 md:grid-cols-2 gap-3 bg-[#0a0a0a]/90 px-4 md:px-7 py-4 md:py-7">
          <div className="border-l-[3px] md:border-l-[4px] border-[#c9a84c] pl-3 md:pl-6">
            <h3 className="font-[family-name:var(--font-oswald)] text-[13px] md:text-[22px] uppercase tracking-[.06em] md:tracking-[.08em] text-white mb-2 md:mb-3">
              Foundation of Faith
            </h3>
            <p className="text-[#cccccc] text-[10px] md:text-[15px] leading-[1.55] md:leading-[1.75]">
              This is NOT a Bible Study or Church. This is a brotherhood of like-minded men who want to take their Faith,
              Family, Fitness &amp; Finances to the next level, while keeping God at the center of their life.
            </p>
          </div>
          <div className="border-l-[3px] md:border-l-[4px] border-[#c9a84c] pl-3 md:pl-6">
            <h3 className="font-[family-name:var(--font-oswald)] text-[13px] md:text-[22px] uppercase tracking-[.06em] md:tracking-[.08em] text-white mb-2 md:mb-3">
              3 Day Intensive
            </h3>
            <p className="text-[#cccccc] text-[10px] md:text-[15px] leading-[1.55] md:leading-[1.75]">
              Rise Up Kings offers a 3-day event designed to re-ignite the power, passion &amp; energy inside, without
              sacrificing what matters most. Learn cutting edge techniques and strategies to transform your mind and
              create a life of liberty &amp; freedom.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
