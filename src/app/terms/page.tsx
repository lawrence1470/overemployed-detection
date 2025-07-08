"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="mb-8 text-4xl font-bold text-white">
            Terms of Service
          </h1>
          <p className="mb-8 text-gray-400">Last updated: January 8, 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing or using the VerifyHire website, APIs, widgets, or
                any related services (collectively, the "Service"), you agree to
                be bound by these Terms of Service ("Terms") and our Privacy
                Policy. If you do not agree, do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                2. Eligibility & Account Registration
              </h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                You must be 18 years or older, have authority to act for your
                company, and provide accurate information.
              </p>
              <p className="text-gray-300 leading-relaxed">
                You're responsible for safeguarding your login credentials—any
                activity under your account is your responsibility.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                3. The Service
              </h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                We provide an invite-only platform that lets verified employers:
              </p>
              <ul className="mb-4 space-y-2 text-gray-300">
                <li>
                  Submit candidate employment data (name, email, dates, job
                  titles, notes).
                </li>
                <li>
                  Cross-reference submissions from other employers to identify
                  overlapping full-time engagements or other risk signals.
                </li>
                <li>
                  Receive analytics, flags, and alerts about potential serial
                  moonlighting.
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                We do not guarantee the accuracy, completeness, or legal
                sufficiency of any user-submitted data.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                4. User Content & Licenses
              </h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                <strong className="text-white">Your Content:</strong> Anything
                you upload or transmit (candidate data, notes, feedback, etc.).
              </p>
              <p className="mb-4 text-gray-300 leading-relaxed">
                You grant us a non-exclusive, worldwide, sublicensable,
                royalty-free license to store, process, analyze, display, and
                share Your Content only as necessary to provide the Service.
              </p>
              <p className="text-gray-300 leading-relaxed">
                You warrant that you have all rights and authorizations to
                upload Your Content and that doing so does not violate any NDA,
                employment contract, privacy law, or third-party right.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                5. Acceptable Use
              </h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                You agree not to:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>Share login credentials or scrape the Service.</li>
                <li>
                  Upload content that is defamatory, discriminatory, or
                  otherwise unlawful.
                </li>
                <li>
                  Use the Service for background checks that are prohibited by
                  local law or without required disclosures/consents (e.g., FCRA
                  in the U.S.).
                </li>
                <li>
                  Attempt to reverse-engineer or compromise the Service's
                  security.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                6. Subscription & Payment
              </h2>
              <ul className="space-y-2 text-gray-300">
                <li>
                  Plans, features, and pricing are described on our Pricing
                  page.
                </li>
                <li>
                  Fees are billed in advance, non-refundable except as required
                  by law.
                </li>
                <li>We may suspend or downgrade accounts for non-payment.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                7. Intellectual Property
              </h2>
              <p className="text-gray-300 leading-relaxed">
                All software, design, text, graphics, and logos are our property
                or our licensors' property and are protected by IP laws. You
                receive no ownership rights—only the limited right to use the
                Service under these Terms.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                8. Feedback
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Any suggested improvements you send us may be used without
                compensation or obligation to you.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                9. Third-Party Integrations
              </h2>
              <p className="text-gray-300 leading-relaxed">
                The Service connects to third-party APIs (e.g., Merge, Finch,
                Justworks). We aren't responsible for third-party services or
                their downtime. Your use of those integrations may be governed
                by separate terms.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                10. Disclaimers
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong className="text-white">"AS IS":</strong> The Service
                  is provided as is and as available.
                </li>
                <li>
                  <strong className="text-white">No Warranties:</strong> We
                  disclaim all express or implied warranties, including
                  merchantability, fitness for a particular purpose, and
                  non-infringement.
                </li>
                <li>
                  <strong className="text-white">
                    No Guarantee of Accuracy:
                  </strong>{" "}
                  Employment data comes from users; we do not verify every
                  entry.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                11. Limitation of Liability
              </h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                To the fullest extent permitted by law:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>
                  Indirect damages (lost profits, data, goodwill) are excluded.
                </li>
                <li>
                  Our total cumulative liability for any claim is capped at the
                  greater of (a) $100 or (b) the amount you paid us in the 12
                  months preceding the claim.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                12. Indemnification
              </h2>
              <p className="text-gray-300 leading-relaxed">
                You agree to indemnify and hold harmless VerifyHire, Inc., its
                officers, employees, and affiliates from any claim or demand
                arising out of (a) Your Content, (b) your violation of these
                Terms, or (c) your misuse of the Service.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                13. Termination
              </h2>
              <ul className="mb-4 space-y-2 text-gray-300">
                <li>
                  You may cancel anytime via your dashboard; no refunds for
                  partial periods.
                </li>
                <li>
                  We may suspend or terminate your account immediately for
                  breach of these Terms or misuse of the Service.
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Sections that by their nature should survive termination (e.g.,
                Licenses, Disclaimers, Limitation of Liability) do survive.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                14. Modifications to Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We may update these Terms from time to time. Material changes
                will be posted on this page and/or emailed. Continued use after
                changes take effect constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                15. Governing Law & Dispute Resolution
              </h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                <strong className="text-white">Governing Law:</strong> These
                Terms are governed by the laws of the State of Delaware,
                excluding conflict-of-law rules.
              </p>
              <p className="mb-4 text-gray-300 leading-relaxed">
                <strong className="text-white">Arbitration:</strong> Any dispute
                not resolved informally will be settled by binding arbitration
                in Delaware under the rules of the American Arbitration
                Association. Class actions are waived.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Either party may seek injunctive relief in court for IP or
                confidentiality breaches.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                16. Export & Compliance
              </h2>
              <p className="text-gray-300 leading-relaxed">
                You will comply with all applicable export-control laws,
                anti-bribery laws, privacy laws, and sanctions programs in
                connection with use of the Service.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                17. Entire Agreement & Severability
              </h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms, plus any order form, constitute the entire
                agreement between you and us regarding the Service. If any
                provision is found unenforceable, the remaining provisions will
                remain in full force.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                18. Contact
              </h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                For questions about these Terms:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <strong className="text-white">Company:</strong> VerifyHire,
                  Inc.
                </li>
                <li>
                  <strong className="text-white">Email:</strong>{" "}
                  <a
                    href="mailto:support@getverifyhire.com"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    support@getverifyhire.com
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
