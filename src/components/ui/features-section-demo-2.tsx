import { cn } from "~/lib/utils";
import {
  IconShield,
  IconSearch,
  IconChartBar,
  IconAlertTriangle,
  IconClock,
  IconUsers,
  IconFileReport,
  IconBrain,
} from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Real-time Detection",
      description:
        "Instantly identify potential dual employment through advanced calendar and activity analysis.",
      icon: <IconSearch />,
    },
    {
      title: "Privacy First",
      description:
        "Employee data protection with enterprise-grade security and compliance standards.",
      icon: <IconShield />,
    },
    {
      title: "Analytics Dashboard",
      description:
        "Comprehensive insights and trends to understand workforce patterns and risks.",
      icon: <IconChartBar />,
    },
    {
      title: "Smart Alerts",
      description: "Get notified immediately when suspicious employment patterns are detected.",
      icon: <IconAlertTriangle />,
    },
    {
      title: "Time Conflict Analysis",
      description: "Detect overlapping work schedules and meeting conflicts across multiple employers.",
      icon: <IconClock />,
    },
    {
      title: "Team Management",
      description:
        "Manage multiple teams and departments with role-based access controls.",
      icon: <IconUsers />,
    },
    {
      title: "Detailed Reports",
      description:
        "Generate comprehensive reports for HR and legal teams with actionable insights.",
      icon: <IconFileReport />,
    },
    {
      title: "AI-Powered Insights",
      description: "Machine learning algorithms that improve detection accuracy over time.",
      icon: <IconBrain />,
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-0">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col p-4 lg:p-6 relative group/feature bg-gray-900/50 border border-gray-800 lg:border-0 rounded-lg lg:rounded-none transition-all duration-200 hover:bg-gray-800/50",
        // Desktop borders - only on lg screens
        "lg:border-r lg:border-gray-800",
        (index === 0 || index === 4) && "lg:border-l lg:border-gray-800",
        index < 4 && "lg:border-b lg:border-gray-800"
      )}
    >
      <div className="mb-3 text-gray-400 w-5 h-5 lg:w-6 lg:h-6">
        {icon}
      </div>
      <div className="text-base lg:text-lg font-bold mb-2 text-white leading-tight">
        {title}
      </div>
      <p className="text-xs lg:text-sm text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};