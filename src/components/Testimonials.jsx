import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    address: "Golden Lotus Apartment, Brooklyn, USA",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "The doctors and staff were extremely professional and caring. They made my treatment comfortable and explained everything clearly. Highly recommended for anyone looking for quality healthcare.",
  },
  {
    id: 2,
    name: "Michael Brown",
    address: "Palm Heights, California, USA",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Outstanding medical service with modern facilities. The entire team treated me with kindness and professionalism. I couldn't have asked for a better experience.",
  },
  {
    id: 3,
    name: "Emily Davis",
    address: "Maple Residency, Texas, USA",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "From booking the appointment to follow-up care, everything was seamless. The doctors genuinely care about their patients and provide exceptional treatment.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-24 bg-[#f7f5f1]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-gray-600 font-semibold">
            Testimonial
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
           <span className="text-red-800">Trusted</span>  From Clients
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative flex items-center justify-center">

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-16 w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-red-800 hover:text-white transition"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Card */}
          <div className="w-full max-w-3xl text-center transition-all duration-500">

            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-28 h-28 rounded-full object-cover mx-auto shadow-lg border-4 border-white"
            />

            <p className="mt-10 text-xl text-balck leading-8">
              "{testimonials[current].review}"
            </p>

            <h3 className="mt-10 text-2xl text-red-800 font-semibold">
              {testimonials[current].name}
            </h3>

            <p className="mt-2 text-gray-600">
              {testimonials[current].address}
            </p>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-16 w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-red-800 hover:text-white transition"
          >
            <ChevronRight size={24} />
          </button>

        </div>
      </div>
    </section>
  );
}