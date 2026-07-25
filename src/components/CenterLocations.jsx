import React from "react";

export default function CenterLocations() {
  const locations = [
    {
      city: "AHMEDABAD",
      address: "258 Health Avenue, Gujarat, India",
      phone: "+91 98765 43210",
      email: "ahmedabad@hopemedical.com",
    },
    {
      city: "NEW YORK",
      address: "692 Medical Street, NY 10001, USA",
      phone: "+1 212 473 6899",
      email: "newyork@hopemedical.com",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">

      <div className="max-w-7xl mx-auto space-y-16">


        {/* Top Section */}
        <div className="space-y-6">

          <div className="border-b border-gray-300 pb-4">
            <h2 className="text-xl font-bold tracking-[0.25em] text-red-800 uppercase">
              Our Center
            </h2>
          </div>


          <p className="text-[15px] text-gray-500 leading-[1.8] max-w-5xl">
            Hope Medical provides world-class healthcare facilities with
            advanced technology, experienced doctors, and compassionate care.
            Our centers are designed to provide comfortable and accessible
            medical services for patients and families.
          </p>

        </div>



        {/* Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

          {locations.map((location, index) => (

            <div
              key={index}
              className="space-y-5 group"
            >

              {/* City */}
              <h3 className="text-lg font-extrabold tracking-[0.2em] uppercase text-gray-900 group-hover:text-red-800 transition">
                {location.city}
              </h3>


              {/* Details */}
              <div className="text-sm text-gray-500 leading-8 space-y-1">

                <p className="hover:text-red-800 transition cursor-pointer">
                  {location.address}
                </p>

                <p className="hover:text-red-800 transition cursor-pointer">
                  {location.phone}
                </p>

                <p className="hover:text-red-800 transition cursor-pointer">
                  {location.email}
                </p>

              </div>


            </div>

          ))}

        </div>


      </div>

    </section>
  );
}