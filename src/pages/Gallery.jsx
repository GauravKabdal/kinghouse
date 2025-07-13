import gallery1 from "../assets/1.jpg";
import gallery2 from "../assets/ayodhya.webp";
import gallery3 from "../assets/baranti.webp";
import gallery4 from "../assets/flower.jpg";
import gallery5 from "../assets/mithonDam.webp";
import gallery6 from "../assets/recep.jpg";
import gallery7 from "../assets/room1.jpg";
import gallery8 from "../assets/small.jpg";
import gallery9 from "../assets/palash.webp";
// import all your gallery images here

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  // ...add the rest here
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-900">Gallery</h2>
        <p className="text-blue-600 mt-2 tracking-widest uppercase">Our Moments Captured</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl shadow-lg bg-white/40 backdrop-blur-md border border-blue-200 hover:shadow-2xl transition-all duration-300 group"
          >
            <img
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
