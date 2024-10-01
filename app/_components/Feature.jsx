"use client";

import { motion } from "framer-motion";
import { Users, MessageSquare, Clipboard } from "lucide-react"; // Replace these with custom icons or ones you prefer

const features = [
  {
    icon: Users,
    title: "Real-Time Collaboration",
    description:
      "Work seamlessly with your team using real-time commenting, ensuring everyone is on the same page.",
  },
  {
    icon: Clipboard,
    title: "Customizable Workspaces",
    description:
      "Organize your projects with 5 fully customizable workspaces tailored to your team’s workflow.",
  },
  {
    icon: MessageSquare,
    title: "Real-Time Notifications",
    description:
      "Stay informed with real-time notifications that keep you updated on project changes and comments.",
  },
];

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      className="bg-black p-8 rounded-lg relative overflow-hidden border border-gray-800"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
        transition: { duration: 0.3 },
      }}
    >
      <Icon className="w-12 h-12 text-blue-500 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default function AnimatedFeatures() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
              Collaborative & Productive
            </span>
          </motion.div>
          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Power Up Your Team with Real-Time Tools
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            ConnecSpace offers cutting-edge features like real-time
            collaboration, customizable workspaces, and instant notifications,
            designed to help your team thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
