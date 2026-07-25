import {
  Stethoscope,
  Brain,
  Accessibility,
} from "lucide-react";

export default function Features() {
  const data = [
    {
      icon: <Stethoscope size={50} />,
      title: "DIAGNOSE",
      text: "Examination & Diagnosis",
    },
    {
      icon: <Brain size={50} />,
      title: "TREATMENT",
      text: "Treatment of the disease",
    },
    {
      icon: <Accessibility size={50} />,
      title: "CARE HEALTHY",
      text: "Care and recuperation",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-start border-b border-gray-200 pb-10"
            >
              <div>
                <h2 className="text-4xl font-bold uppercase">
                  {item.title}
                </h2>

                <p className="text-gray-500 mt-3 text-xl">
                  {item.text}
                </p>
              </div>

              <div className="text-red-800">
                {item.icon}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}