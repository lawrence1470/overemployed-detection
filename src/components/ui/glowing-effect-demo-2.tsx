"use client";

import { 
  Search, 
  Shield, 
  Clock, 
  AlertTriangle, 
  BarChart3,
  Users,
  FileText,
  Brain
} from "lucide-react";
import { GlowingEffect } from "~/components/ui/glowing-effect";

export default function GlowingEffectDemoSecond() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Search className="h-4 w-4 text-white" />}
        title="Real-time Detection"
        description="Instantly identify dual employment patterns through advanced analysis."
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Shield className="h-4 w-4 text-white" />}
        title="Privacy First"
        description="Enterprise-grade security protecting your employee data with compliance standards."
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Clock className="h-4 w-4 text-white" />}
        title="Time Conflict Analysis"
        description="Detect overlapping schedules and meeting conflicts across multiple employers."
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<AlertTriangle className="h-4 w-4 text-white" />}
        title="Smart Alerts"
        description="Get notified immediately when suspicious employment patterns are detected."
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Brain className="h-4 w-4 text-white" />}
        title="AI-Powered Insights"
        description="Machine learning algorithms that improve detection accuracy over time."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-gray-800 p-2 md:rounded-3xl md:p-3 bg-gray-900/50">
        <GlowingEffect
          blur={0}
          borderWidth={2}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-gray-900/80 border border-gray-700">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2 bg-gray-800/50">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-lg text-white leading-tight">
                {title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};