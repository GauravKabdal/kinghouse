import guesthouseImg from "../assets/out.jpg";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="about"
      className="relative bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 items-center gap-12">
        
        {/* Left - Text Box */}
        <div
          className={`lg:col-span-6 z-10 bg-white/40 backdrop-blur-md rounded-2xl shadow-xl p-8 sm:p-10 border-2 border-blue-500 transform transition-all duration-700 ${
            inView
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-6 scale-95"
          } hover:scale-[1.02] hover:border-blue-700 hover:shadow-2xl`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 leading-tight mb-4">
            The Best Holidays <br /> Start Here!
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6">
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped
            by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
            Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
            captivating Panchat Dam. Revel in the embrace of comfort, relish
            delightful meals, and unwind in our verdant garden oasis. Your ideal
            retreat beckons, promising a harmonious blend of nature's beauty and
            heartfelt hospitality. Explore the hidden gems of Purulia, creating
            memories that linger long after your stay.
          </p>

          <ul className="text-sm sm:text-base text-blue-800 font-medium space-y-1 mb-6">
            <li>📍 Barshal Water Tank, Manpur, Barhanti</li>
            <li>📞 +91 9007062180</li>
          </ul>

          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-full border border-blue-600 bg-blue-600 text-white font-medium transition duration-300 hover:bg-white hover:text-blue-600"
          >
            Book Now
          </a>
        </div>

        {/* Right - Image */}
        <div
          className={`lg:col-span-6 relative flex justify-center transform transition-all duration-700 ${
            inView
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-6 scale-95"
          }`}
        >
          <img
            src={guesthouseImg}
            alt="Kingsukh Guest House"
            className="rounded-3xl shadow-xl w-full max-w-md lg:max-w-full object-cover"
          />
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse hidden lg:block"></div>
    </section>
  );
};

export default About;
