"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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

          <h1 className="mb-8 text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="mb-8 text-gray-400">Last updated: January 8, 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                1. Introduction
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Welcome to VerifyHire (the "Service"), operated by VerifyHire,
                Inc. ("Company," "we," "our," or "us"). This Privacy Policy
                explains how we collect, use, disclose, and safeguard
                information when employers ("Users") submit and review candidate
                data through our web and API interfaces.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                2. Information We Collect
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-700">
                  <thead>
                    <tr className="bg-gray-800">
                      <th className="border border-gray-700 px-4 py-3 text-left text-white">
                        Category
                      </th>
                      <th className="border border-gray-700 px-4 py-3 text-left text-white">
                        Examples
                      </th>
                      <th className="border border-gray-700 px-4 py-3 text-left text-white">
                        Source
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 text-gray-300">
                        Account Data
                      </td>
                      <td className="border border-gray-700 px-4 py-3 text-gray-300">
                        Company name, work-email, password hash, role
                      </td>
                      <td className="border border-gray-700 px-4 py-3 text-gray-300">
                        You
                      </td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="border border-gray-700 px-4 py-3 text-gray-300">
                        Candidate Data
                      </td>
                      <td className="border border-gray-700 px-4 py-3 text-gray-300">
                        Candidate name, email, résumé links, job titles,
                        start/end dates, interview notes, risk flags
                      </td>
                      <td className="border border-gray-700 px-4 py-3 text-gray-300">
                        You or your ATS/webhook
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 text-gray-300">
                        Usage Data
                      </td>
                      <td className="border border-gray-700 px-4 py-3 text-gray-300">
                        Log files, IP address, device/browser type, pages
                        viewed, clicks, referrer
                      </td>
                      <td className="border border-gray-700 px-4 py-3 text-gray-300">
                        Automated
                      </td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="border border-gray-700 px-4 py-3 text-gray-300">
                        Integration Tokens
                      </td>
                      <td className="border border-gray-700 px-4 py-3 text-gray-300">
                        OAuth tokens or API keys for HRIS/ATS partners (e.g.,
                        Justworks via Merge/Finch)
                      </td>
                      <td className="border border-gray-700 px-4 py-3 text-gray-300">
                        You, third-party
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 text-gray-300">
                        Cookies / Similar Tech
                      </td>
                      <td className="border border-gray-700 px-4 py-3 text-gray-300">
                        Session ID, analytics identifiers, CSRF token
                      </td>
                      <td className="border border-gray-700 px-4 py-3 text-gray-300">
                        Automated
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Sensitive employment data is stored only for the legitimate
                purpose of cross-reference hiring checks.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                3. How We Use Information
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-700">
                  <thead>
                    <tr className="bg-gray-800">
                      <th className="border border-gray-700 px-4 py-3 text-left text-white">
                        Purpose
                      </th>
                      <th className="border border-gray-700 px-4 py-3 text-left text-white">
                        Legal Basis (GDPR) / Business Purpose (CCPA)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 text-gray-300">
                        Provide & secure the Service
                      </td>
                      <td className="border border-gray-700 px-4 py-3 text-gray-300">
                        Performance of contract; Legitimate interest
                      </td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="border border-gray-700 px-4 py-3 text-gray-300">
                        Match candidate records across organizations
                      </td>
                      <td className="border border-gray-700 px-4 py-3 text-gray-300">
                        Legitimate interest
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 text-gray-300">
                        Fraud & abuse detection (e.g., serial moonlighting)
                      </td>
                      <td className="border border-gray-700 px-4 py-3 text-gray-300">
                        Legitimate interest
                      </td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="border border-gray-700 px-4 py-3 text-gray-300">
                        Customer support and notifications
                      </td>
                      <td className="border border-gray-700 px-4 py-3 text-gray-300">
                        Performance of contract
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-700 px-4 py-3 text-gray-300">
                        Product analytics & improvement
                      </td>
                      <td className="border border-gray-700 px-4 py-3 text-gray-300">
                        Legitimate interest; opt-out cookies
                      </td>
                    </tr>
                    <tr className="bg-gray-900">
                      <td className="border border-gray-700 px-4 py-3 text-gray-300">
                        Compliance with law or court orders
                      </td>
                      <td className="border border-gray-700 px-4 py-3 text-gray-300">
                        Legal obligation
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                4. Sharing & Disclosure
              </h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                We do not sell personal information. We may share:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong className="text-white">Across customers</strong> –
                  Candidate records become visible only to other verified
                  employer accounts once you intentionally contribute them.
                </li>
                <li>
                  <strong className="text-white">Service Providers</strong> –
                  Hosting (e.g., AWS), unified HRIS vendors (Merge, Finch),
                  analytics. Bound by contract to use data solely for our
                  instructions.
                </li>
                <li>
                  <strong className="text-white">Legal / Safety</strong> – If
                  required by law, subpoena, or to protect rights, property, or
                  safety.
                </li>
                <li>
                  <strong className="text-white">Corporate Events</strong> – In
                  connection with merger, acquisition, or asset sale (with
                  notice to you).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                5. Data Retention
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong className="text-white">Employer Account Data</strong>{" "}
                  – Until you delete your account or as required for audits (max
                  7 years).
                </li>
                <li>
                  <strong className="text-white">Candidate Data</strong> –
                  Retained while you hold an active subscription or until you
                  purge it via dashboard; automatically pruned after 24 months
                  of inactivity.
                </li>
                <li>
                  <strong className="text-white">Logs</strong> – 30 days for
                  security; aggregated thereafter.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                6. Security
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We use industry-standard safeguards: TLS in transit, AES-256
                encryption at rest, least-privilege access controls, regular
                penetration tests, and ISO 27001-compliant cloud infrastructure.
                No security measure is perfect; please notify us immediately at{" "}
                <a
                  href="mailto:security@getverifyhire.com"
                  className="text-blue-400 hover:text-blue-300"
                >
                  security@getverifyhire.com
                </a>{" "}
                if you suspect a breach.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                7. International Transfers
              </h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                We are US-based. If you access the Service from outside the US,
                you consent to transferring your information to the United
                States and other jurisdictions that may have different
                data-protection laws.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">EEA/UK:</strong> We rely on
                Standard Contractual Clauses when transferring personal data to
                non-adequacy jurisdictions.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                8. Your Rights
              </h2>
              <ul className="mb-4 space-y-3 text-gray-300">
                <li>
                  <strong className="text-white">EEA/UK</strong> – Access,
                  rectification, erasure, restriction, objection, data
                  portability, and lodge a complaint with a supervisory
                  authority.
                </li>
                <li>
                  <strong className="text-white">California</strong> – Know,
                  delete, correct, opt-out of "sharing" (we don't sell), limit
                  sensitive data processing.
                </li>
                <li>
                  <strong className="text-white">Other Regions</strong> – We
                  honor applicable local laws; contact us for requests.
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Exercise rights via{" "}
                <a
                  href="mailto:support@getverifyhire.com"
                  className="text-blue-400 hover:text-blue-300"
                >
                  support@getverifyhire.com
                </a>
                . We will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                9. Children's Privacy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                The Service targets business users. We do not knowingly collect
                information from anyone under 16.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                10. Third-Party Links & APIs
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Our site may link to third-party sites or embed APIs (e.g.,
                Justworks OAuth screens). This Policy doesn't cover their
                practices; review their privacy statements.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                11. Changes to This Policy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Policy periodically. We'll post the revised
                version and, if changes are material, email you or prompt a
                banner. Continued use after the effective date constitutes
                acceptance.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-white">
                12. Contact Us
              </h2>
              <p className="mb-4 text-gray-300 leading-relaxed">
                Questions, concerns, or data-subject requests?
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <strong className="text-white">Email:</strong>{" "}
                  <a
                    href="mailto:support@getverifyhire.com"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    support@getverifyhire.com
                  </a>
                </li>
                <li>
                  <strong className="text-white">Mail:</strong> VerifyHire, Inc.
                </li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
