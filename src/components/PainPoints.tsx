const highlighted = [
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=240&fit=crop&auto=format",
    alt: "Man alone",
    text: "You feel alone in business and haven't found a community of successful, like-minded men to share this journey with.",
  },
  {
    img: "https://images.unsplash.com/photo-1484981138541-3d074aa97716?w=600&h=240&fit=crop&auto=format",
    alt: "Overwhelmed businessman",
    text: "You struggle balancing your Business, Family, Faith & Fitness.",
  },
  {
    img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=240&fit=crop&auto=format",
    alt: "Couple relationship",
    text: "Your marriage has lost passion & deep intimacy.",
  },
  {
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=240&fit=crop&auto=format",
    alt: "Overworked at desk",
    text: "Your business is all consuming and you are stuck working \"IN\" it.",
  },
];

const remaining = [
  "You struggle being present with your family when home.",
  "You lack the time to be consistently intimate with God.",
  "You lack the leadership skills needed to get to the next level.",
  "You've lost the excitement you once had in your business.",
];

export default function PainPoints() {
  return (
    <section className="bg-[#f7f5f0] py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <p className="font-[family-name:var(--font-oswald)] text-[#c9a84c] tracking-[0.25em] uppercase text-sm text-center mb-4">
          Sound Familiar?
        </p>
        <h2 className="font-[family-name:var(--font-oswald)] text-3xl md:text-5xl font-bold uppercase text-center text-[#1a1a1a] mb-4 leading-tight">
          Some Common Struggles
          <br />
          <span className="text-[#c9a84c]">Businessmen Have:</span>
        </h2>
        <div className="w-16 h-px bg-[#c9a84c] mx-auto mb-12" />

        {/* 4 highlighted cards with images */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {highlighted.map((item, i) => (
            <div key={i} className="bg-white border border-[#e0ddd7] overflow-hidden" style={{boxShadow: '4px 4px 0px #c9a84c'}}>
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-[200px] object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.55) 100%)'}}
                />
              </div>
              <div className="p-5">
                <p className="font-[family-name:var(--font-oswald)] font-semibold uppercase text-[15px] tracking-[.04em] text-[#1a1a1a] leading-snug">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Remaining symptoms divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-[#1a1a1a]/10" />
          <p className="font-[family-name:var(--font-oswald)] bg-[#c9a84c] text-[#111111] text-xs uppercase tracking-[0.22em] whitespace-nowrap px-4 py-[6px]">
            And It Doesn&apos;t Stop There...
          </p>
          <div className="flex-1 h-px bg-[#1a1a1a]/10" />
        </div>

        {/* Remaining stacked rows */}
        <div className="flex flex-col gap-3 mb-12">
          {remaining.map((item, i) => (
            <div key={i} className="flex items-center bg-white border border-[#e0ddd7]">
              <span className="flex items-center justify-center bg-[#c9a84c] px-[18px] self-stretch flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8.5l3.5 3.5 6.5-7" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <p className="font-[family-name:var(--font-oswald)] font-bold uppercase text-[17px] tracking-[.04em] text-[#1a1a1a] leading-snug px-[20px] py-[16px]">{item}</p>
            </div>
          ))}
        </div>

        {/* Closer */}
        <div className="flex items-start gap-6 bg-[#1c1a17] border-l-[5px] border-[#c9a84c] px-9 py-8">
          <span
            className="font-[family-name:var(--font-oswald)] text-[72px] leading-none text-[#c9a84c] opacity-40 flex-shrink-0 -mt-2 select-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <div>
            <p className="font-[family-name:var(--font-oswald)] text-[22px] font-bold uppercase text-white leading-snug mb-4">
              All of these are symptoms of a man who is living{" "}
              <span className="text-[#c9a84c]">below his God-given potential.</span>
            </p>
            <p className="text-[14px] text-[#999999] leading-[1.8]">
              He has untapped power inside of himself that will remain stagnant until it is unlocked.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
