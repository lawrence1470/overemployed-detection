import { PointerHighlight } from "~/components/ui/pointer-highlight";
import Image from "next/image";

export default function OveremployedRedditSection() {
  return (
    <div className="mx-auto max-w-4xl py-20 px-6">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Reddit Image */}
        <div className="flex-shrink-0">
          <Image
            src="/assets/reddit.png"
            alt="Reddit Overemployed Community"
            width={300}
            height={300}
            className="rounded-2xl shadow-2xl"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            The
            <PointerHighlight>
              <span className="text-red-500">Overemployed</span>
            </PointerHighlight>
            Community
          </h2>

          <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
            <p>
              <strong>451,000+ members</strong> are actively sharing strategies
              to work multiple remote jobs simultaneously, creating a massive
              workforce integrity crisis.
            </p>

            <p>This thriving community openly discusses how to:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Juggle multiple full-time positions</li>
              <li>Avoid detection by employers</li>
              <li>Maximize income through deception</li>
              <li>Navigate conflicting work schedules</li>
            </ul>

            <p className="text-red-600 dark:text-red-400 font-semibold">
              Your employees might be among them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
