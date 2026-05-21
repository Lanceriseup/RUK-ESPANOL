import Image from "next/image";
import Script from "next/script";

export default function Hero() {
  return (
    <section className="relative min-h-[720px] px-6 md:px-12 py-16 border-b-2 border-[#c9a84c]">
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
        {/* Left-to-dark gradient - dark on left, fades to semi-transparent on right */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #0a0a0a 0%, #0a0a0ACC 38%, rgba(0,0,0,.52) 60%, rgba(0,0,0,.32) 100%)" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-[42fr_58fr] gap-12 items-center">

        {/* ── Left column ── */}
        <div className="text-left">
          {/* Logo */}
          <div className="mb-6">
            <Image
              src="/RUK Logo.png"
              alt="Rise Up Kings Logo"
              width={110}
              height={110}
              priority
              className="object-contain"
            />
          </div>

          {/* Date — prominent at top */}
          <div className="inline-flex items-center gap-3 bg-[#c9a84c] px-5 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-black flex-shrink-0" />
            <span className="font-[family-name:var(--font-oswald)] text-black font-bold text-sm uppercase tracking-[0.25em]">
              July 17–19, 2026 &nbsp;·&nbsp; Costa Rica
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-[family-name:var(--font-oswald)] text-5xl md:text-[58px] font-bold uppercase leading-[1.05] tracking-wide text-white mb-4">
            Rise Up Kings
            <br />
            <span className="text-[#c9a84c]">Español</span>
          </h1>

          {/* Gold rule */}
          <div className="w-10 h-[3px] bg-[#c9a84c] mb-5" />

          {/* Sub-headline */}
          <p className="font-[family-name:var(--font-oswald)] text-base uppercase tracking-[0.08em] text-[#e8e8e8] leading-relaxed mb-5">
            A 3-Day Event That Will Transform You Into The Leader
            <br />And The Man of God You Were Created To Be.
          </p>

          {/* Body */}
          <p className="text-[#cccccc] text-[15px] leading-relaxed mb-8">
            We are now finally able to offer the Rise Up Kings experience in Spanish.
            Extending our teachings to our Spanish speaking brothers has been a long
            time coming, and we see this as a great honor to offer you now.
          </p>

          {/* CTA */}
          <a
            href="#register"
            className="inline-flex items-center gap-4 bg-[#c9a84c] hover:bg-[#e4c06e] text-black font-[family-name:var(--font-oswald)] font-bold uppercase tracking-[.2em] text-sm px-8 py-4 transition-colors duration-200"
          >
            {/* Left arrows pointing inward */}
            <span className="flex items-center gap-[3px]">
              <svg className="arrow-left-1 w-[8px] h-[12px]" viewBox="0 0 8 12" fill="rgba(0,0,0,0.4)"><polygon points="0,0 8,6 0,12"/></svg>
              <svg className="arrow-left-2 w-[8px] h-[12px]" viewBox="0 0 8 12" fill="black"><polygon points="0,0 8,6 0,12"/></svg>
            </span>
            Register Now
            {/* Right arrows pointing inward */}
            <span className="flex items-center gap-[3px]">
              <svg className="arrow-right-1 w-[8px] h-[12px]" viewBox="0 0 8 12" fill="black"><polygon points="8,0 0,6 8,12"/></svg>
              <svg className="arrow-right-2 w-[8px] h-[12px]" viewBox="0 0 8 12" fill="rgba(0,0,0,0.4)"><polygon points="8,0 0,6 8,12"/></svg>
            </span>
          </a>
        </div>

        {/* ── Right column ── */}
        <div>
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
