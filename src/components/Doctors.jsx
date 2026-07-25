import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Doctors() {
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);

  const doctors = [
    {
      name: "Dr. Kristina Castle",
      image:
        "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
     {
      name: "Dr. Robert David",
      image:
        "https://hope.jamstacktemplates.dev/img/team/02.jpg",
    },
    {
      name: "Dr. Helen Willmore",
      image:
        "https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
   
    {
      name: "Dr. Sophia Martin",
      image:
        "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    // {
    //   name: "Dr. Olivia James",
    //   image:
    //     "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=800",
    // },
    {
      name: "Dr. Daniel Wilson",
      image:
        "https://images.pexels.com/photos/6129048/pexels-photo-6129048.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const bulletSlides = [0, 1, 3];

  const goToSlide = (index) => {
    swiperRef.current.slideTo(bulletSlides[index]);
    setActive(index);
  };

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-gray-600 font-semibold">
            Meet Our Doctors
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
           <span className="text-red-800">Professional &</span>  Enthusiastic
          </h2>

        </div>

        {/* Swiper */}

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={3}
          spaceBetween={30}
          speed={700}
          loop={false}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {doctors.map((doctor, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-md hover:shadow-xl transition overflow-hidden group">

                <div className="overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition duration-500 p-8"
                  />
                </div>

                <div className="p-8 text-center">

                  <h3 className="text-2xl font-semibold">
                    {doctor.name}
                  </h3>

                  <p className="mt-6 text-gray-500 leading-8">
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Sed ut sapien euismod.
                  </p>

                  <button className="mt-8 uppercase tracking-[2px] font-semibold border-b-2 border-red-800 hover:text-red-800">
                    Read More
                  </button>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Bullets */}

        <div className="flex justify-center mt-12 gap-5">

          {[0, 1, 2].map((item) => (
            <button
              key={item}
              onClick={() => goToSlide(item)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                active === item
                  ? "bg-red-800 scale-125"
                  : "bg-gray-300 hover:bg-red-300"
              }`}
            />
          ))}

        </div>

      </div>
    </section>
  );
}