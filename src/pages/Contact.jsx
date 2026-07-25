import React from "react";

export default function Contact() {
  return (
    <section className="bg-gray-50 py-24 mt-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-gray-500 font-semibold uppercase tracking-[4px]">
            Get In Touch
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Contact <span className="text-red-800">Us</span>
          </h2>

          <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
            Have questions or need assistance? Fill out the form below and our
            medical team will get back to you as soon as possible.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">

          <form className="space-y-6">

            {/* First Row */}
            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-lg px-5 py-4 outline-none focus:ring-2 focus:ring-red-800"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-5 py-4 outline-none focus:ring-2 focus:ring-red-800"
                />
              </div>

            </div>

            {/* Second Row */}
            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-lg px-5 py-4 outline-none focus:ring-2 focus:ring-red-800"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-gray-300 rounded-lg px-5 py-4 outline-none focus:ring-2 focus:ring-red-800"
                />
              </div>

            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-5 py-4 outline-none resize-none focus:ring-2 focus:ring-red-800"
              ></textarea>
            </div>

            {/* Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-red-800 hover:bg-red-900 text-white font-semibold px-10 py-4 rounded-lg transition duration-300 cursor-pointer"
              >
                Send Message
              </button>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}