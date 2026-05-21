"use client";

import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  referralName: string;
}

export default function RegistrationForm() {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    referralName: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to Stripe checkout or backend
    setSubmitted(true);
  }

  return (
    <section id="register" className="bg-[#f7f5f0] py-20 px-6">
      {/* Subtle divider from FAQ */}
      <div className="max-w-3xl mx-auto border-t border-[#c9a84c]/30 mb-16" />
      <div className="max-w-2xl mx-auto">
        {/* Price callout */}
        <div className="text-center mb-10">
          <p className="font-[family-name:var(--font-oswald)] text-[#c9a84c] tracking-[0.25em] uppercase text-sm mb-2">
            Investment
          </p>
          <h2 className="font-[family-name:var(--font-oswald)] text-5xl md:text-6xl font-bold text-[#1a1a1a]">
            $200
          </h2>
          <div className="w-16 h-px bg-[#c9a84c]/50 mx-auto mt-4 mb-4" />
          <p className="font-[family-name:var(--font-oswald)] text-xl uppercase tracking-widest text-[#1a1a1a]">
            Fill Out The Form Below To Get Started.
          </p>
        </div>

        {submitted ? (
          <div className="text-center border border-[#c9a84c]/40 bg-white p-10">
            <p className="font-[family-name:var(--font-oswald)] text-2xl text-[#c9a84c] uppercase tracking-wide mb-2">
              ¡Gracias!
            </p>
            <p className="text-[#555555]">
              We&apos;ve received your information. Our team will be in touch shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#666666] mb-1.5 font-[family-name:var(--font-oswald)]">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full bg-white border border-[#d0ccc4] focus:border-[#c9a84c] text-[#1a1a1a] px-4 py-3 outline-none transition-colors"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#666666] mb-1.5 font-[family-name:var(--font-oswald)]">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-full bg-white border border-[#d0ccc4] focus:border-[#c9a84c] text-[#1a1a1a] px-4 py-3 outline-none transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-[#666666] mb-1.5 font-[family-name:var(--font-oswald)]">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full bg-white border border-[#d0ccc4] focus:border-[#c9a84c] text-[#1a1a1a] px-4 py-3 outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-[#666666] mb-1.5 font-[family-name:var(--font-oswald)]">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-white border border-[#d0ccc4] focus:border-[#c9a84c] text-[#1a1a1a] px-4 py-3 outline-none transition-colors"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-[#666666] mb-1.5 font-[family-name:var(--font-oswald)]">
                Company / Organization
              </label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                className="w-full bg-white border border-[#d0ccc4] focus:border-[#c9a84c] text-[#1a1a1a] px-4 py-3 outline-none transition-colors"
                placeholder="Acme Inc."
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-[#666666] mb-1.5 font-[family-name:var(--font-oswald)]">
                Who Are You Referring? (Name)
              </label>
              <input
                type="text"
                name="referralName"
                value={form.referralName}
                onChange={handleChange}
                className="w-full bg-white border border-[#d0ccc4] focus:border-[#c9a84c] text-[#1a1a1a] px-4 py-3 outline-none transition-colors"
                placeholder="Referral's full name"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#c9a84c] hover:bg-[#e4c06e] text-black font-[family-name:var(--font-oswald)] font-bold uppercase tracking-widest text-lg py-4 transition-colors duration-200 mt-2"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
