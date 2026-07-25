import React from "react";
import { motion } from "framer-motion";

const LeavesIcon = () => (
  <svg
    className="w-12 h-12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M4 4h10v10H4z" />
    <path d="M10 10h10v10H10z" />
  </svg>
);

const MeboraIcon = () => (
  <svg
    className="w-12 h-12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M4 18V6l8 6 8-6v12" />
    <circle cx="5" cy="17" r="1" fill="currentColor" />
  </svg>
);

const UlivexIcon = () => (
  <svg
    className="w-12 h-12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M12 4v12a4 4 0 0 1-8 0V4" />
    <path d="M16 4h4v16h-4" />
  </svg>
);

const StudioIcon = () => (
  <svg
    className="w-12 h-12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M12 3l7 14H5z" />
    <path d="M12 17v4" />
    <circle cx="8" cy="15" r="1" fill="currentColor" />
  </svg>
);

const XeplaIcon = () => (
  <svg
    className="w-12 h-12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M12 3L4 7.5V16.5L12 21L20 16.5V7.5L12 3Z" />
    <path d="M12 3V12M4 7.5L12 12M20 7.5L12 12" />
  </svg>
);

const logos = [
  {
    icon: <LeavesIcon />,
    title: "LEAVES",
    subtitle: "& CO.",
  },
  {
    icon: <MeboraIcon />,
    title: "MEBORA",
    subtitle: "SEO CONSULTANCY",
  },
  {
    icon: <UlivexIcon />,
    title: "ULIVEX",
  },
  {
    icon: <StudioIcon />,
    title: "STUDIO",
  },
  {
    icon: <XeplaIcon />,
    title: "XEPLA",
  },
];

export default function LogoSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f1] py-20">

      {/* Animated Background */}
      <div
        className="absolute inset-0 opacity-40 animate-pulse"
        style={{
          backgroundImage:
            "radial-gradient(circle, #d9d9dd 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">

          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="group flex flex-col lg:flex-row items-center justify-center gap-4 text-center lg:text-left cursor-pointer"
            >
              {/* Icon */}

              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.15,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                className="text-gray-500 group-hover:text-red-800 transition-colors"
              >
                {logo.icon}
              </motion.div>

              {/* Text */}

              <div>

                <h3 className="uppercase tracking-[0.18em] text-lg md:text-xl font-semibold text-gray-700 group-hover:text-black transition-colors">
                  {logo.title}
                </h3>

                {logo.subtitle && (
                  <p className="mt-1 text-xs md:text-sm uppercase tracking-[0.18em] text-gray-400 group-hover:text-gray-700 transition-colors">
                    {logo.subtitle}
                  </p>
                )}

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}