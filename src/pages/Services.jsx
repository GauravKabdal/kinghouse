import { useInView } from "../hooks/useInView";
import { FaShieldAlt, FaConciergeBell, FaUtensils, FaMapMarkedAlt } from "react-icons/fa";
import palashBg from "../assets/palash.webp"

const services = [
  {
    icon: <FaShieldAlt />,
    title: "High Class Security",
  },
  {
    icon: <FaConciergeBell />,
    title: "24 Hours Room Service",
  },
  {
    icon: <FaUtensils />,
    title: "Restaurant",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Tourist Guide Support",
  },
];

const Services = () => {
  const [ref, isVisible] = useInView();

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <p className="uppercase text-sm text-blue-600 tracking-wider mb-2">Services</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-900">
          Strive Only For The Best.
        </h2>
      </div>

      <div
        ref={ref}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto place-items-center"
        
      >
        {services.map((service, index) => (
          <div
            key={index}
            className={`transition-all duration-700 ease-out transform opacity-0 translate-y-10 delay-${index * 150}
            ${isVisible ? "opacity-100 translate-y-0" : ""} 
            bg-white/40 backdrop-blur-md border border-blue-200 hover:border-blue-600 
            rounded-xl shadow-lg hover:shadow-xl p-6 text-center w-full max-w-xs`}
          >
            <div className="text-3xl text-blue-600 mb-4 text-center flex justify-center">{service.icon}</div>
            <h3 className="text-lg font-medium text-blue-900">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
