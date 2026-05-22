const reviews = [
  {
    quote: "This was the most transformational experience of my life. I leave this experience as a Bold, Strong, Courageous Leader who is a Warrior for Jesus.",
    name: "Jeff Street",
  },
  {
    quote: "Hands down one of the best investments I've ever made in MYSELF! I've spent close to $100k on coaching programs. This tops all of them TEN FOLD!",
    name: "Devon Nelson",
  },
  {
    quote: "I have changed my mindset from victim to victor. I now have a community of men beside me that have had similar struggles. They feel my pain and are willing to pick me up when I fall.",
    name: "Lee Hilty",
  },
  {
    quote: "My commitments to God, family, and mission are ignited. Guys who would not and should not have been vulnerable all broke down and were built up as men.",
    name: "Corey Miller",
  },
  {
    quote: "The most transformational event I have ever been to. I became a new man and will never be the same... My whole family will be forever changed.",
    name: "Monty Felts",
  },
  {
    quote: "Rise Up Kings opened my heart in a way I honestly cannot fully describe. I truly believe it will be one of the best decisions you make.",
    name: "Johnathan Espindola",
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-10 md:py-20 px-6"
      style={{
        backgroundColor: "#0d0d0d",
        backgroundImage: "repeating-linear-gradient(45deg, rgba(201,168,76,0.04) 0px, rgba(201,168,76,0.04) 1px, transparent 1px, transparent 20px)",
      }}
    >

      <div className="max-w-5xl mx-auto">
        <p className="font-[family-name:var(--font-oswald)] text-[#c9a84c] tracking-[0.25em] uppercase text-sm text-center mb-4">
          Proof
        </p>
        <h2 className="font-[family-name:var(--font-oswald)] text-[22px] md:text-5xl font-bold uppercase text-white text-center mb-4 leading-tight">
          Real Men. <span className="text-[#c9a84c]">Real Results.</span>
        </h2>
        <div className="w-12 h-px bg-[#c9a84c] mx-auto mb-6 md:mb-10" />

        {/* Video - Option A */}
        <div
          className="mb-6 md:mb-10 border-2 border-[#c9a84c] relative aspect-video overflow-hidden"
          style={{ boxShadow: "0 0 24px rgba(201,168,76,.3), 0 0 60px rgba(201,168,76,.1)" }}
        >
          <iframe
            src="https://fast.wistia.net/embed/iframe/q9k0usmdit?web_component=true&seo=true"
            title="Testimonial Video"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>

        {/* Social proof stats */}
        <div className="grid grid-cols-3 mb-6 md:mb-10 border border-[#c9a84c]/20 bg-[#c9a84c]/[0.04]">
          <div className="text-center py-3 md:py-6 px-4 border-r border-[#c9a84c]/20">
            <p className="font-[family-name:var(--font-oswald)] text-[#c9a84c] text-[20px] md:text-4xl font-bold">1,000+</p>
            <p className="text-[#888888] text-[9px] md:text-[11px] uppercase tracking-[.1em] md:tracking-[.15em] mt-1 md:mt-2">5-Star Reviews</p>
          </div>
          <div className="text-center py-3 md:py-6 px-4 border-r border-[#c9a84c]/20">
            <p className="font-[family-name:var(--font-oswald)] text-[#c9a84c] text-[20px] md:text-4xl font-bold">1,000+</p>
            <p className="text-[#888888] text-[9px] md:text-[11px] uppercase tracking-[.1em] md:tracking-[.15em] mt-1 md:mt-2">Lives Changed</p>
          </div>
          <div className="text-center py-3 md:py-6 px-4">
            <p className="font-[family-name:var(--font-oswald)] text-[#c9a84c] text-[20px] md:text-4xl font-bold">3</p>
            <p className="text-[#888888] text-[9px] md:text-[11px] uppercase tracking-[.1em] md:tracking-[.15em] mt-1 md:mt-2">Intensive Days</p>
          </div>
        </div>

        {/* Mobile: horizontal scroll strip */}
        <p className="md:hidden text-[#aaaaaa] text-[11px] font-[family-name:var(--font-oswald)] uppercase tracking-[.15em] text-center mb-2">Swipe to read →</p>
        <div className="md:hidden -mx-6 overflow-x-auto scroll-no-bar">
          <div className="flex gap-3 px-6 pb-3">
            {reviews.map((r, i) => (
              <div key={i} className="bg-[#161616] border-l-[3px] border-[#c9a84c] px-4 py-4 min-w-[240px] max-w-[240px] flex-shrink-0">
                <div className="text-[#c9a84c] text-[11px] tracking-[2px] mb-2">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="text-[#dddddd] text-[11px] leading-[1.65] mb-3">&ldquo;{r.quote}&rdquo;</p>
                <p className="font-[family-name:var(--font-oswald)] text-[#c9a84c] text-[11px] uppercase tracking-[.1em]">{r.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: 2-col grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-3">
          {reviews.map((r, i) => (
            <div key={i} className="bg-[#161616] border-l-[3px] border-[#c9a84c] px-6 py-5">
              <div className="text-[#c9a84c] text-[12px] tracking-[2px] mb-3">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="text-[#dddddd] text-[13px] leading-[1.75] mb-4">&ldquo;{r.quote}&rdquo;</p>
              <p className="font-[family-name:var(--font-oswald)] text-[#c9a84c] text-[12px] uppercase tracking-[.1em]">{r.name}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-6 md:mt-10">
          <a href="#register" className="flex md:inline-flex items-center justify-center gap-4 bg-[#c9a84c] hover:bg-[#e4c06e] text-black font-[family-name:var(--font-oswald)] font-bold uppercase tracking-[.2em] text-sm px-8 py-4 transition-colors duration-200 w-full md:w-auto">
            <span className="flex items-center gap-[3px]">
              <svg className="arrow-left-1 w-[8px] h-[12px]" viewBox="0 0 8 12" fill="rgba(0,0,0,0.4)"><polygon points="0,0 8,6 0,12"/></svg>
              <svg className="arrow-left-2 w-[8px] h-[12px]" viewBox="0 0 8 12" fill="black"><polygon points="0,0 8,6 0,12"/></svg>
            </span>
            Register Now
            <span className="flex items-center gap-[3px]">
              <svg className="arrow-right-1 w-[8px] h-[12px]" viewBox="0 0 8 12" fill="black"><polygon points="8,0 0,6 8,12"/></svg>
              <svg className="arrow-right-2 w-[8px] h-[12px]" viewBox="0 0 8 12" fill="rgba(0,0,0,0.4)"><polygon points="8,0 0,6 8,12"/></svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
