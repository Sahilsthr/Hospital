import React, { useState } from "react";

export default function HealthResources() {
  const [expandedFaq, setExpandedFaq] = useState(0);

  const articles = [
    {
      id: 1,
      image:
        "https://hope.jamstacktemplates.dev/img/blog/01.jpg",
      title: "Problems About Social Insurance For Truck Drivers",
      date: "January 12th, 2026",
      author: "Dr. Emily Carter",
    },
    {
      id: 2,
      image:
        "https://hope.jamstacktemplates.dev/img/blog/02.jpg",
      title: "5 Secrets To Coaching Your Employees To Greatness",
      date: "February 8th, 2026",
      author: "Dr. Michael Brown",
    },
    {
      id: 3,
      image:
        "https://hope.jamstacktemplates.dev/img/blog/03.jpg",
      title: "5 Steps To Build Strategy Planning",
      date: "March 20th, 2026",
      author: "Dr. Sarah Wilson",
    },
  ];

  const faqs = [
    {
      id: 0,
      question: "How Can I Book An Appointment With A Doctor?",
      answer:
        "You can easily book an appointment through our website, by calling our reception, or by visiting the hospital. Our staff will help you choose a suitable doctor and appointment time.",
    },
    {
      id: 1,
      question: "Do You Accept Health Insurance?",
      answer:
        "Yes. We accept most major health insurance providers. Please contact our billing department to confirm your insurance coverage before your visit.",
    },
    {
      id: 2,
      question: "What Are Your Hospital Visiting Hours?",
      answer:
        "General visiting hours are from 10:00 AM to 8:00 PM. ICU and special care units may have different visiting policies for patient safety.",
    },
    {
      id: 3,
      question: "Can I Access My Medical Reports Online?",
      answer:
        "Yes. Patients can securely access laboratory reports, prescriptions, and medical history through our online patient portal after logging into their account.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Left */}
        <div>
          <p className="uppercase tracking-[5px] text-gray-500 font-semibold text-sm mb-2">
            Health Resources
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mb-10">
           <span className="text-red-800">Tips & </span> Tricks
          </h2>

          <div className="flex flex-col">
            {articles.map((article, idx) => (
              <div key={article.id}>
                <div className="flex items-start gap-5 py-6">

                  <div className="w-[120px] h-[90px] rounded-lg overflow-hidden shrink-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-semibold leading-7 text-gray-900 hover:text-red-800 cursor-pointer transition">
                      {article.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-3">
                      {article.date}
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="font-medium">
                        {article.author}
                      </span>
                    </p>
                  </div>
                </div>

                {idx !== articles.length - 1 && (
                  <hr className="border-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div>
          <p className="uppercase tracking-[5px] text-gray-500 font-semibold text-sm mb-2">
            Support
          </p>

          <h2 className="text-5xl font-bold text-red-800 mb-10">
            FAQs
          </h2>

          <div className="space-y-2">
            {faqs.map((faq) => {
              const isOpen = expandedFaq === faq.id;

              return (
                <div
                  key={faq.id}
                  className="border-b border-gray-200 py-5"
                >
                  <button
                    onClick={() =>
                      setExpandedFaq(isOpen ? null : faq.id)
                    }
                    className="w-full flex justify-between items-start text-left group"
                  >
                    <span
                      className={`text-lg font-semibold transition ${
                        isOpen
                          ? "text-red-800"
                          : "text-gray-900 group-hover:text-red-800"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span className="ml-5">
                      {isOpen ? (
                        <svg
                          className="w-5 h-5 text-red-800"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18 6L6 18M6 6l12 12"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-4"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-gray-500 leading-8">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <a
              href="#"
              className="uppercase tracking-[4px] text-sm font-semibold text-gray-500 hover:text-sky-600 transition"
            >
              View All Questions
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}