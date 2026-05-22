const highlighted = [
  {
    img: "/1.png",
    alt: "Man alone",
    text: "You feel alone in business and haven't found a community of successful, like-minded men to share this journey with.",
  },
  {
    img: "/2.png",
    alt: "Overwhelmed businessman",
    text: "You struggle balancing your Business, Family, Faith & Fitness.",
  },
  {
    img: "/3.png",
    alt: "Couple relationship",
    text: "Your marriage has lost passion & deep intimacy.",
  },
  {
    img: "/4.png",
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
    <section className="bg-[#f7f5f0] py-10 md:py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <p className="font-[family-name:var(--font-oswald)] text-[#c9a84c] tracking-[0.25em] uppercase text-sm text-center mb-4">
          Sound Familiar?
        </p>
        <h2 className="font-[family-name:var(--font-oswald)] text-[22px] md:text-5xl font-bold uppercase text-center text-[#1a1a1a] mb-4 leading-tight">
          Some Common Struggles <span className="text-[#c9a84c]"><br className="hidden md:block" />Businessmen Have:</span>
        </h2>
        <div className="w-16 h-px bg-[#c9a84c] mx-auto mb-8 md:mb-12" />

        {/* 4 highlighted cards with images */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {highlighted.map((item, i) => (
            <div key={i} className="flex md:block bg-white border border-[#e0ddd7] overflow-hidden" style={{boxShadow: '3px 3px 0px #c9a84c'}}>
              <div className="relative flex-shrink-0 w-[90px] md:w-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full md:h-[200px] object-cover"
                />
                <div
                  className="hidden md:block absolute inset-0"
                  style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.55) 100%)'}}
                />
              </div>
              <div className="flex items-center p-3 md:p-5">
                <p className="font-[family-name:var(--font-oswald)] font-semibold uppercase text-[12px] md:text-[15px] tracking-[.04em] text-[#1a1a1a] leading-snug">{item.text}</p>
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
              <span className="flex items-center justify-center bg-[#c9a84c] px-[14px] md:px-[18px] self-stretch flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8.5l3.5 3.5 6.5-7" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <p className="font-[family-name:var(--font-oswald)] font-bold uppercase text-[13px] md:text-[17px] tracking-[.04em] text-[#1a1a1a] leading-snug px-[14px] py-[12px] md:px-[20px] md:py-[16px]">{item}</p>
            </div>
          ))}
        </div>

        {/* Closer */}
        <div className="flex items-start gap-3 md:gap-6 bg-[#1c1a17] border-l-[5px] border-[#c9a84c] px-5 py-6 md:px-9 md:py-8">
          <span
            className="font-[family-name:var(--font-oswald)] text-[48px] md:text-[72px] leading-none text-[#c9a84c] opacity-40 flex-shrink-0 -mt-2 select-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <div>
            <p className="font-[family-name:var(--font-oswald)] text-[16px] md:text-[22px] font-bold uppercase text-white leading-snug mb-3">
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
