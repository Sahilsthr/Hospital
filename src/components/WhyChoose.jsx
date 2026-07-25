import {
  Microscope,
  Ambulance,
  Accessibility,
  Droplets,
} from "lucide-react";

export default function WhyChoose() {
  return (
    <section className=" bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="mb-15">

          <p className="uppercase tracking-[4px] text-gray-400">
            WHY CHOOSE HOPE MEDICAL
          </p>

          <h2 className="mt-4 text-6xl font-light">
            <span className="font-bold text-red-800">
              The Best
            </span>{" "}
            For Your Health
          </h2>

          <p className="mt-8 text-gray-500 max-w-2xl leading-8">
            We provide world-class healthcare with modern
            technology and experienced specialists dedicated
            to your well-being.
          </p>

        </div>

        {/* Features */}
<div className="grid lg:grid-cols-2 gap-10 items-center">

  {/* Left Side */}
  <div className="space-y-10">

    <Feature
      icon={<Microscope size={55} />}
      title="MEDICAL FACILITIES"
    />

    <Feature
      icon={<Ambulance size={55} />}
      title="24 HOURS SERVICES"
    />

    <Feature
      icon={<Droplets size={55} />}
      title="PERSONAL SERVICES"
    />

    <Feature
      icon={<Accessibility size={55} />}
      title="DEDICATED PATIENT CARE"
    />

  </div>

  {/* Right Side */}
  <div className="hidden lg:flex justify-center items-end">
    <img
      src="https://images.openai.com/static-rsc-4/v1V0akzdz-_8YHaYA-Wc-OHjOMpau7F1GD17q2sMrKBLMQ_UVEjA-M5B2XGDdx_Enrk7j2FpsvHYqCjPBVbxWOMqoYl1ZxgPCnySDjVksA77S7QM84HHneXCRBC0HlSEgoqMUo8CPEGaP45WFA8lB_IAhrKtJ2Nf7JBsg2p-cq7C9VnS8QapxS1UpcSiXvC4?purpose=fullsize"
      alt="Doctor"
      className="w-auto h-[650px] object-contain"
    />
  </div>

</div>

      </div>
    </section>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="flex gap-6">

      <div className="text-red-800">
        {icon}
      </div>

      <div>

        <h3 className="text-3xl font-bold mb-4">
          {title}
        </h3>

        <p className="text-gray-500 leading-8">
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
          Donec ultricies sollicitudin lacus.
        </p>

      </div>

    </div>
  );
}