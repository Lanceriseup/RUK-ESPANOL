import Image from "next/image";
import Script from "next/script";

export default function Hero() {
  return (
    <section className="relative min-h-[500px] md:min-h-[720px] px-6 md:px-12 pt-8 pb-8 md:py-16 border-b-2 border-[#c9a84c]">
      <Script src="https://fast.wistia.net/player.js" strategy="lazyOnload" />

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Hero BG.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        {/* Mobile: uniform dark overlay */}
        <div
          className="absolute inset-0 md:hidden"
          style={{ background: "rgba(10,10,10,0.88)" }}
        />
        {/* Desktop: dark on left, fades right */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{ background: "linear-gradient(to right, #0a0a0a 0%, #0a0a0ACC 38%, rgba(0,0,0,.52) 60%, rgba(0,0,0,.32) 100%)" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-[42fr_58fr] gap-12 items-center">

        {/* ── Left column ── */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">

          {/* Date badge — mobile: compact 1 line centered | desktop: left */}
          <div className="inline-flex items-center gap-2 bg-[#c9a84c] px-5 py-[7px] mb-4 md:mb-6 md:px-5 md:py-2">
            <span className="w-[7px] h-[7px] md:w-2 md:h-2 rounded-full bg-black flex-shrink-0" />
            <span className="font-[family-name:var(--font-oswald)] text-black font-bold text-[12px] md:text-sm uppercase tracking-[.15em] md:tracking-[0.25em] whitespace-nowrap">
              July 17–19, 2026 &nbsp;·&nbsp; Costa Rica
            </span>
          </div>

          {/* Logo + Headline — side by side on mobile | stacked on desktop */}
          <div className="flex items-center gap-4 mb-4 md:hidden">
            <Image
              src="/RUK Logo.png"
              alt="Rise Up Kings Logo"
              width={56}
              height={56}
              priority
              className="object-contain flex-shrink-0"
            />
            <h1 className="font-[family-name:var(--font-oswald)] text-[36px] font-bold uppercase leading-[1.0] tracking-wide text-white text-left">
              Rise Up Kings<br /><span className="text-[#c9a84c]">Español</span>
            </h1>
          </div>

          {/* Logo — desktop only */}
          <div className="hidden md:block mb-6">
            <Image
              src="/RUK Logo.png"
              alt="Rise Up Kings Logo"
              width={110}
              height={110}
              priority
              className="object-contain"
            />
          </div>

          {/* Headline — desktop only */}
          <h1 className="hidden md:block font-[family-name:var(--font-oswald)] text-[58px] font-bold uppercase leading-[1.05] tracking-wide text-white mb-4">
            Rise Up Kings
            <br />
            <span className="text-[#c9a84c]">Español</span>
          </h1>

          {/* Gold rule */}
          <div className="w-10 h-[3px] bg-[#c9a84c] mb-4 md:mb-5" />

          {/* Sub-headline */}
          <p className="font-[family-name:var(--font-oswald)] text-[12px] md:text-base uppercase tracking-[0.08em] text-[#e8e8e8] leading-relaxed mb-4 md:mb-5">
            A 3-Day Event That Will Transform You Into The Leader & The Man of God You Were Created To Be.
          </p>

          {/* Video — mobile only, between sub-headline and body */}
          <div className="md:hidden w-full mb-4">
            <div className="flex items-center justify-center gap-2 bg-gradient-to-br from-[#c9a84c] via-[#e4c06e] to-[#c9a84c] px-4 py-[9px]">
              <svg className="w-[13px] h-[13px] flex-shrink-0" viewBox="0 0 24 24" fill="#000">
                <polygon points="5,3 19,12 5,21" />
              </svg>
              <span className="font-[family-name:var(--font-oswald)] text-[11px] font-bold uppercase tracking-[.2em] text-black">
                Watch This Video First
              </span>
            </div>
            <div className="relative border-2 border-[#c9a84c]" style={{ paddingTop: "56.25%", boxShadow: "0 0 18px rgba(201,168,76,.3)" }}>
              <iframe
                src="https://fast.wistia.net/embed/iframe/ba1ttfkcy7?web_component=true&seo=true"
                title="RUK Espanol - Skylar and Eddie Video"
                allow="fullscreen"
                frameBorder={0}
                scrolling="no"
                className="wistia_embed absolute inset-0 w-full h-full"
                name="wistia_embed"
              />
            </div>
          </div>

          {/* Body */}
          <p className="text-[#cccccc] text-[13px] md:text-[15px] leading-[1.5] md:leading-relaxed mb-6 md:mb-8">
            We are now finally able to offer the Rise Up Kings experience in Spanish.
            Extending our teachings to our Spanish speaking brothers has been a long
            time coming, and we see this as a great honor to offer you now.
          </p>

          {/* CTA */}
          <a
            href="#register"
            className="flex md:inline-flex items-center justify-center gap-4 bg-[#c9a84c] hover:bg-[#e4c06e] text-black font-[family-name:var(--font-oswald)] font-bold uppercase tracking-[.2em] text-sm px-8 py-4 transition-colors duration-200 w-full md:w-auto"
          >
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

        {/* ── Right column — desktop only ── */}
        <div className="hidden md:block">
          {/* Watch CTA above video */}
          <div className="flex items-center justify-center gap-3 bg-gradient-to-br from-[#c9a84c] via-[#e4c06e] to-[#c9a84c] px-4 py-[11px] mb-3">
            <svg className="w-[16px] h-[16px] flex-shrink-0" viewBox="0 0 24 24" fill="#000">
              <polygon points="5,3 19,12 5,21" />
            </svg>
            <span className="font-[family-name:var(--font-oswald)] text-[13px] font-bold uppercase tracking-[.22em] text-black">
              Watch This Video First
            </span>
          </div>

          {/* Video */}
          <div className="relative border-2 border-[#c9a84c]" style={{ paddingTop: "56.25%", boxShadow: "0 0 20px rgba(201,168,76,.45), 0 0 60px rgba(201,168,76,.15)" }}>
            <iframe
              src="https://fast.wistia.net/embed/iframe/ba1ttfkcy7?web_component=true&seo=true"
              title="RUK Espanol - Skylar and Eddie Video"
              allow="fullscreen"
              allowTransparency={true}
              frameBorder={0}
              scrolling="no"
              className="wistia_embed absolute inset-0 w-full h-full"
              name="wistia_embed"
            />
          </div>

          {/* Quote + attribution */}
          <div className="mt-3 bg-[rgba(10,8,0,0.75)] px-4 py-3 text-center" style={{ borderTop: "3px solid #c9a84c" }}>
            <p className="font-[family-name:var(--font-open-sans)] italic text-[14px] text-[#f5f5f5] leading-relaxed mb-[5px]">
              &ldquo;The Most Impactful, Faith-Based, 3-Day Business Intensive On The Planet&rdquo;
            </p>
            <p className="font-[family-name:var(--font-oswald)] text-[11px] uppercase tracking-[.25em] text-[#c9a84c]">
              -- Rise Up Kings
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
