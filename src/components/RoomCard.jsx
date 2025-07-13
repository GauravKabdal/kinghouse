// components/RoomCard.jsx
import { useInView } from "../hooks/useInView";

const RoomCard = ({ room }) => {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out opacity-0 translate-y-8 ${
        isVisible ? "opacity-100 translate-y-0" : ""
      } group bg-white/60 backdrop-blur-lg border-2 border-blue-200 hover:border-blue-600 rounded-2xl shadow-md hover:shadow-xl overflow-hidden flex flex-col`}
    >
      <img src={room.img} alt={room.title} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col justify-between grow">
        <div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">{room.title}</h3>
          <p className="text-gray-700 text-sm mb-4">{room.desc}</p>
        </div>
        <div className="mt-auto">
          <p className="text-gray-800 text-sm mb-2">
            Starting from <span className="font-semibold text-blue-700">Rs. {room.price}/night</span>
          </p>
          <div className="flex gap-3 flex-wrap mb-4">
            {room.features.map((f, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
              >
                {f}
              </span>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-full font-medium hover:bg-white hover:text-blue-600 border border-blue-600 transition duration-300"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
