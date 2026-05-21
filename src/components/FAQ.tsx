const faqs = [
  {
    question: "What is included in the Rise Up Kings Cost for the event?",
    answer: (
      <>
        <p className="text-[#444444] text-[15px] leading-[1.8] mb-3">The event cost covers:</p>
        <ul className="space-y-2">
          {[
            "Meals during the program dates",
            "Access to over 10 transformative experiences",
            "Exclusive personal and spiritual growth sessions",
            "Personal development workshops",
            "Rise Up Kings gear and materials",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-[5px] flex-shrink-0 w-[6px] h-[6px] rounded-full bg-[#c9a84c]" />
              <span className="text-[#444444] text-[15px] leading-[1.8]">{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    question: "Are there any additional costs I should be aware of?",
    answer: (
      <>
        <p className="text-[#444444] text-[15px] leading-[1.8] mb-3">Beyond the event fee, you may need to consider:</p>
        <ul className="space-y-2">
          <li className="flex items-start gap-3">
            <span className="mt-[5px] flex-shrink-0 w-[6px] h-[6px] rounded-full bg-[#c9a84c]" />
            <span className="text-[#444444] text-[15px] leading-[1.8]">Travel expenses to and from the event</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Is there a payment plan available?",
    answer: (
      <p className="text-[#444444] text-[15px] leading-[1.8]">
        We understand that upfront costs may be challenging for some, which is why we offer payment plan options.
        For more details on structuring your investment, please email{" "}
        <a href="mailto:Jessica@riseupkingsespanol.com" className="text-[#c9a84c] underline underline-offset-2">
          Jessica@riseupkingsespanol.com
        </a>
        .
      </p>
    ),
  },
  {
    question: "What is your refund/cancellation policy?",
    answer: (
      <p className="text-[#444444] text-[15px] leading-[1.8]">
        Cancellations made 30 days or less before the event date are subject to 100% of the $200 registration fee.
        The registration fee is non-refundable.
      </p>
    ),
  },
];

export default function FAQ() {
  return (
    <div className="bg-[#f7f5f0] pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-[family-name:var(--font-oswald)] text-[#c9a84c] tracking-[0.25em] uppercase text-sm text-center mb-4">
            Got Questions?
          </p>
          <h2 className="font-[family-name:var(--font-oswald)] text-3xl md:text-5xl font-bold uppercase text-center text-[#1a1a1a] mb-4 leading-tight">
            Frequently Asked <span className="text-[#c9a84c]">Questions</span>
          </h2>
          <div className="w-16 h-px bg-[#c9a84c] mx-auto mb-12" />

          <div className="flex flex-col gap-0 divide-y divide-[#1a1a1a]/10">
            {faqs.map((faq, i) => (
              <details key={i} className="group">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-5 select-none">
                  <h3 className="font-[family-name:var(--font-oswald)] text-[18px] uppercase tracking-[.04em] text-[#1a1a1a] leading-snug">
                    {faq.question}
                  </h3>
                  {/* Plus / Minus toggle */}
                  <span className="flex-shrink-0 w-7 h-7 border-2 border-[#c9a84c] flex items-center justify-center text-[#c9a84c] font-bold text-lg leading-none group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <div className="pb-5 pl-0 pr-9">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
    </div>
  );
}
