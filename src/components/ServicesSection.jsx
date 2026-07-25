import React from "react";
import {
  Heart,
  Eye,
  Brain,
  ShieldPlus,
  Droplets,
  FlaskConical,
  Stethoscope,
  Cross,
  ArrowRight,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Brain className="w-11 h-11 text-red-800" strokeWidth={1.7} />,
      title: "Psychiatry",
      desc: "Professional mental healthcare with personalized treatment plans for every patient.",
    },
    {
      icon: <Eye className="w-11 h-11 text-red-800" strokeWidth={1.7} />,
      title: "Ophthalmology",
      desc: "Complete eye examinations, diagnosis, surgery, and advanced vision care.",
    },
    {
      icon: <Heart className="w-11 h-11 text-red-800" strokeWidth={1.7} />,
      title: "Cardiology",
      desc: "Advanced cardiac diagnosis and treatment by experienced heart specialists.",
    },
    {
      icon: <ShieldPlus className="w-11 h-11 text-red-800" strokeWidth={1.7} />,
      title: "Immunology",
      desc: "Expert care for immune system disorders using modern medical technology.",
    },
    {
      icon: <Droplets className="w-11 h-11 text-red-800" strokeWidth={1.7} />,
      title: "Hematology",
      desc: "Comprehensive diagnosis and treatment for blood-related diseases and disorders.",
    },
    {
      icon: <FlaskConical className="w-11 h-11 text-red-800" strokeWidth={1.7} />,
      title: "Laboratory",
      desc: "Accurate diagnostic testing with modern laboratory equipment and skilled technicians.",
    },
    {
      icon: <Stethoscope className="w-11 h-11 text-red-800" strokeWidth={1.7} />,
      title: "Oncology",
      desc: "Comprehensive cancer screening, diagnosis, and compassionate treatment services.",
    },
    {
      icon: <Cross className="w-11 h-11 text-red-800" strokeWidth={1.7} />,
      title: "Dental Care",
      desc: "Complete dental treatments focused on oral health and beautiful smiles.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-red-800 font-semibold text-sm mb-3">
            Our Services
          </p>

          <h2 className="text-5xl font-bold text-gray-900">
            Best Solution For
            <span className="text-red-800"> Your Health</span>
          </h2>

        </div>

        {/* Services Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-gray-200">

          {services.map((service, index) => (
            <div
              key={index}
              className="border-r border-b border-gray-200 p-10 hover:bg-[#f7f5f1] transition duration-300 group"
            >
              <div className="mb-8">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-800 transition">
                {service.title}
              </h3>

              <p className="text-gray-500 leading-7 mb-10">
                {service.desc}
              </p>

              <button className="flex items-center gap-2 uppercase tracking-[3px] text-xs font-semibold text-gray-800 group-hover:text-red-800 transition cursor-pointer">
                More
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition"
                />
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}