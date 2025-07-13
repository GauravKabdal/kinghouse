import room1 from "../assets/room1.jpg";
import room2 from "../assets/small.jpg";
import RoomCard from "../components/RoomCard"; // ⬅️ Import the card

const rooms = [
  {
    title: "Cozy Haven Room",
    img: room1,
    desc: "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
    price: "1000",
    features: ["AC", "Wi-Fi", "Room Service"],
  },
  {
    title: "Spacious Serenity Suite",
    img: room2,
    desc: "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.",
    price: "1500",
    features: ["AC", "Wi-Fi", "Balcony"],
  },
];

const Rooms = () => {
  return (
    <section id="rooms" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="uppercase text-sm text-blue-600 tracking-wider mb-2">Our Living Room</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-900">
          The Most Memorable Rest Time Starts Here.
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto px-4">
        {rooms.map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}
      </div>
    </section>
  );
};

export default Rooms;
