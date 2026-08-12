"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { siteConfig } from "@/data/college";

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card text-center py-12">
        <CheckCircle className="mx-auto h-12 w-12 text-green-600" />
        <h3 className="mt-4 font-display text-xl font-bold text-brand-900">Enquiry Submitted!</h3>
        <p className="mt-2 text-stone-600">
          Thank you for your interest. Our admission office will contact you shortly.
          You can also reach us at{" "}
          <a href={`mailto:${siteConfig.emails.primary}`} className="font-medium text-brand-800">
            {siteConfig.emails.primary}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-stone-700">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
            placeholder="Student / Parent name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-stone-700">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-stone-700">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          placeholder="your@email.com"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="standard" className="mb-1 block text-sm font-medium text-stone-700">
            Applying For *
          </label>
          <select
            id="standard"
            name="standard"
            required
            className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          >
            <option value="">Select standard</option>
            <option value="11th">11th Standard</option>
            <option value="12th">12th Standard</option>
          </select>
        </div>
        <div>
          <label htmlFor="stream" className="mb-1 block text-sm font-medium text-stone-700">
            Stream / Batch *
          </label>
          <select
            id="stream"
            name="stream"
            required
            className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          >
            <option value="">Select stream</option>
            <option value="science-neet">Science — NEET Batch</option>
            <option value="science-jee">Science — JEE Batch</option>
            <option value="science-cet">Science — CET Batch</option>
            <option value="science-regular">Science — Regular Board</option>
            <option value="commerce">Commerce</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-stone-700">
          Message / Questions
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          placeholder="Any specific questions about admission, hostel, fees, etc."
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        <Send className="h-4 w-4" />
        Submit Enquiry
      </button>

      <p className="text-xs text-stone-500">
        Or email us directly at{" "}
        <a href={`mailto:${siteConfig.emails.primary}`} className="text-brand-800 underline">
          {siteConfig.emails.primary}
        </a>{" "}
        /{" "}
        <a href={`mailto:${siteConfig.emails.documents}`} className="text-brand-800 underline">
          {siteConfig.emails.documents}
        </a>
      </p>
    </form>
  );
}
