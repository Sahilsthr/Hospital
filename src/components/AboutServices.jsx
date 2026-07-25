import React from "react";

export default function AboutServices() {
  const column1 = [
    "CARDIOLOGY",
    "NEUROLOGY",
    "ORTHOPEDICS",
    "PEDIATRICS",
  ];

  const column2 = [
    "ONCOLOGY",
    "RADIOLOGY",
    "LABORATORY",
    "DERMATOLOGY",
  ];

  const column3 = [
    "GYNECOLOGY",
    "OPHTHALMOLOGY",
    "DENTAL CARE",
    "EMERGENCY",
  ];

  return (
    <section className="w-full bg-[#f7f5f1] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="border-b border-gray-300 pb-5 mb-10">
          <h2 className="text-2xl font-bold tracking-[0.3em] uppercase text-red-800">
            Services
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-5xl space-y-6 mb-16">
          <p className="text-lg leading-9 text-gray-800">
            Our hospital is dedicated to providing exceptional healthcare through
            advanced medical technology, experienced specialists, and
            compassionate patient care. Every treatment is designed to ensure
            comfort, safety, and the best possible recovery.
          </p>

          <p className="text-gray-500 leading-8">
            From preventive healthcare and diagnostics to complex surgical
            procedures and emergency services, our multidisciplinary team works
            together to deliver personalized care for every patient. We combine
            clinical excellence with a patient-first approach to create a
            healthier community.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-20">

          <div className="space-y-6">
            {column1.map((service) => (
              <div
                key={service}
                className="text-sm font-semibold tracking-[0.25em] uppercase text-gray-800 hover:text-red-800 cursor-pointer transition"
              >
                {service}
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {column2.map((service) => (
              <div
                key={service}
                className="text-sm font-semibold tracking-[0.25em] uppercase text-gray-800 hover:text-red-800 cursor-pointer transition"
              >
                {service}
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {column3.map((service) => (
              <div
                key={service}
                className="text-sm font-semibold tracking-[0.25em] uppercase text-gray-800 hover:text-red-800 cursor-pointer transition"
              >
                {service}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}