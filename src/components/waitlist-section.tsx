"use client";

import { useState } from "react";
import { z } from "zod";
import { api } from "~/trpc/react";

const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  
  const joinWaitlist = api.waitlist.join.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const validatedData = waitlistSchema.parse({ email });
      
      await joinWaitlist.mutateAsync(validatedData);
      
      setIsSubmitted(true);
      setEmail("");
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0]?.message || "Invalid email");
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  if (isSubmitted) {
    return (
      <section id="waitlist" className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">You're in!</h2>
            <p className="text-gray-400 text-lg">
              Thanks for joining our waitlist. We'll keep you updated on our progress.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Join the waitlist
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
            Receive all the latest news and updates,<br />
            as well as early access to the beta.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mb-16">
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              required
            />
            <button
              type="submit"
              disabled={joinWaitlist.isPending}
              className="px-8 py-4 bg-gray-200 text-black font-medium rounded-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {joinWaitlist.isPending ? "Joining..." : "Join waitlist"}
            </button>
          </div>
          {error && (
            <p className="mt-4 text-red-400 text-sm">{error}</p>
          )}
        </form>

        <div className="border-t border-gray-800 pt-12">
          <p className="text-gray-500 text-sm mb-8">Backed by</p>
          <div className="flex items-center justify-center gap-8 opacity-60">
            {/* Placeholder investor logos */}
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl">M</span>
            </div>
            <div className="text-white text-xl font-light">
              ventures*
            </div>
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-black rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}