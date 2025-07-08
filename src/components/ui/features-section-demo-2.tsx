import { cn } from "~/lib/utils";
import { motion } from "motion/react";
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
    <motion.div
      className={cn(
        "flex flex-col p-4 lg:p-6 relative group/feature bg-gray-900/50 border border-gray-800 lg:border-0 rounded-lg lg:rounded-none transition-all duration-200 hover:bg-gray-800/50 cursor-pointer",
        // Desktop borders - only on lg screens
        "lg:border-r lg:border-gray-800",
        (index === 0 || index === 4) && "lg:border-l lg:border-gray-800",
        index < 4 && "lg:border-b lg:border-gray-800"
      )}
      whileHover={{ 
        scale: 1.02,
        y: -4,
        backgroundColor: "rgba(31, 41, 55, 0.7)",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="mb-3 text-gray-400 w-5 h-5 lg:w-6 lg:h-6"
        whileHover={{ 
          scale: 1.1,
          color: "#ffffff",
          rotate: [0, -5, 5, 0]
        }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>
      <motion.div 
        className="text-base lg:text-lg font-bold mb-2 text-white leading-tight"
        whileHover={{ color: "#f3f4f6" }}
      >
        {title}
      </motion.div>
      <motion.p 
        className="text-xs lg:text-sm text-gray-400 leading-relaxed"
        whileHover={{ color: "#d1d5db" }}
        transition={{ duration: 0.2 }}
      >
        {description}
      </motion.p>
      
      {/* Subtle hover border effect */}
      <motion.div
        className="absolute inset-0 rounded-lg border border-transparent"
        whileHover={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};