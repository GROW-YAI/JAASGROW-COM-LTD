import React from "react";

const AboutOwner = () => {
  return (
    <div className="bg-gray-100 text-gray-900 py-12 px-6 md:px-16">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-8">
        Meet the Founder
      </h2>

      {/* Owner Info */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Profile Image Placeholder (Replace with actual image) */}
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 text-lg font-semibold">
          Owner's Image
        </div>

        {/* Owner Bio */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-green-800">[Owner's Name]</h3>
          <p className="text-lg text-gray-700 mt-3">
            [Owner's Name] is the visionary behind <strong>JAASGROW</strong>, a company dedicated 
            to revolutionizing organic farming. With a strong passion for 
            <strong> sustainable agriculture</strong> and years of experience in 
            <strong> organic fertilizer production</strong>, [Owner's Name] has been instrumental 
            in helping farmers increase their crop yields while promoting 
            <strong> eco-friendly farming practices</strong>.
          </p>
        </div>
      </div>

      {/* Leadership & Experience */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        {/* Experience */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-green-800 mb-3">🌿 Experience</h3>
          <p>
            With a background in <strong>agricultural sciences</strong> and a deep understanding 
            of organic farming methods, [Owner's Name] has worked closely with farmers to develop 
            solutions that are <strong>cost-effective</strong>, <strong>eco-friendly</strong>, 
            and <strong>highly efficient</strong>. Their expertise has led to the creation of 
            a powerful organic fertilizer that also serves as a natural pesticide.
          </p>
        </div>

        {/* Leadership & Vision */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-green-800 mb-3">🌍 Leadership & Vision</h3>
          <p>
            Under [Owner's Name]’s leadership, <strong>JAASGROW</strong> has grown into a trusted 
            brand in <strong>organic agricultural solutions</strong>. Their goal is to 
            <strong>empower farmers</strong> with sustainable tools, ensuring a future where 
            farming is both <strong>profitable</strong> and <strong>environmentally responsible</strong>.
          </p>
        </div>
      </div>

      {/* Contact
      <div className="text-center mt-12">
        <p className="text-lg font-semibold">📞 Contact: +233 24 956 7921</p>
        <a
          href="https://jaasgrow.com"
          className="text-green-700 font-semibold underline mt-2 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          🌍 Visit JAASGROW's Website
        </a>
      </div> */}
    </div>
  );
};

export default AboutOwner;
