import React from "react";
import Testimonials from "../components/Testimonials";
import LogoSection from "../components/LogoSection";
import ServicesSection from "../components/ServicesSection";

export default function Services() {
    return (
        <>
        {/* Services Hero */}


            <section
                className="relative h-screen bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://hope.jamstacktemplates.dev/img/slider/slide2.jpg')",
                }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/45"></div>

                {/* Content */}
                <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
                    <div>
                        <p className="uppercase tracking-[5px] text-white text-lg mb-6">
                            Best solution for your heatlh
                        </p>

                        <h1 className="text-white text-6xl md:text-8xl font-bold leading-tight">
                            Services <span className="text-white text-6xl md:text-8xl font-light mt-2">That</span>
                        </h1>

                        <h1><span className="text-white text-6xl md:text-8xl font-light mt-2">We Provide</span></h1>

                    </div>
                </div>
            </section>

            <ServicesSection />

            <Testimonials />

            <div className="max-w-7xl mx-auto px-6">
                <div className="h-px bg-gray-200"></div>
            </div>

            <LogoSection />
        </>
    );
}